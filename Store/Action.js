import {USERDATA, } from './ActionType';

export const UserData = data => {
  return {
    type: USERDATA,
    payload: data,
  };
};


