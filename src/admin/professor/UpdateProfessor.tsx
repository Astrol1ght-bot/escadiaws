import React from 'react';
import { useParams } from 'react-router-dom';
import { GetProfessorQuery, CreateProfessorInput } from 'src/API';
import { DataContainer } from 'src/container/DataManagement/DataContainer';
import { Layout } from 'src/container/Layout/Layout';
import { updateProfessor } from 'src/graphql/mutations';
import { getProfessor } from 'src/graphql/queries';
import { updateElement } from 'src/services/apiMutations';
import { useElement } from 'src/services/swrHooks';

import { ProfesorForm } from './ProfessorForm';

export const UpdateProfessor: React.FC = () => {
  const params = useParams();
  const { data, isLoading, error, isValidating, mutate } =
    useElement<GetProfessorQuery>(getProfessor, params.id);
  const professorQuery = data?.getProfessor ? data : null;

  const update = (updateData: CreateProfessorInput) => {
    if (params.id) {
      const options = { rollbackOnError: true };
      mutate(updateElement(updateData, params.id, updateProfessor), options);
    }
  };

  return (
    <Layout
      title="Editar"
      breadCrumbs={[
        { text: 'Catálogo de Profesores', href: '/admin/professors' },
        { text: professorQuery?.getProfessor?.name || '', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
      >
        {professorQuery && (
          <ProfesorForm
            isLoading={isLoading || isValidating}
            onSubmit={(prodData) => update(prodData)}
            title=""
            course={professorQuery}
          />
        )}
      </DataContainer>
    </Layout>
  );
};
