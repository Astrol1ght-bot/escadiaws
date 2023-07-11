import { Authenticator as Auth } from '@aws-amplify/ui-react';
import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn } from './SignIn';
import { UserCourse } from './UserCourse';
import { UserCourses } from './UserCourses';

export const createProfileRoutes = () => {
  const routes = (
    <Route path='/profile'>
      <Route
        path='courses'
        element={
          <Auth>
            <UserCourses />
          </Auth>
        }
      />
      <Route
        path='courses/view/:id'
        element={
          <Auth>
            <UserCourse />
          </Auth>
        }
      />
      <Route path='signin' element={<SignIn />} />
    </Route>
  );
  return { routes };
};
