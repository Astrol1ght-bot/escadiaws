/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      name
      thumbnail
      description
      price
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        thumbnail
        description
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfessor = /* GraphQL */ `
  query GetProfessor($id: ID!) {
    getProfessor(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listProfessors = /* GraphQL */ `
  query ListProfessors(
    $filter: ModelProfessorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfessors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
