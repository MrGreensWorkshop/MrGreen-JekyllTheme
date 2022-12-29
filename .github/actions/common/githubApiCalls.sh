#!/usr/bin/env bash

# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

# check the token
if [[ -z "${GITHUB_TOKEN}" ]]; then
  echo "The GITHUB_TOKEN is not found. (environment variable)"
  exit 1
fi

# check the repo
if [[ -z "${GITHUB_REPOSITORY}" ]]; then
  echo "The GITHUB_REPOSITORY is not found. (environment variable)"
  exit 1
fi

githubApiRequest () {
  if ! [[ -z "${2}" ]]; then
    PostStr="-X POST"
  fi
  local curlRet=`
    curl -s \
    ${PostStr} \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer ${GITHUB_TOKEN}" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/repos/${GITHUB_REPOSITORY}/${1} \
    "${2}"
  ` || exit 1

  local chkResp=`echo ${curlRet} | jq 'has("message")'` || exit 1
  if [[ "${chkResp}" = true ]]; then
    echo "Error: ${curlRet}"
    exit 1
  fi
  echo ${curlRet}
}

githubApiRequestCreateRelease () {
  # https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#create-a-release
  # ex payload: {"tag_name":"v1.0.0","target_commitish":"master","name":"v1.0.0","body":"Description of the release","draft":false,"prerelease":false,"generate_release_notes":false}'

  local dataPayload=$(
    jq -n \
    --arg tag "${1}" \
    --arg branch "${2}" \
    --arg title "${3}" \
    --arg releaseNote "${4}" \
    --argjson draftFlg ${5} \
    --argjson preReleaseFlg ${6} \
    --argjson generateRelNotesFlg ${7} \
    '{
      tag_name: $tag,
      target_commitish: $branch,
      name: $title,
      body: $releaseNote,
      draft: $draftFlg,
      prerelease: $preReleaseFlg,
      generate_release_notes: $generateRelNotesFlg
    } | with_entries(select(.value != ""))'
  ) || exit 1

  #echo ${dataPayload}
  dataPayload="-d "${dataPayload}""
  local curlRet=$(githubApiRequest "releases" "${dataPayload}") || exit 1
  echo ${curlRet}
  if [[ ${curlRet} == "Error:"* || ${curlRet} == "" ]]; then
    return 1
  fi
  return 0
}

githubApiRequestCreatePR () {
  # https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#create-a-pull-request
  # ex payload: '{"title":"Amazing new feature","body":"Please pull these awesome changes in!","head":"octocat:new-feature","base":"master"}'

  local dataPayload=$(
    jq -n \
    --arg title "${1}" \
    --arg body "${2}" \
    --arg targetBranch "${3}" \
    --arg sourceBranch "${4}" \
    '{
      title: $title,
      body: $body,
      head: $sourceBranch,
      base: $targetBranch
    } | with_entries(select(.value != ""))'
  ) || exit 1

  #echo ${dataPayload}
  dataPayload="-d "${dataPayload}""
  local curlRet=$(githubApiRequest "pulls" "${dataPayload}") || exit 1
  echo ${curlRet}
  if [[ ${curlRet} == "Error:"* || ${curlRet} == "" ]]; then
    return 1
  fi
  return 0
}

githubApiRequestCreateIssue () {
  # https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue
  # ex payload: '{"title":"Found a bug","body":"I'\''m having a problem with this.","assignees":["octocat"],"milestone":1,"labels":["bug"]}'

  local dataPayload=$(
    jq -n \
    --arg title "${1}" \
    --arg body "${2}" \
    --arg assignees "${3}" \
    --arg milestone "${4}" \
    --arg labels "${5}" \
    '{
      title: $title,
      body: $body,
      assignees: [$assignees],
      milestone: $milestone,
      labels: [$labels]
    } | with_entries(select(.value != ""))'
  ) || exit 1

  #echo ${dataPayload}
  dataPayload="-d "${dataPayload}""
  local curlRet=$(githubApiRequest "issues" "${dataPayload}") || exit 1
  echo ${curlRet}
  if [[ ${curlRet} == "Error:"* || ${curlRet} == "" ]]; then
    return 1
  fi
  return 0
}
