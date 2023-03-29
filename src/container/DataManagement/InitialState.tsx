import React, { useEffect, useState } from 'react';
import { Spinner } from '@cloudscape-design/components';
import { useAuthenticator } from '@aws-amplify/ui-react';

import { getUserInfo } from 'src/services/userSession';
import useAppStore from 'src/store/useAppStore';
import { InitialStateLayout } from './InitialStateLayout';

type Props = { children: React.ReactElement };

export const InitialState: React.FC<Props> = ({ children }) => {
  const setCognitoUser = useAppStore((state) => state.setCognitoUser);
  const setIsAdmin = useAppStore((state) => state.setIsAdmin);
  const setIsProfessor = useAppStore((state) => state.setIsProfessor);
  const setIsStudent = useAppStore((state) => state.setIsStudent);
  const setUserProfile = useAppStore((state) => state.setUserProfile);
  const setIsLogged = useAppStore((state) => state.setIsLogged);
  const { user } = useAuthenticator((context) => [context.user]);
  const [stateUpdated, setStateUpdated] = useState(false);

  const { userData, isUserError, isUserLoading, mutate } = getUserInfo();

  useEffect(() => {
    if (!isUserLoading) {
      setCognitoUser(userData?.user);
      setIsAdmin(userData?.isAdmin);
      setIsProfessor(userData?.isProfessor);
      setIsStudent(userData?.isStudent);
      setIsLogged(userData?.user !== undefined);
      setUserProfile(userData?.user);
      setStateUpdated(true);
    }
  }, [userData, isUserLoading]);

  useEffect(() => {
    mutate();
  }, [user]);

  if (isUserLoading || !stateUpdated) {
    return (
      <InitialStateLayout>
        <Spinner size='large' />
      </InitialStateLayout>
    );
  }

  if (isUserError) {
    return (
      <InitialStateLayout>
        <h1>
          System Offline
          {isUserError}
        </h1>
      </InitialStateLayout>
    );
  }

  return children;
};
