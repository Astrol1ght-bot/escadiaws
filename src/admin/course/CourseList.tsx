import React from 'react';
import { Divider, Heading } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Header, Icon, SpaceBetween, Table } from '@cloudscape-design/components';
import { DeleteCourseInput, ListCoursesQuery } from 'src/API';
import { ErrorNotification } from 'src/container/DataManagement/ErrorNotification';
import { Layout } from 'src/container/Layout/Layout';
import { listCourses } from 'src/graphql/queries';
import { useElements } from 'src/services/swrHooks';
import { Button } from 'primereact/button';
import { deleteElement } from 'src/services/apiMutations';
import { deleteCourse } from 'src/graphql/mutations';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const AdminCourseList: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, isValidating } = useElements<ListCoursesQuery>(listCourses);
  const items = data?.listCourses?.items ? data.listCourses.items : [];

  const deleteCourseHandler = (courseId?: string) => {
    if (courseId) {
      deleteElement(courseId, deleteCourse)
        .then(() => {
          navigate('/admin/courses', { replace: true });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Layout
      title='Cursos'
      topButtons={
        <Button onClick={() => navigate('/admin/courses/create')}>Crear Nuevo Curso</Button>
      }
    >
      <Container>
        <Heading level={1}>Cursos</Heading>
        <Divider marginTop={20} marginBottom={20} />
        {error && <ErrorNotification errors={error} />}
        <DataTable value={items} loading={isLoading || isValidating}>
          <Column
            field='name'
            header='Nombre'
            body={(item) => (
              <Button link onClick={() => navigate(`/admin/courses/view/${item?.id}`)}>
                {item?.name}
              </Button>
            )}
          ></Column>
          <Column field='price' header='Precio' body={(item) => `$${item?.price}`}></Column>
          <Column
            field='name'
            header='Nombre'
            body={(item) => (
              <Button link onClick={() => navigate(`/admin/courses/view/${item?.id}`)}>
                {item?.name}
              </Button>
            )}
          ></Column>
          <Column
            field='name'
            header='Nombre'
            body={(item) => (
              <Button link onClick={() => navigate(`/admin/courses/view/${item?.id}`)}>
                {item?.name}
              </Button>
            )}
          ></Column>
          <Column
            field='name'
            header='Nombre'
            body={(item) => (
              <Button link onClick={() => navigate(`/admin/courses/view/${item?.id}`)}>
                {item?.name}
              </Button>
            )}
          ></Column>
          <Column
            field='name'
            header='Nombre'
            body={(item) => (
              <Button link onClick={() => navigate(`/admin/courses/view/${item?.id}`)}>
                {item?.name}
              </Button>
            )}
          ></Column>
        </DataTable>
        <Table
          columnDefinitions={[
            {
              id: 'name',
              header: 'Nombre',
              cell: (e) => (
                <Button link onClick={() => navigate(`/admin/courses/view/${e?.id}`)}>
                  {e?.name}
                </Button>
              ),
            },
            {
              id: 'price',
              header: 'Precio',
              cell: (e) => `$${e?.price}`,
            },
            {
              id: 'description',
              header: 'Descripción',
              cell: (e) => <div style={{ maxWidth: '200px' }}>{e?.description}</div>,
            },
            {
              id: 'thumbnail',
              header: 'Thumbnail',
              cell: (e) => <img width={50} src={e?.thumbnail} alt={e?.name} />,
            },
            {
              id: 'update',
              header: '',
              cell: (e) => (
                <Button
                  onClick={() => navigate(`/admin/courses/update/${e?.id}`)}
                  className='pi pi-pencil'
                  text
                />
              ),
            },
            {
              id: 'remove',
              header: '',
              cell: (e) => (
                <Button
                  onClick={() => {
                    deleteCourseHandler(e?.id);
                  }}
                  className='pi pi-trash'
                  severity='danger'
                  text
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
