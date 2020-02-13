import { SIGN_IN, SIGN_OUT } from "../../constants/storeActionTypes";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    // añado al ction como payload el userId
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
