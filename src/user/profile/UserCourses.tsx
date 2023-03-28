import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Header, SpaceBetween, Table } from '@cloudscape-design/components';
import { getElement } from '../../services/apiMutations';
import { getStudent } from '../../graphql/queries';
import { Enrollment, GetStudentQuery } from '../../API';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import awsExports from '../../aws-exports';
import { Layout } from '../../container/Layout/Layout';

Amplify.configure(awsExports);

export const UserCourses: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);

  useEffect(() => {
    if (user.username) {
      getElement(user.username, getStudent)
        .then((response) => {
          if (response.data?.getStudent) {
            setEnrollments(response.data.getStudent.enrollments.items || []);
          } else {
            navigate('/profile/signin', { replace: true });
          }
        })
        .catch((e) => console.log(e));
    }
  }, [user.username]);

  const formatDate = (date?: string) => {
    if (date) {
      const isoDate = new Date(date).toLocaleDateString();
      return isoDate;
    }
    return '';
  };

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

  const itemTemplate = (enrollment: Enrollment) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={enrollment.thumbnail} alt={enrollment.courseName} />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{enrollment.courseName}</div>
              <div className="flex align-items-center gap-3">
                <Tag value={enrollment.status} severity={getSeverity(enrollment)} />
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">₡{enrollment.total}</span>
              <Button icon="pi-folder-open" className="p-button-rounded" disabled={enrollment.status === 'pendiente' || enrollment.status === 'rechazado'} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Historial de matrícula:">
      <Container>
        {enrollments.length > 0 ? (
          <div className="card">
            <DataView value={enrollments} itemTemplate={itemTemplate} />
          </div>
        ) : (
          <Box textAlign="center" color="inherit">
            <SpaceBetween direction="vertical" size="l">
              <Button onClick={() => navigate('/catalog/courses')}>Matricula Aqui</Button>
            </SpaceBetween>
          </Box>
        )}
      </Container>
    </Layout>
  );
};