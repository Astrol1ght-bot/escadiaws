/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateProfessor = /* GraphQL */ `
  subscription OnCreateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
  ) {
    onCreateProfessor(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProfessor = /* GraphQL */ `
  subscription OnUpdateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
  ) {
    onUpdateProfessor(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProfessor = /* GraphQL */ `
  subscription OnDeleteProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
  ) {
    onDeleteProfessor(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
