/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createProfessor = /* GraphQL */ `
  mutation CreateProfessor(
    $input: CreateProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    createProfessor(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateProfessor = /* GraphQL */ `
  mutation UpdateProfessor(
    $input: UpdateProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    updateProfessor(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfessor = /* GraphQL */ `
  mutation DeleteProfessor(
    $input: DeleteProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    deleteProfessor(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
