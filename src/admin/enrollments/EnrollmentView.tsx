import React from 'react';
import {
  Header,
  SpaceBetween,
  Button,
  ColumnLayout,
} from '@cloudscape-design/components';
import { Text, Heading, Divider } from '@aws-amplify/ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import { GetEnrollmentQuery } from '../../API';
import { getEnrollment } from '../../graphql/queries';
import { Layout } from '../../container/Layout/Layout';
import { deleteEnrollment } from '../../graphql/mutations';
import { deleteElement } from '../../services/apiMutations';
import { useElement } from '../../services/swrHooks';
import { DataContainer } from '../../container/DataManagement/DataContainer';
import { UpdateEnrollment } from './UpdateEnrollment';

export const EnrollmentView: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, error, isValidating } = useElement<GetEnrollmentQuery>(
    getEnrollment,
    params.id
  );

  const removeOrder = () => {
    if (params.id) {
      deleteElement(params.id, deleteEnrollment)
        .then(() => navigate('/admin/enrollments/', { replace: true }))
        .catch((e) => console.log(e));
    }
  };

  return (
    <Layout
      title="Client's Order"
      topButtons={
        <Button loading={isLoading} onClick={removeOrder}>
          Eliminar
        </Button>
      }
      breadCrumbs={[
        { text: 'Matrículas', href: '/admin/enrollments' },
        { text: 'Vista de matrícula', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
        header={<Header variant="h2">Detalles de la matrícula:</Header>}
      >
        {data?.getEnrollment && (
          <>
            <UpdateEnrollment data={data} isLoading={isLoading} />
          </>
        )}
      </DataContainer>
    </Layout>
  );
};
