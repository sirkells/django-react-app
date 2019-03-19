import * as actionType from "./actionTypes";
import axios from "axios";

// create an action template
export const authStart = () => {
  return {
    type: actionType.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionType.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionType.AUTH_FAIL,
    error: error
  };
};
export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  return {
    type: actionType.AUTH_LOGOUT
  };
};

export const checkTimeout = expTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expTime * 1000);
  };
};

// actions to be dispatched
export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .get("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkTimeout(3600));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authRegister = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .get("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkTimeout(3600));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const autoCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        const timeDiff =
          (expirationDate.getTime() - new Date().getTime()) / 1000;
        dispatch(checkTimeout(timeDiff));
      }
    }
  };
};
