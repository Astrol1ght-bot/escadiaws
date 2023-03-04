import { Amplify, Auth } from 'aws-amplify'

import { CognitoUser } from 'amazon-cognito-identity-js'
import useSWR from 'swr'

import awsExports from 'src/aws-exports'
import { getElement, getAllPublicElements } from './apiMutations'
import { listCourses } from 'src/graphql/queries'

Amplify.configure(awsExports)

export const getUserSession = () => Auth.currentAuthenticatedUser().then((user) => user)

export const isAdmin = (user: any): boolean => {
  const isPartOfGroup = user.signInUserSession.accessToken.payload['cognito:groups']
  return isPartOfGroup ? isPartOfGroup.includes('Admins') : false
}

export const getUserInfo = () => {
  const fetcher = () =>
    getUserSession()
      .then((user) => {
        if (user) {
          return {
            user,
            isAdmin: isAdmin(user),
          }
        }
        throw new Error()
      })
      .catch(() => ({
        user: undefined,
        isAdmin: false,
      }))
  const { data, error, mutate, isValidating } = useSWR('/', fetcher)
  return {
    userData: data,
    isUserLoading: !error && !data,
    isUserError: error,
    mutate,
    isValidating,
  }
}

export const getMainCourses = (authUser: boolean) => {
  const { data, error, isValidating } = useSWR(
    listCourses,
    (query) => getAllPublicElements(query, authUser),
    { revalidateOnFocus: false },
  )
  return {
    courses: data,
    isCoursesLoading: !error && !data,
    isCoursesError: error,
    isValidating,
  }
}
