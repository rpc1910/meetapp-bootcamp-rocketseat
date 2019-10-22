import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { loadProfileSuccess } from './actions';

export function* loadProfile() {
  try {
    const response = yield call(api.get, 'me');

    console.tron.log(response);

    yield put(loadProfileSuccess(response.data));
  } catch (e) {
    toast.error('Não foi possível carregar o perfil do usuário!');
  }
}

export default all([takeLatest('@user/LOAD_PROFILE_REQUEST', loadProfile)]);
