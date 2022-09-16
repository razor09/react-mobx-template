import { QueryParams, RequestMethod } from './typings';

const generateUrl = (endpoint: string, queryParams?: QueryParams): string => {
  if (queryParams) {
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join('&');
    return `${endpoint}?${queryString}`;
  } else {
    return endpoint;
  }
};

export const apiCall = async <R, B extends object, Q extends QueryParams>(
  method: RequestMethod,
  endpoint: string,
  body?: B,
  queryParams?: Q,
): Promise<R> => {
  try {
    const url = generateUrl(endpoint, queryParams);
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      credentials: 'same-origin',
    });
    return response.json();
  } catch (reason: unknown) {
    throw reason;
  }
};
