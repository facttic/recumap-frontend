import createAuthProvider from './auth'
import createDataProvider from './data'
// import simpleRestProvider from 'ra-data-simple-rest';
// import jsonServerProvider from 'ra-data-json-server';

const { REACT_APP_API_URL } = process.env

const baseUrl = `${REACT_APP_API_URL}/api`

const AuthProvider = createAuthProvider(baseUrl)
const DataProvider = createDataProvider(baseUrl)

export {
  AuthProvider,
  DataProvider
}
  