import { UserSignupData } from "./interface";
import { call, takeLatest } from "redux-saga/effects";
import { userApi } from "../../api";
import { StatusCodes } from "http-status-codes";
import { message } from "antd";

function* signupSaga(action: {
  type: string;
  payload: { data: UserSignupData };
}) {
  message.loading("잠시만 기다려 주세요.");
  try {
    const response = yield call(userApi.signup, action.payload.data);
    message.destroy();
    if (response.status === StatusCodes.CREATED) {
      alert("회원 가입이 완료되었습니다.");
      window.location.href = "/";
    }
  } catch (e) {
    const {
      response: { status },
    } = e;
    message.destroy();
    switch (status) {
      case StatusCodes.BAD_REQUEST:
        message.warning("[400] 요청 형식이 잘못되었습니다.");
        break;
      case StatusCodes.CONFLICT:
        message.warning("해당 이메일은 이미 사용 중입니다.");
        break;
      case StatusCodes.NOT_ACCEPTABLE:
        message.warning("해당 이메일은 이미 Github로 회원가입 되어 있습니다.");
        break;
      default:
        message.error("알 수 없는 오류가 발생했습니다.");
        break;
    }
  }
}

function* signupPageSaga(): Generator {
  yield takeLatest("signup/signupSaga", signupSaga);
}

export default signupPageSaga;
