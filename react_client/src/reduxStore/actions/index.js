import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "../../constants/storeActionTypes";
import axios_instance from "../../apis/streams";

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

// I use redux-thunk for asyncronous requests
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  // Hago la petición para crear el registro con un nuevo objeto que contiene formValues y userId!!
  const response = await axios_instance.post("/streams", {
    ...formValues,
    userId
  });
  // dispatch an action
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

// GET STREAMS
export const fetchStreams = () => async dispatch => {
  const response = await axios_instance.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// GET STREAM BY ID
export const fetchStream = id => async dispatch => {
  const response = await axios_instance.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

// PUT EDIT STREAM
export const editStream = (id, formValues) => async dispatch => {
  const response = await axios_instance.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

// DELETE STREAM
export const deleteStream = id => async dispatch => {
  // ya no se recibe nada en el response, solo se elimina el registro!!!
  await axios_instance.delete(`/streams/${id}`);
  // en el payload se manda el id, y se borra el stream en el reducer!!!
  dispatch({ type: DELETE_STREAM, payload: id });
};
