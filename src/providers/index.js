import AuthProvider from './auth'
import simpleRestProvider from 'ra-data-simple-rest';

const { REACT_APP_API_URL } = process.env

console.log(REACT_APP_API_URL)

const DataProvider = simpleRestProvider(REACT_APP_API_URL)

export {
  AuthProvider,
  DataProvider
}
  