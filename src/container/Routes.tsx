import React from 'react';
import { Route } from 'react-router-dom';
import { createAdminCourseRoutes } from 'src/admin/course/admincourse.routes';
import { createProfileRoutes } from 'src/user/profile/profile.routes';
// import { createProfileRoutes } from '../user/personalData/profile/profile.routes';
// import { createAddressRoutes } from '../user/personalData/delivery/address.routes';
import { createCourseRoutes } from '../user/course/course.routes';
// import { createOrdersRoutes } from '../owner/orders/orders.routes';
// import { createProductsRoutes } from '../owner/products/products.routes';

// const addressRoutes = createAddressRoutes();
const profileRoutes = createProfileRoutes();
const courseRoutes = createCourseRoutes();
const adminCourseRoutes = createAdminCourseRoutes();
// const ordersRoutes = createOrdersRoutes();
// const productsRoutes = createProductsRoutes();

const routes = (
  <Route path="/">
    {courseRoutes.routes}
    {profileRoutes.routes}
    {adminCourseRoutes.routes}
    {/* {addressRoutes.routes}
    {profileRoutes.routes}
    {ordersRoutes.routes}
    {productsRoutes.routes} */}
  </Route>
);

export function AppRoutes() {
  return routes;
}
