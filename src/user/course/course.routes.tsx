import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { CourseCatalog } from './CourseCatalog';
import { CourseSignUp } from './CourseSignUp';

export const createCourseRoutes = () => {
  const routes = (
    <Route path="/catalog/courses">
      <Route index element={<CourseCatalog />} />
      <Route path="view/:id" element={<CourseSignUp />} />
    </Route>
  );
  return { routes };
};
