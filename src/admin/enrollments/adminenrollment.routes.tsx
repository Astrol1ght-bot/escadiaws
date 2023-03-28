import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { EnrollmentList } from './EnrollmentList';
import { EnrollmentView } from './EnrollmentView';
import { UpdateEnrollment } from './UpdateEnrollment';

export const createEnrollmentRoutes = () => {
  const routes = (
    <Route path="/admin/enrollments">
      <Route
        index
        element={
          <Auth>
            <EnrollmentList />
          </Auth>
        }
      />
      <Route
        path="view/:id"
        element={
          <Auth>
            <EnrollmentView />
          </Auth>
        }
      />
    </Route>
  );
  return { routes };
};
