// src/store/index.js

/* Por último, vamos copiar o arquivo que contém nossa store, action e reducer. Para fins didáticos estamos com tudo no mesmo arquivo, mas as boas práticas pedem que deixemos cada parte em um arquivo separado, tanto para manter o código mais fácil de ser lido, quanto para fazer da manutenção menos complexa.  */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return {
    type: GET_IMAGE,
    payload: json.message
  };
}

function requestDog() {
  return {
    type: REQUEST_IMAGE
  };
}

function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error
  };
}

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return {
        ...state,
        isFetching: true
      };
    case GET_IMAGE:
      return {
        ...state,
        imagePath: action.payload,
        isFetching: false
      };
    case FAILED_REQUEST:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;