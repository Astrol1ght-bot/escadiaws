import React, { useEffect } from 'react';
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
        />
      </Container>
    </Layout>
  );
};
