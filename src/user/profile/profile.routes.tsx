import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { SignIn } from './SignIn';

export const createProfileRoutes = () => {
  const routes = (
    <Route path="/profile">
      {/* <Route
        index
        element={
          <Auth>
            <ClientView />
          </Auth>
        }
      />
      <Route
        path="create"
        element={
          <Auth>
            <CreateClient />
          </Auth>
        }
      /> */}
      <Route path="signin" element={<SignIn />} />
    </Route>
  );
  return { routes };
};
