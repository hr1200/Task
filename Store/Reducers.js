import {USERDATA, } from './ActionType';

const initialState = {
  UserData: '',
};

export const mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case USERDATA:
      return {...state, UserData: action.payload};
    default:
      return state;
  }
};
