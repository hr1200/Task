import {USERDATA, ALERTPOPUPMSG, LOADER} from './ActionType';

export const UserData = data => {
  return {
    type: USERDATA,
    payload: data,
  };
};

export const Loader = data => {
  return {
    type: LOADER,
    payload: data,
  };
};

export const AlertPopupMsg = data => {
  return {
    type: ALERTPOPUPMSG,
    payload: data,
  };
};
