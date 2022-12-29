#!/usr/bin/env bash

# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

source .github/actions/common/githubApiCalls.sh

# setting bots username and email
runResp=`git config --local user.name "${GITHUB_ACTIONS_BOT_USER_NAME}"`
if [[ "$?" != 0 ]]; then
  echo ${runResp}
  exit 1
fi

runResp=`git config --local user.email "${GITHUB_ACTIONS_BOT_EMAIL}"`
if [[ "$?" != 0 ]]; then
  echo ${runResp}
  exit 1
fi

# switch to main branch
runResp=`git checkout main`
if [[ "$?" != 0 ]]; then
  echo ${runResp}
  exit 1
fi

# get the github-pages gem version
localGithubPagesVersion=`cat ${BUNDLE_GEMFILE} | grep "^gem \"github-pages" | grep -o -E '[0-9]+'` || exit 1
echo "Local github-pages gem version: ${localGithubPagesVersion}"

# check the latest github-pages gem version
latestGithubPagesVersion=`gem list '^github-pages$' -r | grep -o -E '[0-9]+'` || exit 1
echo "Latest updatable github-pages gem version: ${latestGithubPagesVersion}"

if [[ ${latestGithubPagesVersion} = ${localGithubPagesVersion} || ${latestGithubPagesVersion} < ${localGithubPagesVersion} ]]; then
  echo "github-pages update is not required"
  exit 0
fi

echo "Local github-pages version is updatable"

# update version
runResp=`sed -i "s|gem \"github-pages\", \"~> \([0-9\.]*\).*|gem \"github-pages\", \"~> ${latestGithubPagesVersion}\"|" ${BUNDLE_GEMFILE}` || exit 1

localGithubPagesVersionTmp=`cat ${BUNDLE_GEMFILE} | grep "^gem \"github-pages" | grep -o -E '[0-9]+'` || exit 1
echo "Local github-pages gem version is now: ${localGithubPagesVersionTmp}"

# update latest version
runResp=`bundle update`
if [[ "$?" != 0 ]]; then
  echo "bundle update is failed."
  echo ${runResp}
  exit 1
fi
#echo ${runResp}

# build the site
buildRet=`JEKYLL_ENV=production bundle exec jekyll build --safe`
if [[ "$?" == 0 ]]; then
  # if compile is succesfull then push changes into a new branch and create a PR
  echo "jekyll build is succeeded."

  # create a branch using current changes
  runResp=`git switch -c ${PR_BRANCH} -m`
  if [[ "$?" != 0 ]]; then
    echo ${runResp}
    exit 1
  fi

  # commit changes
  runResp=`git commit -am "Update github-pages gem version from ${localGithubPagesVersion} to ${latestGithubPagesVersion} in Gemfile"`
  if [[ "$?" != 0 ]]; then
    echo ${runResp}
    exit 1
  fi

  # push the changes
  runResp=`git push --set-upstream origin ${PR_BRANCH}`
  if [[ "$?" != 0 ]]; then
    echo ${runResp}
    exit 1
  fi

  issueBody=`printf "$ISSUE_TEMPLATE_OK"` || exit 1
  #echo -e "${issueBody}"

  # create an issue
  curlRet=$(githubApiRequestCreateIssue "Bump Up github-pages version" "${issueBody}" "${GITHUB_REPOSITORY%/*}" "" "Auto Update")
  if [[ "$?" != 0 ]]; then
    echo "Creating issue is failed."
    echo ${curlRet}
    exit 1
  fi

  # get the issue number from returned json
  issueNo=`echo ${curlRet} | jq '.number' | sed 's/\"//g'` || exit 1
  #echo "Issue no: ${issueNo}"

  # use issue number in the PR
  prBody=`printf "$PR_TEMPLATE" "$issueNo" "$PR_MESSAGE"` || exit 1
  #echo -e "${prBody}"

  # create a PR
  curlRet=$(githubApiRequestCreatePR "Gemfile github-pages gem version update" "${prBody}" "${TARGET_BRANCH}" "${PR_BRANCH}")
  if [[ "$?" != 0 ]]; then
    echo "Creating PR is failed."
    echo ${curlRet}
    exit 1
  fi
else
  echo "jekyll build has failed."
  issueBody=`printf "$ISSUE_TEMPLATE_NG" "jekyll build error: $buildRet"` || exit 1
  #echo -e "${issueBody}"

  # create an issue
  curlRet=$(githubApiRequestCreateIssue "After bumping up github-pages version, build has failed" "${issueBody}" "${GITHUB_REPOSITORY%/*}" "" "bug")
  if [[ "$?" != 0 ]]; then
    echo "Creating issue is failed."
    echo ${curlRet}
    exit 1
  fi
fi

echo "Complete"
exit 0
