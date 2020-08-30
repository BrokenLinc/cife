import React from 'react';
import axios from 'axios';

const generateApiUrl = `/api/generate`;

// TODO: consider using https://www.npmjs.com/package/axios-hooks
const useGenerate = () => {
  const [data, setData] = React.useState('');
  const [error, setError] = React.useState(null);
  const [fetching, setFetching] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [variables, setVariables] = React.useState({});

  const fetch = async (variables) => {
    const {
      length = 10,
      text = '',
    } = variables;
    setFetching(true);
    setError(undefined);
    setData('');
    setVariables(variables);
    try {
      const response = await axios.post(generateApiUrl, {
        length,
        prompt: {
          text,
        },
      });
      setFetching(false);
      setLoaded(true);
      setData(response.data);
      return response;
    } catch (e) {
      setFetching(false);
      setError(e);
      return false;
    }
  };

  const response = {
    data,
    error,
    fetching,
    loaded,
    variables,
  };
  return [fetch, response];
};

export default useGenerate;
