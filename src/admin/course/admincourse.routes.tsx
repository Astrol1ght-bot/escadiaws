import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
// import { ProductView } from './ProductView';
// import { UpdateProduct } from './UpdateProduct';
// import { CreateProduct } from './CreateProducts';
import { AdminCourseList } from './CourseList';
import { CreateProduct } from './CreateCourse';
import { UpdateCourse } from './UpdateCourse';
import { CourseView } from './CourseView';

export const createAdminCourseRoutes = () => {
  const routes = (
    <Route path="/admin/courses">
      <Route
        index
        element={
          <Auth>
            <AdminCourseList />
          </Auth>
        }
      />
      <Route
        path="view/:id"
        element={
          <Auth>
            <CourseView />
          </Auth>
        }
      />
      <Route
        path="update/:id"
        element={
          <Auth>
            <UpdateCourse />
          </Auth>
        }
      />
      <Route
        path="create"
        element={
          <Auth>
            <CreateProduct />
          </Auth>
        }
      />
    </Route>
  );
  return { routes };
};
