import axios from 'axios';
import {Loader} from '../../Store/Action';

const makeRequest = async ({
  url,
  method = 'GET',
  data = null,
  authToken = null,
  params = null,
  dispatch,
}) => {
  dispatch ? dispatch(Loader(true)) : null;
  const config = {
    method,
    headers: {},
  };

  if (authToken) {
    config.headers['Authorization'] = `Bearer ${authToken}`;
  }

  if (params) {
    config.params = params;
  }

  if (method === 'POST' && data) {
    if (data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
      config.data = data;
    } else {
      config.headers['Content-Type'] = 'application/json';
      config.data = JSON.stringify(data);
    }
  }

  try {
    console.log('api call route', url, config);
    const response = await axios(url, config);
    console.log(` ${url}  ${'\t'} response:`, response);
    dispatch ? dispatch(Loader(false)) : null;
    return response.data;
  } catch (error) {
    dispatch ? dispatch(Loader(false)) : null;
    console.error(`Error making ${method} request:`, error);
    throw error;
  }
};

export default makeRequest;
