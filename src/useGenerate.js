import React from 'react';
import axios from 'axios';

const generateApiUrl = `${process.env.REACT_APP_SERVER_URL}/generate`;

const useGenerate = () => {
  const [data, setData] = React.useState('');
  const [error, setError] = React.useState(null);
  const [fetching, setFetching] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const fetch = async (props) => {
    const {
      length = 10,
      text = '',
    } = props;
    setFetching(true);
    setError(undefined);
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
  };
  return [fetch, response];
};

export default useGenerate;
