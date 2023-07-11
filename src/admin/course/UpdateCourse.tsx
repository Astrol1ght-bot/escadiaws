import React from 'react';
import { useParams } from 'react-router-dom';
import { GetCourseQuery, CreateCourseInput } from 'src/API';
import { DataContainer } from 'src/container/DataManagement/DataContainer';
import { Layout } from 'src/container/Layout/Layout';
import { updateCourse } from 'src/graphql/mutations';
import { getCourse } from 'src/graphql/queries';
import { updateElement } from 'src/services/apiMutations';
import { useElement } from 'src/services/swrHooks';

import { CourseForm } from './CourseForm';

export const UpdateCourse: React.FC = () => {
  const params = useParams();
  const { data, isLoading, error, isValidating, mutate } = useElement<GetCourseQuery>(
    getCourse,
    params.id,
  );
  const courseQuery = data?.getCourse ? data : null;

  const update = (updateData: CreateCourseInput) => {
    if (params.id) {
      const options = { rollbackOnError: true };
      mutate(updateElement(updateData, params.id, updateCourse), options);
    }
  };

  return (
    <Layout
      title='Editar'
      breadCrumbs={[
        { text: 'Catálogo de Cursos', href: '/admin/courses' },
        { text: courseQuery?.getCourse?.name || '', href: '#' },
      ]}
    >
      <DataContainer isLoading={isLoading} isValidating={isValidating} errors={error}>
        {courseQuery && (
          <CourseForm
            isLoading={isLoading || isValidating}
            onSubmit={(prodData) => update(prodData)}
            title=''
            course={courseQuery}
          />
        )}
      </DataContainer>
    </Layout>
  );
};
