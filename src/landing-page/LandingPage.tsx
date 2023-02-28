import React, { useEffect } from 'react';
import {
  Container,
  Header,
  Button,
  Cards,
  Box,
} from '@cloudscape-design/components';
import { Link, useNavigate } from 'react-router-dom';
import { Course } from '@api-types';
import { Layout } from '@layout/Layout';
import { getMainCourses } from '@services/userSession';
import useAppStore from '@use-AppStore';

export const LandingPage: React.FC = () => {
  return (
    <Layout title="">
      <Container></Container>
    </Layout>
  );
};
