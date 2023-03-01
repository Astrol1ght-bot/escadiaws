import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { About } from './About';
import { Contact } from './Contact';

export const createLandingPageRoutes = () => {
  const routes = (
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  );
  return { routes };
};
