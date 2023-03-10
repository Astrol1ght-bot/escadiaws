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
import { ListCoursesQuery } from 'src/API';
import { ErrorNotification } from 'src/container/DataManagement/ErrorNotification';
import { Layout } from 'src/container/Layout/Layout';
import { listCourses } from 'src/graphql/queries';
import { useElements } from 'src/services/swrHooks';

export const AdminCourseList: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, isValidating } = useElements<ListCoursesQuery>(listCourses);
  const items = data?.listCourses?.items ? data.listCourses.items : [];

  return (
    <Layout
      title='Cursos'
      topButtons={
        <Button variant='primary' onClick={() => navigate('/admin/courses/create')}>
          Crear Nuevo Curso
        </Button>
      }
    >
      <Container>
        <Heading level={1}>Cursos</Heading>
        <Divider marginTop={20} marginBottom={20} />
        {error && <ErrorNotification errors={error} />}
        <Table
          columnDefinitions={[
            {
              id: 'name',
              header: 'Name',
              cell: (e) => (
                <Button variant='link' onClick={() => navigate(`/admin/courses/view/${e?.id}`)}>
                  {e?.name}
                </Button>
              ),
            },
            {
              id: 'price',
              header: 'Price',
              cell: (e) => `$${e?.price}`,
            },
            {
              id: 'description',
              header: 'Description',
              cell: (e) => e?.description,
            },
            {
              id: 'thumbnail',
              header: 'Thumbnail',
              cell: (e) => <img width={50} src={e?.thumbnail} alt={e?.name} />,
            },
            {
              id: 'update',
              header: 'Edit',
              cell: (e) => (
                <Button
                  variant='link'
                  onClick={() => navigate(`/admin/courses/update/${e?.id}`)}
                  iconSvg={<Icon name='edit' />}
                />
              ),
            },
          ]}
          items={items}
          loading={isLoading || isValidating}
          loadingText='Cargando cursos...'
          trackBy='id'
          empty={
            <Box textAlign='center' color='inherit'>
              <SpaceBetween direction='vertical' size='l'>
                <b>No hay cursos.</b>
              </SpaceBetween>
            </Box>
          }
          header={<Header />}
        />
      </Container>
    </Layout>
  );
};
