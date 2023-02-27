import React from 'react';
import { useParams } from 'react-router-dom';
import { updateCourse } from '@graphql/mutations';
import { CreateCourseInput, GetCourseQuery } from '@api-types';
import { Layout } from '@layout/Layout';
import { getCourse } from '@graphql/queries';
import { updateElement } from '@services/apiMutations';
import { useElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';
import { CourseForm } from './CourseForm';

export const UpdateCourse: React.FC = () => {
  const params = useParams();
  const { data, isLoading, error, isValidating, mutate } =
    useElement<GetCourseQuery>(getCourse, params.id);
  const courseQuery = data?.getCourse ? data : null;

  const update = (updateData: CreateCourseInput) => {
    if (params.id) {
      const options = { rollbackOnError: true };
      mutate(updateElement(updateData, params.id, updateCourse), options);
    }
  };

  return (
    <Layout
      title="Editar"
      breadCrumbs={[
        { text: 'Catálogo de Cursos', href: '/admin/courses' },
        { text: courseQuery?.getCourse?.name || '', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
      >
        {courseQuery && (
          <CourseForm
            isLoading={isLoading || isValidating}
            onSubmit={(prodData) => update(prodData)}
            title=""
            course={courseQuery}
          />
        )}
      </DataContainer>
    </Layout>
  );
};
