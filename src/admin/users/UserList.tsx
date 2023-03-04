import React, { useEffect, useState } from 'react';
import { Divider, Heading } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Header,
  Icon,
  SpaceBetween,
  Table,
  TextFilter,
} from '@cloudscape-design/components';
import { ListCoursesQuery } from 'src/API';
import { ErrorNotification } from 'src/container/DataManagement/ErrorNotification';
import { Layout } from 'src/container/Layout/Layout';
import { listCourses } from 'src/graphql/queries';
import { useElements } from 'src/services/swrHooks';
import useAppStore from 'src/store/useAppStore';
import { getUsersList } from 'src/services/userSession';

export const AdminUserList = () => {
  const navigate = useNavigate();
  const setUsersList = useAppStore((state) => state.setUsersList);

  const { usersList, isUserListError, isUsersListLoading, mutate } = getUsersList();

  useEffect(() => {
    if (!isUsersListLoading) {
      setUsersList(usersList);
    }
  }, [usersList, isUsersListLoading]);

  const [filterText, setFilterText] = useState<string>('');

  return (
    <Layout title='Usuarios'>
      <Container>
        <Heading level={1}>Usuarios</Heading>
        <Divider marginTop={20} marginBottom={20} />
        {isUserListError && (
          <ErrorNotification errors={[new Error('Hubo un error cargando los usuarios.')]} />
        )}
        <Table
          columnDefinitions={[
            {
              id: 'id',
              header: 'Id',
              cell: (e) => e?.id,
            },
            {
              id: 'name',
              header: 'Nombre',
              cell: (e) => e?.name,
              sortingField: 'name',
            },
            {
              id: 'email',
              header: 'Correo',
              cell: (e) => e?.email,
            },
            {
              id: 'phoneNumber',
              header: 'Número de Teléfono',
              cell: (e) => e?.phoneNumber,
            },
            {
              id: 'isAdmin',
              header: 'Admin',
              cell: (e) => <Checkbox checked={true}></Checkbox>,
            },
            {
              id: 'isProfessor',
              header: 'Profesor',
              cell: (e) => <Checkbox checked={false}></Checkbox>,
            },
            {
              id: 'isStudent',
              header: 'Estudiante',
              cell: (e) => <Checkbox checked={false}></Checkbox>,
            },
          ]}
          items={usersList ?? []}
          loading={isUsersListLoading}
          loadingText='Cargando usuarios...'
          trackBy='id'
          empty={
            <Box textAlign='center' color='inherit'>
              <SpaceBetween direction='vertical' size='l'>
                <b>No hay usuarios.</b>
              </SpaceBetween>
            </Box>
          }
          header={<Header />}
          filter={
            <TextFilter
              filteringPlaceholder='Busca usuarios'
              filteringText={filterText}
              onChange={(e) => setFilterText(e.detail.filteringText)}
            />
          }
        />
        <div style={{ paddingTop: '1rem', textAlign: 'right' }}>
          <Button>Guardar</Button>
        </div>
      </Container>
    </Layout>
  );
};
