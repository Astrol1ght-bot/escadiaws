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
import { GetCourseQuery } from 'src/API';
import { DataContainer } from 'src/container/DataManagement/DataContainer';
import { Layout } from 'src/container/Layout/Layout';
import { getCourse } from 'src/graphql/queries';
import { usePublicElement } from 'src/services/swrHooks';
import useAppStore from 'src/store/useAppStore';

export const CourseView: React.FC = () => {
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const userAuth = cognitoUser !== undefined;
  const params = useParams();

  const { data, isLoading, error, isValidating } =
    usePublicElement<GetCourseQuery>(getCourse, userAuth, params.id);

  return (
    <Layout
      title=""
      breadCrumbs={[
        { text: 'Todos los Cursos', href: '/admin/courses' },
        { text: data?.getCourse?.name || '', href: '#' },
      ]}
    >
      <Container>
        {data?.getCourse && (
          <DataContainer
            isLoading={isLoading}
            isValidating={isValidating}
            errors={error}
          >
            <Heading level={1}>{data.getCourse.name}</Heading>
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <img
                width="40%"
                src={data.getCourse.thumbnail}
                alt={data.getCourse.name}
              />

              <SpaceBetween direction="vertical" size="xxl">
                <Table
                  columnDefinitions={[
                    {
                      id: 'price',
                      header: 'Precio',
                      width: 20,
                      cell: (e) => <Heading level={1}>{`₡${e.price}`}</Heading>,
                    },
                    {
                      id: 'description',
                      header: 'Descripción',
                      width: 20,
                      cell: (e) => e.description,
                    },
                  ]}
                  items={[
                    {
                      id: data.getCourse.id,
                      price: data.getCourse.price,
                      description: data.getCourse.description,
                    },
                  ]}
                  loadingText="Cargando curso..."
                  trackBy="id"
                  empty={
                    <Box textAlign="center" color="inherit">
                      <b>No se encontró el curso.</b>
                    </Box>
                  }
                  header={<Header>Detalles del Curso</Header>}
                />
              </SpaceBetween>
            </Flex>
          </DataContainer>
        )}
      </Container>
    </Layout>
  );
};
