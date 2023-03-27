import React, { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { getElement } from '../../services/apiMutations';

import { Layout } from '../../container/Layout/Layout';
import { getStudent } from '../../graphql/queries';
import { GetStudentQuery } from '../../API';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

export const UserCourses: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const [client, setClient] = useState<GetStudentQuery | null>(null);

  useEffect(() => {
    if (user.username) {
      getElement(user.username, getStudent)
        .then((response) => {
          response.data?.getStudent
            ? setClient(response.data)
            : navigate('/profile/signin', { replace: true });
        })
        .catch((e) => console.log(e));
    }
  }, []);

  const formatDate = (date?: string) => {
    if (date) {
      const isoDate = new Date(date).toLocaleDateString();
      return isoDate;
    }
    return '';
  };

  return (
    <Layout title="Historial de matrícula:">
      <Container>
        <Table
          columnDefinitions={[
            {
              id: 'id',
              header: 'ID',
              cell: (e) => (
                <p
                  style={{
                    width: 100,
                    whiteSpace: 'break-spaces',
                  }}
                >
                  {e?.id}
                </p>
              ),
            },
            {
              id: 'status',
              header: 'Estado',
              cell: (e) => <p>{e?.status.toUpperCase()}</p>,
            },
            {
              id: 'date',
              header: 'Fecha',
              cell: (e) => <p>{formatDate(e?.createdAt)}</p>,
            },
          ]}
          items={
            client?.getStudent?.enrollments?.items
              ? client.getStudent.enrollments.items
              : []
          }
          loadingText="Loading resources"
          trackBy="id"
          variant="stacked"
          empty={
            <Box textAlign="center" color="inherit">
              <SpaceBetween direction="vertical" size="l">
                <Button onClick={() => navigate('/catalog/courses')}>Matricula Aqui</Button>
              </SpaceBetween>
            </Box>
          }
          header={<Header>Historial</Header>}
        />
      </Container>
    </Layout>
  );
};
