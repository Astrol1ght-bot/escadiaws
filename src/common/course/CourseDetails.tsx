import { GetCourseQuery } from '@api-types';
import { Flex, Heading } from '@aws-amplify/ui-react';
import {
  Box,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import React from 'react';

type CourseDetailsProps = {
  details?: GetCourseQuery;
};
export const CourseDetails: React.FC<CourseDetailsProps> = ({ details }) => {
  return (
    <>
      {/* <Heading level={1}>{details?.getCourse?.name}</Heading>
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
          src={details?.getCourse?.thumbnail}
          alt={details?.getCourse?.name}
        />

        <SpaceBetween direction="vertical" size="xxl">
          <Table
            columnDefinitions={[
              {
                id: 'price',
                header: 'Precio',
                width: 20,
                cell: (e) => <Heading level={1}>{`$${e.price}`}</Heading>,
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
                id: details?.getCourse?.id,
                price: details?.getCourse?.price,
                description: details?.getCourse?.description,
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
      </Flex> */}
    </>
  );
};
