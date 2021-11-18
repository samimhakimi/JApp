import { authConstants } from "../constants/authConstants";
import authServices from "../../services/authServices";
import { endpoints } from "../../services/endpoints";
export const registerAction = (data) => async (dispatch) => {
  dispatch({
    type: authConstants.REGISTER_LOADING,
  });
  try {
    const _auth = new authServices();
    const response = await _auth.post(endpoints.REGISTER, data);

    if (response && response.data.token) {
      await _auth.saveAccessToken(response.data);
      dispatch({
        type: authConstants.REGISTER_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } else {
      dispatch({
        type: authConstants.REGISTER_FAILURE,
        error: response.data,
      });
    }

  } catch (error) {
    dispatch({
      type: authConstants.REGISTER_FAILURE,
      error: error,
    });
  }
};

export const loginAction = (data) => async (dispatch) => {
  dispatch({
    type: authConstants.LOGIN_LOADING,
  });
  try {
    const _auth = new authServices();
    const response = await _auth.post(endpoints.LOGIN, data);

    if (response.data.idToken || response.data.token) {
      await _auth.saveAccessToken(response.data);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        error: response.data,
      });
    }

    
  } catch (error) {
    dispatch({
      type: authConstants.LOGIN_FAILURE,
      error: error,
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  const _auth = new authServices();
  await _auth.removeAccessToken();
  dispatch({
    type: authConstants.LOGOUT_SUCCESS,
  });
};
