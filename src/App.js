import React from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';

import { PointsList } from './components/Points';
import {
  ResourceList,
  ResourcePost,
  ResourceEdit,
  ResourceShow
} from './components/Resources';
import { UserList } from './components/Users';
import { OrgList } from './components/Orgs';
import customRoutes from './customRoutes'
import PrivateHome from './components/PrivateHome'
import AppLayout from './AppLayout'
import { AuthProvider, DataProvider } from './providers'

const App = () => (
  <Admin
    authProvider={AuthProvider}
    customRoutes={customRoutes}
    dataProvider={DataProvider}
    dashboard={PrivateHome}
    layout={AppLayout}
  >
    <Resource name="users" list={UserList} />
    <Resource name="Puntos" list={PointsList} />
    <Resource name="orgs" list={OrgList} />
    <Resource
      name="resources"
      list={ResourceList}
      edit={ResourceEdit}
      create={ResourcePost}
      show={ResourceShow}
    />
  </Admin>
);

export default App;
