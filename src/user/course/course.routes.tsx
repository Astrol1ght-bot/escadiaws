import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { CourseCatalog } from './CourseCatalog';
import { CourseSignUp } from './CourseSignUp';

export const createCourseRoutes = () => {
  const routes = (
    <Route path="/">
      <Route index element={<CourseCatalog />} />
      <Route path="courses/:id" element={<CourseSignUp />}/>
    </Route>
  );
  return { routes };
};
