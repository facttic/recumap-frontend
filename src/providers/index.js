// import AuthProvider from './auth'
import createAuthProvider from './auth'
// import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

const { REACT_APP_API_URL } = process.env

const baseUrl = `${REACT_APP_API_URL}/api`

const AuthProvider = createAuthProvider(baseUrl)
// const DataProvider = simpleRestProvider(`${REACT_APP_API_URL}/api`)
const DataProvider = jsonServerProvider(baseUrl)

export {
  AuthProvider,
  DataProvider
}
  