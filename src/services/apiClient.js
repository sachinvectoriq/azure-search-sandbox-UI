import axios from 'axios';

const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API || 'https://app-azuresearch-qa-evolve.azurewebsites.net', //API HAS BEEN CHANGED  from https://app-azuresearch-qa-emo.azurewebsites.net
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default apiClient;
