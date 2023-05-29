import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import qs from 'qs';

export async function client(
  endpoint: string | string[],
  {
    data,
    method = 'GET',
    params,
    headers: customHeaders,
    ...customConfig
  }: any = {},
) {
  const token = AsyncStorage.getItem('token');
  const apiURL = API_URL;

  const config = {
    url: `${apiURL}${endpoint}`,
    method: method || (data ? 'POST' : 'GET'),
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...(token && {Authorization: `Bearer ${token}`}),
      ...customHeaders,
    },
    ...customConfig,
  };

  if (params) {
    config.params = params;
    config.method = 'GET';
    config.paramsSerializer = (dataParams: any) =>
      qs.stringify(dataParams, {
        arrayFormat: 'brackets',
        encode: true,
        skipNulls: true,
      });
  }

  if (data) {
    config.data = data;
  }

  return axios(config)
    .then(async response => {
      return response;
    })
    .catch(e => {
      console.log('Error Client', e.response);
    });
}
