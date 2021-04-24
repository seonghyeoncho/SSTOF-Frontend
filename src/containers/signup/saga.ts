import { UserSignupData } from './interface';
import { call, put } from 'redux-saga/effects';
import { userApi } from '../../api';

function* signupSaga(action: { type: string; payload: UserSignupData }) {
  yield put({ type: '', payload: true });
  try {
      const response = yield call(userApi.signUp, action.payload);
  }
}
