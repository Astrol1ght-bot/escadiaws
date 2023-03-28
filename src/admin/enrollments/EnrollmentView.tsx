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
          Delete
        </Button>
      }
      breadCrumbs={[
        { text: 'Enrollments', href: '/admin/enrollments' },
        { text: 'Enrollments view', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
        header={<Header variant="h2">Order details:</Header>}
      >
        {data?.getEnrollment && (
          <>
            <Divider marginTop={20} marginBottom={20} />
            <SpaceBetween direction="vertical" size="l">
              <ColumnLayout columns={2}>
                <Text>
                  <strong>Total:</strong> {data.getEnrollment.total}
                </Text>
                <Text>
                  <strong>Status:</strong> {data.getEnrollment.status.toUpperCase()}
                </Text>
              </ColumnLayout>
            </SpaceBetween>
            <Divider marginTop={20} marginBottom={20} />
            <UpdateEnrollment data={data} isLoading={isLoading} />
          </>
        )}
      </DataContainer>
    </Layout>
  );
};
