import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/LOAD_PROFILE_SUCCESS':
        draft.profile = action.payload.profile;
        break;
      default:
    }
  });
}
