/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  thumbnail: string,
  description?: string | null,
  price: number,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  thumbnail: string,
  description?: string | null,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  thumbnail?: string | null,
  description?: string | null,
  price?: number | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateProfessorInput = {
  id?: string | null,
  name: string,
};

export type ModelProfessorConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProfessorConditionInput | null > | null,
  or?: Array< ModelProfessorConditionInput | null > | null,
  not?: ModelProfessorConditionInput | null,
};

export type Professor = {
  __typename: "Professor",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfessorInput = {
  id: string,
  name?: string | null,
};

export type DeleteProfessorInput = {
  id: string,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelProfessorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProfessorFilterInput | null > | null,
  or?: Array< ModelProfessorFilterInput | null > | null,
  not?: ModelProfessorFilterInput | null,
};

export type ModelProfessorConnection = {
  __typename: "ModelProfessorConnection",
  items:  Array<Professor | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProfessorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfessorMutationVariables = {
  input: CreateProfessorInput,
  condition?: ModelProfessorConditionInput | null,
};

export type CreateProfessorMutation = {
  createProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfessorMutationVariables = {
  input: UpdateProfessorInput,
  condition?: ModelProfessorConditionInput | null,
};

export type UpdateProfessorMutation = {
  updateProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfessorMutationVariables = {
  input: DeleteProfessorInput,
  condition?: ModelProfessorConditionInput | null,
};

export type DeleteProfessorMutation = {
  deleteProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfessorQueryVariables = {
  id: string,
};

export type GetProfessorQuery = {
  getProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfessorsQueryVariables = {
  filter?: ModelProfessorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfessorsQuery = {
  listProfessors?:  {
    __typename: "ModelProfessorConnection",
    items:  Array< {
      __typename: "Professor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
};

export type OnCreateProfessorSubscription = {
  onCreateProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
};

export type OnUpdateProfessorSubscription = {
  onUpdateProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
};

export type OnDeleteProfessorSubscription = {
  onDeleteProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
