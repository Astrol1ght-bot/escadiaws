import { Heading, Flex } from '@aws-amplify/ui-react';
import {
  Container,
  SpaceBetween,
  Box,
  Header,
  Table,
} from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GetProfessorQuery } from 'src/API';
import { DataContainer } from 'src/container/DataManagement/DataContainer';
import { Layout } from 'src/container/Layout/Layout';
import { getProfessor } from 'src/graphql/queries';
import { usePublicElement } from 'src/services/swrHooks';
import useAppStore from 'src/store/useAppStore';

export const ProfessorView: React.FC = () => {
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const userAuth = cognitoUser !== undefined;
  const params = useParams();

  const { data, isLoading, error, isValidating } =
    usePublicElement<GetProfessorQuery>(getProfessor, userAuth, params.id);

  return (
    <Layout
      title=""
      breadCrumbs={[
        { text: 'Todos los Profesores', href: '/admin/professors' },
        { text: data?.getProfessor?.name || '', href: '#' },
      ]}
    >
      <Container>
        {data?.getProfessor && (
          <DataContainer
            isLoading={isLoading}
            isValidating={isValidating}
            errors={error}
          >
            <Heading level={1}>{data.getProfessor.name}</Heading>
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <SpaceBetween direction="vertical" size="xxl">
                <Table
                  columnDefinitions={[
                    {
                      id: 'name',
                      header: 'Nombre',
                      width: 20,
                      cell: (e) => <Heading level={1}>{`$${e.name}`}</Heading>,
                    },
                    // {
                    //   id: 'cognitoId',
                    //   header: 'CognitoId',
                    //   width: 20,
                    //   cell: (e) => e.cognitoId,
                    // },
                  ]}
                  items={[
                    {
                      id: data.getProfessor.id,
                      name: data.getProfessor.name,
                      // cognitoId: data.getProfessor.cognitoId,
                    },
                  ]}
                  loadingText="Cargando Profesor..."
                  trackBy="id"
                  empty={
                    <Box textAlign="center" color="inherit">
                      <b>No se encontró el profesor.</b>
                    </Box>
                  }
                  header={<Header>Detalles del Profesor</Header>}
                />
              </SpaceBetween>
            </Flex>
          </DataContainer>
        )}
      </Container>
    </Layout>
  );
};
