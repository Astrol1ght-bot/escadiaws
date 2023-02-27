import React, { useEffect } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';

import { useNavigate } from 'react-router-dom';
import { Layout } from '@layout/Layout';
import useAppStore from '@use-AppStore';

export const SignIn: React.FC = () => {
  const userProfile = useAppStore((state) => state.userProfile);
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile) navigate('/profile');
  }, [userProfile]);

  return (
    <Layout title="">
      <Authenticator hideSignUp/>
    </Layout>
  );
};