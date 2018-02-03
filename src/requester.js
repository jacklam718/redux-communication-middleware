import axios from 'axios';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default async ({
  endpoint,
  method,
  data,
  headers,
}: {
  endpoint: string,
  method: string,
  data?: Object,
  headers?: Object,
}): Promise => {
  const options = {
    url: endpoint,
    method,
    data,
    headers: Object.assign({}, defaultHeaders, headers),
  };

  // handle api response
  try {
    return await (await axios(options)).data;
  } catch (error) {
    throw error;
  }
};
