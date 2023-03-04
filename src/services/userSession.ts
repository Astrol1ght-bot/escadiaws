import { Amplify, API, Auth } from 'aws-amplify';

import { CognitoUser } from 'amazon-cognito-identity-js';
import useSWR from 'swr';

import awsExports from 'src/aws-exports';
import { getElement, getAllPublicElements } from './apiMutations';
import { listCourses } from 'src/graphql/queries';
import useAppStore from 'src/store/useAppStore';
import { UserData } from 'src/store/storeTypes';

Amplify.configure(awsExports);

export const getUserSession = () => Auth.currentAuthenticatedUser().then((user) => user);

export const isAdmin = (user: any): boolean => {
  const isPartOfGroup = user.signInUserSession.accessToken.payload['cognito:groups'];
  return isPartOfGroup ? isPartOfGroup.includes('Admins') : false;
};

export const getUserInfo = () => {
  const fetcher = () =>
    getUserSession()
      .then((user) => {
        if (user) {
          return {
            user,
            isAdmin: isAdmin(user),
          };
        }
        throw new Error();
      })
      .catch(() => ({
        user: undefined,
        isAdmin: false,
      }));
  const { data, error, mutate, isValidating } = useSWR('/', fetcher);
  return {
    userData: data,
    isUserLoading: !error && !data,
    isUserError: error,
    mutate,
    isValidating,
  };
};

export const getMainCourses = (authUser: boolean) => {
  const { data, error, isValidating } = useSWR(
    listCourses,
    (query) => getAllPublicElements(query, authUser),
    { revalidateOnFocus: false },
  );
  return {
    courses: data,
    isCoursesLoading: !error && !data,
    isCoursesError: error,
    isValidating,
  };
};

export const getUsersList = () => {
  const fetcher = () =>
    listUsers()
      .then((users) => {
        if (users) {
          const userAttributes = users.Users?.map((user) => ({
            id: user.Username,
            attributes: Object.fromEntries(user.Attributes.map((attr) => [attr.Name, attr.Value])),
          }));
          const response: UserData[] = userAttributes?.map((user) => ({
            id: user.id,
            name: user.attributes['name'],
            phoneNumber: user.attributes['phone_number'],
            email: user.attributes['email'],
          }));
          return response;
        }
        throw new Error();
      })
      .catch(() => []);
  const { data, error, mutate, isValidating } = useSWR('/usersList', fetcher);
  return {
    usersList: data,
    isUsersListLoading: !error && !data,
    isUserListError: error,
    mutate,
    isValidating,
  };
};

const listUsers = () =>
  Auth.currentSession()
    .then((session) => {
      const apiName = 'AdminQueries';
      const path = '/listUsers';
      const token = session.getAccessToken().getJwtToken();
      const myInit = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      };
      return API.get(apiName, path, myInit);
    })
    .then((response) => {
      return response;
    });
