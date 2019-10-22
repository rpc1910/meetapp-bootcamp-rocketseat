import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', { email, password });

    const { token } = response.data;

    yield put(signInSuccess(token));
    history.push('/dashboard');
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'register', {
      name,
      email,
      password,
    });

    const { token } = response.data;

    yield put(signInSuccess(token));
    toast.success('Cadastro realizado com sucesso!');
    history.push('/dashboard');
  } catch (e) {
    const { response } = e;
    response.data.map(error => toast.error(error.message));
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
