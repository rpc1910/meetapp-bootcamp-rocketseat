export function loadProfileRequest() {
  return {
    type: '@user/LOAD_PROFILE_REQUEST',
  };
}

export function loadProfileSuccess(profile) {
  return {
    type: '@user/LOAD_PROFILE_SUCCESS',
    payload: { profile },
  };
}
