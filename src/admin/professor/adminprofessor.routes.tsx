import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
// import { ProductView } from './ProductView';
// import { UpdateProduct } from './UpdateProduct';
// import { CreateProduct } from './CreateProducts';
import { AdminProfessorList } from './ProfessorList';
import { CreateProfessor } from './CreateProfessor';
import { UpdateProfessor } from './UpdateProfessor';
import { ProfessorView } from './ProfessorView';

export const createAdminProfessorRoutes = () => {
  const routes = (
    <Route path="/admin/professors">
      <Route
        index
        element={
          <Auth>
            <AdminProfessorList />
          </Auth>
        }
      />
      <Route
        path="view/:id"
        element={
          <Auth>
            <ProfessorView />
          </Auth>
        }
      />
      <Route
        path="update/:id"
        element={
          <Auth>
            <UpdateProfessor />
          </Auth>
        }
      />
      <Route
        path="create"
        element={
          <Auth>
            <CreateProfessor />
          </Auth>
        }
      />
    </Route>
  );
  return { routes };
};
