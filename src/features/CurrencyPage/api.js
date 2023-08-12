import {ApiRequestError} from '../../utils/errors';
import instanse from '../../utils/axios';

export function fetchCurrencies(params = {}, rest = {}) {
  return instanse.get('/ticker', {params, ...rest}).then(({data, error}) => {
    if (data && !error) {
      return data;
    }
    throw new ApiRequestError('Failed fetch activities: /ticker', {
      params,
      rest,
    });
  });
}
