import axios from 'axios';

// Creating an axios instance with default configurations
export default axios.create({
  // Setting the base URL for the API requests
  baseURL: 'https://api.rawg.io/api',
  // Setting the default query parameters for the API requests
  params: {
    // API key used for authentication and access control
    key: '9ce70ae4ff2345bdb2014e5a715bbd9a',
  },
});
