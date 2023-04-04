import React, { useEffect, useRef } from 'react';
import { Amplify, Storage } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, SpaceBetween } from '@cloudscape-design/components';
import { Course, Enrollment } from '../../API';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import awsExports from '../../aws-exports';
import { Layout } from '../../container/Layout/Layout';

import { getMainCourses, getMainStudent } from '../../services/userSession';
import useAppStore from 'src/store/useAppStore';
import { Toast } from 'primereact/toast';

Amplify.configure(awsExports);

export const UserCourses: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  const { student, isStudentLoading, isStudentError } = getMainStudent(
    user?.username ? user.username : '',
  );
  const enrollments = !isStudentLoading
    ? student?.data.getStudent?.enrollments.items
    : ([] as Enrollment[]);

  const isProfessor = useAppStore((state) => state.isProfessor);

  const { courses, isCoursesLoading, isCoursesError } = getMainCourses(true);

  const catalogCourses = !isCoursesLoading
    ? courses?.data.listCourses.items
        .filter(
          (item) => user?.attributes != undefined && item.professor === user?.attributes['name'],
        )
        .map((course) => ({
          ...course,
          courseID: course.id,
          status: 'Profesor',
          total: course.price,
          courseName: course.name,
        }))
    : ([] as Enrollment[]);

  console.log(catalogCourses);

  const getSeverity = (enrollment: Enrollment) => {
    switch (enrollment.status) {
      case 'pendiente':
        return 'warning';

      case 'aprobado':
        return 'success';

      case 'rechazado':
        return 'danger';

      default:
        return 'info';
    }
  };

  const toast = useRef<Toast>(null);

  const itemTemplate = (enrollment: Enrollment) => {
    return (
      <div className='col-12'>
        <div className='flex flex-column xl:flex-row xl:align-items-start p-4 gap-4'>
          <img
            className='w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round'
            src={enrollment.thumbnail}
            alt={enrollment.courseName}
          />

          <div className='flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4'>
            <div className='flex flex-column align-items-center sm:align-items-start gap-3'>
              <a
                className='text-2xl font-bold text-900'
                href={`/profile/courses/view/${enrollment.courseID}`}
              >
                {enrollment.courseName}
              </a>
              <div className='flex align-items-center gap-3'>
                <Tag
                  style={{ textTransform: 'uppercase' }}
                  value={enrollment.status}
                  severity={getSeverity(enrollment)}
                />
              </div>
            </div>
            <div className='flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2'>
              <span className='text-2xl font-semibold'>₡{enrollment.total}</span>
              <Button
                icon='pi pi-folder-open'
                className='p-button-rounded'
                disabled={enrollment.status === 'pendiente' || enrollment.status === 'rechazado'}
                onClick={() => navigate(`/profile/courses/view/${enrollment.courseID}`)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title=''>
      <Container>
        {enrollments && <DataView value={enrollments} itemTemplate={itemTemplate} />}
        {catalogCourses && <DataView value={catalogCourses} itemTemplate={itemTemplate} />}
        <Box textAlign='center' color='inherit'>
          <SpaceBetween direction='vertical' size='l'>
            <Button onClick={() => navigate('/catalog/courses')} style={{ marginTop: '20px' }}>
              Matricula Aqui
            </Button>
          </SpaceBetween>
        </Box>
      </Container>
    </Layout>
  );
};