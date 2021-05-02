import { message } from "antd";
import { AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { call, takeLatest } from "redux-saga/effects";
import { userApi } from "../../api";
import { UserLoginData, UserLoginResponse } from "./interface";

function* loginSaga(action: {
  type: string;
  payload: { data: UserLoginData };
}) {
  message.loading("잠시만 기다려 주세요.");
  try {
    const response: AxiosResponse<UserLoginResponse> = yield call(
      userApi.login,
      action.payload.data,
    );
    message.destroy();
    if (response.status === StatusCodes.OK) {
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
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
      case StatusCodes.NOT_FOUND:
        message.error("이메일 또는 비밀번호가 잘못되었습니다.");
        break;
      case StatusCodes.NOT_ACCEPTABLE:
        message.warning("해당 이메일은 이미 Github로 가입되어 있습니다.");
        break;
      default:
        message.error("알 수 없는 오류가 발생했습니다.");
        break;
    }
  }
}

function* loginPageSaga(): Generator {
  yield takeLatest("login/loginSaga", loginSaga);
}

export default loginPageSaga;
