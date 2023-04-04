import { Amplify, API, Auth } from 'aws-amplify';

import { CognitoUser } from 'amazon-cognito-identity-js';
import useSWR from 'swr';

import awsExports from 'src/aws-exports';
import { getElement, getAllPublicElements } from './apiMutations';
import { getStudent, listCourses, listEnrollments } from 'src/graphql/queries';
import useAppStore from 'src/store/useAppStore';
import { UserData } from 'src/store/storeTypes';
import { Student } from '@api-types';
import { useState } from 'react';

Amplify.configure(awsExports);

export const getUserSession = () => Auth.currentAuthenticatedUser().then((user) => user);

export const hasRole = (user: any, role: string): boolean => {
  const isPartOfGroup = user.signInUserSession.accessToken.payload['cognito:groups'];
  return isPartOfGroup ? isPartOfGroup.includes(role) : false;
};

export const isAdmin = (user: any): boolean => hasRole(user, 'Admins');
export const isProfessor = (user: any): boolean => hasRole(user, 'Professors');
export const isStudent = (user: any): boolean => hasRole(user, 'Students');

export const getUserProfile = (user: CognitoUser | undefined): Promise<Student | undefined> =>
  getElement(user?.getUsername() ?? '', getStudent)
    .then((response) => response.data?.getStudent)
    .catch(() => undefined);

export const getUserInfo = () => {
  const fetcher = () =>
    getUserSession()
      .then((user) => {
        if (user) {
          return {
            user,
            isAdmin: isAdmin(user),
            isProfessor: isProfessor(user),
            isStudent: isStudent(user),
          };
        }
        throw new Error();
      })
      .catch(() => ({
        user: undefined,
        isAdmin: false,
        isProfessor: false,
        isStudent: false,
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

export const getMainStudent = (username: string) => {
  const { data, error, isValidating } = useSWR(getStudent, (query) => getElement(username, query), {
    revalidateOnFocus: false,
  });

  return {
    student: data,
    isStudentLoading: !error && !data,
    isStudentError: error,
    isValidating,
  };
};

export const getUsersList = () => {
  let usersList: UserData[];
  const fetcher = () =>
    listUsers()
      .then((users) => {
        if (users) {
          const userAttributes = users.Users?.map((user) => ({
            id: user.Username,
            attributes: Object.fromEntries(user.Attributes.map((attr) => [attr.Name, attr.Value])),
          }));

          usersList = userAttributes?.map((user) => ({
            id: user.id,
            name: user.attributes['name'],
            phoneNumber: user.attributes['phone_number'],
            email: user.attributes['email'],
          }));

          return Promise.all(
            users.Users?.map((user) =>
              listGroupsForUser(user.Username).then((groups) => ({
                id: user.Username,
                groups: groups,
              })),
            ),
          );
        }
        throw new Error();
      })
      .then((groups) => {
        usersList.forEach((user) => {
          const userGroups = groups.find((group) => group.id === user.id).groups.Groups;
          user.isAdmin = !!userGroups?.find((userGroup) => userGroup.GroupName === 'Admins');
          user.isProfessor = !!userGroups?.find(
            (userGroup) => userGroup.GroupName === 'Professors',
          );
          user.isStudent = !!userGroups?.find((userGroup) => userGroup.GroupName === 'Students');
        });
        return usersList;
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

const listGroupsForUser = (username) =>
  Auth.currentSession()
    .then((session) => {
      const apiName = 'AdminQueries';
      const path = '/listGroupsForUser?username=' + username;
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

export const removeUserFromGroup = (username, groupname) =>
  Auth.currentSession()
    .then((session) => {
      const apiName = 'AdminQueries';
      const path = '/removeUserFromGroup';
      const token = session.getAccessToken().getJwtToken();
      const myInit = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: {
          username: username,
          groupname: groupname,
        },
      };
      return API.post(apiName, path, myInit);
    })
    .then((response) => {
      return response;
    });

export const addUserToGroup = (username, groupname) =>
  Auth.currentSession()
    .then((session) => {
      const apiName = 'AdminQueries';
      const path = '/addUserToGroup';
      const token = session.getAccessToken().getJwtToken();
      const myInit = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: {
          username: username,
          groupname: groupname,
        },
      };
      return API.post(apiName, path, myInit);
    })
    .then((response) => {
      return response;
    });
