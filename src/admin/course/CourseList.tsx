import React, { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import { Divider, Heading } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Header, Icon, SpaceBetween, Table } from '@cloudscape-design/components';
import { Course, DeleteCourseInput, ListCoursesQuery } from 'src/API';
import { ErrorNotification } from 'src/container/DataManagement/ErrorNotification';
import { Layout } from 'src/container/Layout/Layout';
import { getCourse, listCourses } from 'src/graphql/queries';
import { useElements } from 'src/services/swrHooks';
import { Button } from 'primereact/button';
import { deleteElement, getElement } from 'src/services/apiMutations';
import { deleteCourse } from 'src/graphql/mutations';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getMainCourses } from '../../services/userSession';
import useAppStore from '../../store/useAppStore';
import { Image } from 'src/store/storeTypes';

export const AdminCourseList: React.FC = () => {
  const navigate = useNavigate();

  const isLogged = useAppStore((state) => state.isLogged);
  const { courses, isCoursesLoading, isCoursesError, isValidating } = getMainCourses(isLogged);
  const catalogCourses = !isCoursesLoading ? courses?.data.listCourses.items : ([] as Course[]);

  const removeOrder = (val) => {
    if (val) {
      deleteElement(val, deleteCourse)
        .then(() => window.location.reload())
        .catch((e) => console.log(e));
    }
  };

  const [imageMap, setImageMap] = useState<Image[]>([]);

  const getImageUrl = async (name) => {
    return await Storage.get('thumbnails/' + name);
  };

  useEffect(() => {
    if (courses?.data.listCourses.items) {
      Promise.all(
        courses?.data.listCourses.items.map((item) =>
          getImageUrl(item.thumbnail).then((result) => ({ id: item.thumbnail, url: result })),
        ),
      ).then((r) => {
        setImageMap(r);
      });
    }
  }, [courses, imageMap]);

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
        <DataTable value={catalogCourses}>
          <Column
            field='name'
            header='Nombre'
            body={(item) => (
              <Button link onClick={() => navigate(`/admin/courses/view/${item?.id}`)}>
                {item?.name}
              </Button>
            )}
          ></Column>
          <Column field='price' header='Precio' body={(item) => `₡${item?.price}`}></Column>
          <Column
            field='description'
            header='Descripción'
            body={(item) => <div style={{ maxWidth: '200px' }}>{item?.description}</div>}
          ></Column>
          <Column
            field='thumbnail'
            header='Thumbnail'
            body={(item) => (
              <img
                width={50}
                src={imageMap.find((i) => i.id == item?.thumbnail)?.url}
                alt={item?.thumbnail}
              />
            )}
          ></Column>
          <Column field='professor' header='Profesor' body={(item) => item?.professor}></Column>
          <Column
            header=''
            body={(item) => (
              <>
                <Button
                  onClick={() => navigate(`/admin/courses/update/${item?.id}`)}
                  className='pi pi-pencil'
                  text
                />
                <Button
                  onClick={() => {
                    removeOrder(item?.id);
                  }}
                  className='pi pi-trash'
                  severity='danger'
                  text
                />
              </>
            )}
          ></Column>
        </DataTable>
      </Container>
    </Layout>
  );
};
