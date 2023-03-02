import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Layout } from '@layout/Layout';

import { CreateCourseInput } from '@api-types';
import { createCourse } from '@graphql/mutations';

import { addElement } from '@services/apiMutations';
import { ErrorNotification } from '@data-management/ErrorNotification';
import { CourseForm } from './CourseForm';

export const CreateProduct: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const addCourse = (course: CreateCourseInput) => {
    debugger;
    setLoading(true);
    addElement( {...course}, createCourse)
      .then(() => navigate('/admin/courses/', { replace: true }))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  return (
    <Layout
      title="Crea un nuevo Curso"
      breadCrumbs={[{ text: 'Cursos', href: '/admin/courses' }]}
    >
      <>
        {error && <ErrorNotification errors={[error]} />}
        <CourseForm
          isLoading={isLoading}
          onSubmit={(course) => addCourse(course)}
          title="Crea un nuevo Curso"
        />
      </>
    </Layout>
  );
};
