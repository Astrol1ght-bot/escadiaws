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
import { addUserToGroup, getUsersList, removeUserFromGroup } from 'src/services/userSession';

import { ProgressSpinner } from 'primereact/progressspinner';

export const AdminUserList = () => {
  const navigate = useNavigate();
  const setUsersList = useAppStore((state) => state.setUsersList);

  const { usersList, isUserListError, isUsersListLoading, mutate, isValidating } = getUsersList();

  useEffect(() => {
    if (!isUsersListLoading) {
      setUsersList(usersList);
    }
  }, [usersList, isUsersListLoading]);

  const [filterText, setFilterText] = useState<string>('');

  const toggleCheckBox = (checked: boolean, userId: string, groupName: string) => {
    Promise.resolve(
      checked ? addUserToGroup(userId, groupName) : removeUserFromGroup(userId, groupName),
    ).then((value) => mutate());
  };

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
              cell: (e) => (
                <Checkbox
                  checked={e.isAdmin}
                  onChange={(x) => toggleCheckBox(x.detail.checked, e.id, 'Admins')}
                ></Checkbox>
              ),
            },
            {
              id: 'isProfessor',
              header: 'Profesor',
              cell: (e) => (
                <Checkbox
                  checked={e.isProfessor}
                  onChange={(x) => toggleCheckBox(x.detail.checked, e.id, 'Professors')}
                ></Checkbox>
              ),
            },
            {
              id: 'isStudent',
              header: 'Estudiante',
              cell: (e) => (
                <Checkbox
                  checked={e.isStudent}
                  onChange={(x) => toggleCheckBox(x.detail.checked, e.id, 'Students')}
                ></Checkbox>
              ),
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
        {isValidating && !isUsersListLoading && (
          <div
            style={{
              position: 'fixed',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '9999',
            }}
          >
            <ProgressSpinner style={{ flex: 1, alignSelf: 'center' }}></ProgressSpinner>
          </div>
        )}
      </Container>
    </Layout>
  );
};
