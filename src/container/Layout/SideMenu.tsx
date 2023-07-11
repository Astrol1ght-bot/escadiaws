import { Divider } from '@aws-amplify/ui-react';
import { Box, SpaceBetween, Cards, Button } from '@cloudscape-design/components';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Course } from 'src/API';
import useAppStore from 'src/store/useAppStore';

export const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = useAppStore((state) => state.isAdmin);
  const isProfessor = useAppStore((state) => state.isProfessor);
  const isStudent = useAppStore((state) => state.isStudent);

  return (
    <Box padding='xl'>
      <h2>Menu</h2>
      <SpaceBetween size='m'>
        {(isProfessor || isStudent) && (
          <>
            <Divider orientation='horizontal' />

            <Button variant='link' onClick={() => navigate('/profile/courses', { replace: true })}>
              Mis Cursos
            </Button>
          </>
        )}
        {isAdmin && (
          <>
            <Divider orientation='horizontal' />
            <Button variant='link' onClick={() => navigate('/admin/courses', { replace: true })}>
              Cursos
            </Button>
            <Button variant='link' onClick={() => navigate('/admin/users', { replace: true })}>
              Usuarios
            </Button>
            <Button
              variant='link'
              onClick={() => navigate('/admin/enrollments', { replace: true })}
            >
              Matriculas
            </Button>
          </>
        )}
      </SpaceBetween>
    </Box>
  );
};
