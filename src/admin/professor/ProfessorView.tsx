import React from 'react';
import { Heading, Flex } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { Layout } from '@layout/Layout';
import { getProfessor } from '@graphql/queries';
import { GetProfessorQuery, Professor } from '@api-types';
import useAppStore from '@use-AppStore';
import { usePublicElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';

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
