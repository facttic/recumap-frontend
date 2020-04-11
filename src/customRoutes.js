import React from 'react';
import { Route } from 'react-router-dom';
import { Authenticated } from 'react-admin';
import PrivateHome from './components/PrivateHome'
import PublicHome from './components/PublicHome'
import NodesMap from './components/Map/Map'

export default [
    <Route
      exact path="/home"
      render={() =>
        <Authenticated>
            <PrivateHome />
        </Authenticated>
      }
    />,
    <Route exact path="/" component={PublicHome} />,
    <Route exact path="/nodesmap" component={NodesMap} />,
    <Route exact path="/resources/map" component={NodesMap} />,

];