export const setLogin = (name) => {
  return {
    type: 'USER_LOGIN',
    payload: name,
  };
};

export const setUserId = (id) => {
  return {
    type: 'USER_ID',
    payload: id,
  };
};

export const setLogged = (loading) => {
  return {
    type: 'USER_LOGGED',
    payload: loading,
  };
};

export const login = (username, uid) => {
  return (dispatch) => {
    dispatch(setLogin(username));
    dispatch(setUserId(uid));
    dispatch(setLogged(true));
  };
};
