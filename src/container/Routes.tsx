import React from 'react';
import { Route } from 'react-router-dom';
import { createAdminCourseRoutes } from 'src/admin/course/admincourse.routes';
import { createProfileRoutes } from 'src/user/profile/profile.routes';
import { createLandingPageRoutes } from 'src/landing-page/landingpage.routes';
import { createCourseRoutes } from '../user/course/course.routes';

import { createAdminProfessorRoutes } from '../admin/professor/adminprofessor.routes';
import { createAdminUserRoutes } from 'src/admin/users/adminuser.routes';
import {createEnrollmentRoutes} from 'src/admin/enrollments/adminenrollment.routes';

const enrollmentRoutes = createEnrollmentRoutes();
const profileRoutes = createProfileRoutes();
const courseRoutes = createCourseRoutes();
const adminCourseRoutes = createAdminCourseRoutes();
const adminProfessorRoutes = createAdminProfessorRoutes();
const landingPageRoutes = createLandingPageRoutes();
const adminUserRoutes = createAdminUserRoutes();


const routes = (
  <Route path='/'>
    {enrollmentRoutes.routes}
    {landingPageRoutes.routes}
    {courseRoutes.routes}
    {profileRoutes.routes}
    {adminCourseRoutes.routes}
    {adminProfessorRoutes.routes}
    {adminUserRoutes.routes}

  </Route>
);

export function AppRoutes() {
  return routes;
}
