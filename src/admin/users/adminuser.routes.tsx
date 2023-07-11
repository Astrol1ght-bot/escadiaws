import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { AdminUserList } from './UserList';

export const createAdminUserRoutes = () => {
  const routes = (
    <Route path='/admin/users'>
      <Route
        index
        element={
          <Auth>
            <AdminUserList></AdminUserList>
          </Auth>
        }
      />
    </Route>
  );
  return { routes };
};
