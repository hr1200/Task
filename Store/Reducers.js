import {USERDATA, ALERTPOPUPMSG, LOADER} from './ActionType';

const initialState = {
  UserData: '',
  AlertPopupMsg: '',
  Loader: false,
};

export const mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case USERDATA:
      return {...state, UserData: action.payload};
    case ALERTPOPUPMSG:
      return {...state, AlertPopupMsg: action.payload};
    case LOADER:
      return {...state, Loader: action.payload};
    default:
      return state;
  }
};
