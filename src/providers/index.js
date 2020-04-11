import { fetchUtils } from 'react-admin';
// import AuthProvider from './auth'
import createAuthProvider from './auth'
// import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

const { REACT_APP_API_URL } = process.env

const baseUrl = `${REACT_APP_API_URL}/api`

const AuthProvider = createAuthProvider(baseUrl)
// const DataProvider = simpleRestProvider(`${REACT_APP_API_URL}/api`)


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    const token = localStorage.getItem('token')
    options.headers.set('Authorization', token);
    return fetchUtils.fetchJson(url, options);
};

const DataProvider = jsonServerProvider(baseUrl, httpClient)

export {
  AuthProvider,
  DataProvider
}
  