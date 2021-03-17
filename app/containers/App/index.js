/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ProfilePage from 'containers/HomePage/Loadable';
import StartPage from 'containers/HomePage/Loadable';
import ServicePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import '../../styles/index.css';

export default function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/started" component={StartPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/service" component={ServicePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </>
  );
}
