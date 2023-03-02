import React, { useEffect } from 'react';

import { I18n } from 'aws-amplify';
import { Authenticator, translations } from '@aws-amplify/ui-react';

import { useNavigate } from 'react-router-dom';
import { Layout } from '@layout/Layout';
import useAppStore from '@use-AppStore';

I18n.putVocabularies(translations);
I18n.setLanguage('es');

export const SignIn: React.FC = () => {
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (cognitoUser) navigate('/');
  }, [cognitoUser]);

  return (
    <Layout title="">
      <Authenticator signUpAttributes={['name', 'phone_number']} />
    </Layout>
  );
};
