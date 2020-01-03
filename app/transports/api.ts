const API_PREFIX = '/api';

interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: any;
  headers?: any[];
}

export const apiRequest = ({
  method = 'POST',
  url,
  body,
  headers = []
}: ApiRequest) => {
  url = API_PREFIX + url;

  console.info('TRANSPORT', 'START', { method, url, body, headers });

  return new Promise((resolve /*, reject*/) =>
    setTimeout(() => {
      resolve({ mock: 'replace this by whatever you want' });
    }, 200)
  ).then(response => {
    console.info('TRANSPORT', 'SUCCESS', {
      method,
      url,
      body,
      headers,
      response
    });
    return response;
  });
};
