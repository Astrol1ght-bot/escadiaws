import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { CreateProfessorInput } from 'src/API';
import { ErrorNotification } from 'src/container/DataManagement/ErrorNotification';
import { Layout } from 'src/container/Layout/Layout';
import { createProfessor } from 'src/graphql/mutations';
import { addElement } from 'src/services/apiMutations';
import { ProfesorForm } from './ProfessorForm';

export const CreateProfessor: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const addCourse = (data: CreateProfessorInput) => {
    setLoading(true);
    addElement({ ...data }, createProfessor)
      .then(() => navigate('/admin/professors/', { replace: true }))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  return (
    <Layout
      title="Crea un nuevo Profesor"
      breadCrumbs={[{ text: 'Profesores:', href: '/admin/professors' }]}
    >
      <>
        {error && <ErrorNotification errors={[error]} />}
        <ProfesorForm
          isLoading={isLoading}
          onSubmit={(data) => addCourse(data)}
          title="Crea un nuevo Profesor"
        />
      </>
    </Layout>
  );
};
