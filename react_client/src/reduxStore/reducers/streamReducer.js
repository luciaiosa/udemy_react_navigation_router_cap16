import _ from "lodash";
// I'll use Lodash methods to work with objects
import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "../../constants/storeActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    // gets the record from the API and saves it into the redux store
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // devuelve una copia del estado, omitiendo el registro con el id que llega del action.payload
      return _.omit(state, action.payload);
    case FETCH_STREAMS:
      // De la request a la API llega un array de objetos (con id, title, description), y lo tenemos que convertir a un objeto!!
      // El estado del redux store es un objeto!!

      // mapKeys es una función del lodash que recibe un array y devuelve un objeto
      // las keys del nuevo objeto se cogen de cada registro individual del array
      // se le pasan como params: el listado de streams que le llega desde la API,
      // y el "id", que significa que el id será el key para el nuevo registro (objeto) creado desde el array
      console.log(state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    // We are creating a new object. We're taking all the current records we have inside of our state,
    // and adding them in. Then, calling mapKeys with the list of streams that we receive from the API, and we're going to create an object with the keys iquals with the id of each one of the records
    default:
      return state;
  }
};

// Ejemplo _.mapKeys():
// const colorsArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
// _.mapKeys(colorsArray, "id");  // result: objeto con las keys iguales a los ids
// {"1":{"id":1},"2":{"id":2},"3":{"id":3}}

// return { ...state, [action.payload.id]: action.payload };

// (ES2015 syntax) es equivalente a:

// const newState = { ... state };
// newState[ action.payload.id ] = action.payload;
// return newState;
