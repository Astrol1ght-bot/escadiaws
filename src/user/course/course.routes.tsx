import React from 'react';
import { Route } from 'react-router-dom';
import { CourseCatalog } from './CourseCatalog';
import { CourseSignUp } from './CourseSignUp';
import { CourseEnroll } from './CourseEnroll';
import { Authenticator as Auth } from '@aws-amplify/ui-react';

export const createCourseRoutes = () => {
  const routes = (
    <Route path="/catalog/courses">
      <Route index element={<CourseCatalog />} />
      <Route path="view/:id" element={<CourseSignUp />} />

      <Route path="enroll/:id" element={
        <Auth>
          <CourseEnroll />
        </Auth>
      } />
    </Route>
  );
  return { routes };
};
