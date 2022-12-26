#!/usr/bin/env bash

# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

source .github/scripts/githubApiCalls.sh

# check the base_ref (to get current branch)
if [[ -z "${BASE_REF}" ]];then
  echo "The BASE_REF is not found. (environment variable)"
  exit 1
fi

# get current branch by getting after last "/"
release_branch=${BASE_REF##*/}
echo "Release branch: ${release_branch}"

checkLabels () {
  local name=$1[@]
  local array=("${!name}")
  if [[ " ${array[*]} " =~ " ${2} " ]]; then
    # match
    return 0
  fi
  return 1
}

addContributor () {
  if [[ ${ENABLE_CONTRIBUTORS} = true ]];then
    # get github owner by removing after "/" and only add users other than github owner
    if [[ "${GITHUB_REPOSITORY%/*}" != "${1}" ]];then
      local tmpItem=`printf "$CONTRIBUTORS_LINE_FORMAT" "$1"`
      echo ${tmpItem}
    fi
  fi
}

current_tag=`git describe --abbrev=0 --tags`
previous_tag=$(git describe --abbrev=0 --tags `git rev-list --tags --skip=1  --max-count=1`)

echo "Current tag: ${current_tag}"
echo "Previous tag: ${previous_tag}"

# to get tags from last commit to until now using pretty=format
gitLogResp=`git log --pretty=format:"%s" ${previous_tag}..${current_tag} --reverse --merges --grep='Merge pull request #' | sed -E 's/.*#([0-9]+).*/\1/g'`

pullRequestList=( $gitLogResp )

# if no pull request then exit
if [[ ${#pullRequestList[@]} = 0 ]];then
  echo "There is no pull request"
  exit 1
fi

# curlRet=$(githubApiRequest "pulls/6")
# echo ${curlRet}
# exit 0

for prNo in "${pullRequestList[@]}"; do
  #echo "PR no: ${prNo}"
  # get PR
  curlRespPr=$(githubApiRequest "pulls/${prNo}")
  # get PR author
  prAuthor=`echo ${curlRespPr} | jq '.user.login' | sed 's/\"//g'` || exit 1
  #echo "PR author: ${prAuthor}"
  issueNo=`echo ${curlRespPr} | jq '.body' | grep -o -E '[#]+[0-9]+' | sed 's/[#]//g'` || exit 1
  # get issue
  curlRetIssue=$(githubApiRequest "issues/${issueNo}")
  # get issue title
  issueTitle=`echo ${curlRetIssue} | jq '.title' | sed 's/\"//g'` || exit 1
  # get issue labels
  issueLabels=`echo ${curlRetIssue} | jq '.labels[].name' | sed 's/\"//g'` || exit 1
  issueLabelList=($issueLabels)

  #echo "PR: ${prNo} is related to issue: ${issueNo} Issue title: ${issueTitle} Issue labels: ${#issueLabelList[@]} ${issueLabels}"

  # add contributor even labels is matched or not
  contributors+=$(addContributor "${prAuthor}")

  if [[ ${#issueLabelList[@]} > 0 ]];then
    # check the issue labels
    if checkLabels issueLabelList 'enhancement';then
      tmpItem=`printf "$FEATURE_LINE_FORMAT" "$issueTitle" "$issueNo"` || exit 1
      #echo "${tmpItem}"
      featureIssues+="${tmpItem}"
      # to add each item only once, continue
      continue
    fi

    # check the issue labels
    if checkLabels issueLabelList 'bug';then
      tmpItem=`printf "$BUG_LINE_FORMAT" "$issueTitle" "$issueNo"` || exit 1
      #echo "${tmpItem}"
      bugIssues+="${tmpItem}"
      # to add each item only once, continue
      continue
    fi
  fi

  # issues with not label or labled other than bug or enhancement
  if [[ ${ENABLE_OTHERS} = true ]];then
    tmpItem=`printf "$OTHERS_LINE_FORMAT" "$issueTitle" "$issueNo"` || exit 1
    #echo "${tmpItem}"
    otherIssues+="${tmpItem}"
  fi
done

relese_note=`printf "$RELEASE_NOTE_FORMAT" "${featureIssues}" "${bugIssues}"` || exit 1

# Convert space-split string into an array
featureIssueList=($featureIssues)
bugIssueList=($bugIssues)
otherIssueList=($otherIssues)
contributorList=($contributors)

if [[ ${#featureIssueList[@]} > 0 ]];then
  featureIssues_note=`printf "$FEATURES_FORMAT" "${featureIssues}"` || exit 1
  relese_note+="${featureIssues_note}"
fi

if [[ ${#bugIssueList[@]} > 0 ]];then
  bugIssues_note=`printf "$BUGS_FORMAT" "${bugIssues}"` || exit 1
  relese_note+="${bugIssues_note}"
fi

if [[ ${#otherIssueList[@]} > 0 ]];then
  otherIssues_note=`printf "$OTHERS_FORMAT" "${otherIssues}"` || exit 1
  relese_note+="${otherIssues_note}"
fi

# add only if the number of x is more than one.
if [[ ${#contributorList[@]} > 0 ]];then
  # remove duplicates
  contributorsStr=`echo "$contributors" | tr ' ' '\n' | sort | uniq | tr '\n' ' ' | sed 's/^[ ]*//'` || exit 1
  #echo "after: $contributorsStr"
  # remove last comma from contributors
  contributorsStr=`echo "${contributorsStr}" | sed 's/\(.*\),/\1 /'` || exit 1
  CONTRIBUTORS_note=`printf "$CONTRIBUTORS_FORMAT" "${contributorsStr}"` || exit 1
  relese_note+="${CONTRIBUTORS_note}"
fi

#echo -e "${relese_note}"

# strip tag v1.0.0 -> 1.0.0
strippedTag=`echo "${current_tag}" | sed 's/[v]//g'` || exit 1
# make a release title
releaseNoteTitle=`printf "$RELEASE_TITLE_FORMAT" "$strippedTag"` || exit 1
# create a release
curlRet=$(githubApiRequestCreateRelease "${current_tag}" "${release_branch}" "${releaseNoteTitle}" "${relese_note}" "${RELEASE_DRAFT_FLG}" "${RELEASE_PRE_RELEASE_FLG}" "${RELEASE_GENERATE_RELEASE_NOTES_FLG}")
#echo ${curlRet}

echo "Complete"
exit 0
