import React, { useEffect } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';

import { useNavigate } from 'react-router-dom';
import { Layout } from '@layout/Layout';
import useAppStore from '@use-AppStore';

export const SignIn: React.FC = () => {
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (cognitoUser) navigate('/');
  }, [cognitoUser]);

  return (
    <Layout title="">
      <Authenticator hideSignUp />
    </Layout>
  );
};
