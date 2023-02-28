import React from 'react';
import { Route } from 'react-router-dom';
import { createAdminCourseRoutes } from 'src/admin/course/admincourse.routes';
import { createProfileRoutes } from 'src/user/profile/profile.routes';
// import { createProfileRoutes } from '../user/personalData/profile/profile.routes';
// import { createAddressRoutes } from '../user/personalData/delivery/address.routes';
import { createCourseRoutes } from '../user/course/course.routes';
// import { createOrdersRoutes } from '../owner/orders/orders.routes';
// import { createProductsRoutes } from '../owner/products/products.routes';

import { createAdminProfessorRoutes } from '../admin/professor/adminprofessor.routes';
import { createLandingPageRoutes } from 'src/landing-page/landingpage.routes';

// const addressRoutes = createAddressRoutes();
const profileRoutes = createProfileRoutes();
const courseRoutes = createCourseRoutes();
const adminCourseRoutes = createAdminCourseRoutes();
const adminProfessorRoutes = createAdminProfessorRoutes();
const landingPageRoutes = createLandingPageRoutes();

// const ordersRoutes = createOrdersRoutes();
// const productsRoutes = createProductsRoutes();

const routes = (
  <Route path="/">
    {landingPageRoutes.routes}
    {courseRoutes.routes}
    {profileRoutes.routes}
    {adminCourseRoutes.routes}
    {adminProfessorRoutes.routes}

    {/* {addressRoutes.routes}
    {profileRoutes.routes}
    {ordersRoutes.routes}
    {productsRoutes.routes} */}
  </Route>
);

export function AppRoutes() {
  return routes;
}
