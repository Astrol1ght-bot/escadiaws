import React from 'react';
import { Divider, Heading } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Header,
  Icon,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { ListProfessorsQuery } from 'src/API';
import { ErrorNotification } from 'src/container/DataManagement/ErrorNotification';
import { Layout } from 'src/container/Layout/Layout';
import { listProfessors } from 'src/graphql/queries';
import { useElements } from 'src/services/swrHooks';

export const AdminProfessorList: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, isValidating } =
    useElements<ListProfessorsQuery>(listProfessors);
  const items = data?.listProfessors?.items ? data.listProfessors.items : [];

  return (
    <Layout
      title="Cursos"
      topButtons={
        <Button
          variant="primary"
          onClick={() => navigate('/admin/professors/create')}
        >
          Crear Nuevo Profesor
        </Button>
      }
    >
      <Container>
        <Heading level={1}>Lista de Profesores</Heading>
        <Divider marginTop={20} marginBottom={20} />
        {error && <ErrorNotification errors={error} />}
        <Table
          columnDefinitions={[
            {
              id: 'name',
              header: 'Name',
              cell: (e) => (
                <Button
                  variant="link"
                  onClick={() => navigate(`/admin/professors/view/${e?.id}`)}
                >
                  {e?.name}
                </Button>
              ),
            },
            // {
            //   id: 'cognitoId',
            //   header: 'Cognito ID',
            //   cell: (e) => `$${e?.cognitoId}`,
            // },
            {
              id: 'update',
              header: 'Edit',
              cell: (e) => (
                <Button
                  variant="link"
                  onClick={() => navigate(`/admin/professors/update/${e?.id}`)}
                  iconSvg={<Icon name="edit" />}
                />
              ),
            },
          ]}
          items={items}
          loading={isLoading || isValidating}
          loadingText="Cargando profesores..."
          trackBy="id"
          empty={
            <Box textAlign="center" color="inherit">
              <SpaceBetween direction="vertical" size="l">
                <b>No hay profesores.</b>
              </SpaceBetween>
            </Box>
          }
          header={<Header />}
        />
      </Container>
    </Layout>
  );
};
