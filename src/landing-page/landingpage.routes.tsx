import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';

export const createLandingPageRoutes = () => {
  const routes = (
    <Route path="/">
      <Route index element={<LandingPage />} />
    </Route>
  );
  return { routes };
};
