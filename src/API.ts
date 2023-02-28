/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  thumbnail: string,
  description?: string | null,
  fileUploadEnabled?: boolean | null,
  price: number,
  status?: CourseStatus | null,
  professorCoursesId?: string | null,
  courseProfessorId?: string | null,
};

export enum CourseStatus {
  UPCOMING = "UPCOMING",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}


export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  fileUploadEnabled?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  status?: ModelCourseStatusInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  professorCoursesId?: ModelIDInput | null,
  courseProfessorId?: ModelIDInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type ModelCourseStatusInput = {
  eq?: CourseStatus | null,
  ne?: CourseStatus | null,
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

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  thumbnail: string,
  description?: string | null,
  professor?: Professor | null,
  blocks?: ModelBlockConnection | null,
  fileUploadEnabled?: boolean | null,
  price: number,
  status?: CourseStatus | null,
  purchases?: ModelPurchaseConnection | null,
  enrollment?: ModelEnrollCoursesConnection | null,
  createdAt: string,
  updatedAt: string,
  professorCoursesId?: string | null,
  courseProfessorId?: string | null,
  owner?: string | null,
};

export type Professor = {
  __typename: "Professor",
  id: string,
  name: string,
  courses?: ModelCourseConnection | null,
  cognitoId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelBlockConnection = {
  __typename: "ModelBlockConnection",
  items:  Array<Block | null >,
  nextToken?: string | null,
};

export type Block = {
  __typename: "Block",
  id: string,
  name: string,
  description?: string | null,
  course?: Course | null,
  uploadedFiles?:  Array<File | null > | null,
  createdAt: string,
  updatedAt: string,
  courseBlocksId?: string | null,
  owner?: string | null,
};

export type File = {
  __typename: "File",
  id: string,
  name: string,
  url: string,
  uploadedBy?: Client | null,
  createdAt: string,
  updatedAt: string,
  fileUploadedById?: string | null,
  owner?: string | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  name: string,
  email: string,
  enrolledCourses?: ModelEnrollmentConnection | null,
  purchases?: ModelPurchaseConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelEnrollmentConnection = {
  __typename: "ModelEnrollmentConnection",
  items:  Array<Enrollment | null >,
  nextToken?: string | null,
};

export type Enrollment = {
  __typename: "Enrollment",
  id: string,
  course?: ModelEnrollCoursesConnection | null,
  client: Client,
  date: string,
  status: EnrollStatus,
  paymentStatus: PaymentStatus,
  paymentType: PaymentType,
  enrollDetails:  Array<EnrollDetail >,
  createdAt: string,
  updatedAt: string,
  clientEnrolledCoursesId?: string | null,
  owner?: string | null,
};

export type ModelEnrollCoursesConnection = {
  __typename: "ModelEnrollCoursesConnection",
  items:  Array<EnrollCourses | null >,
  nextToken?: string | null,
};

export type EnrollCourses = {
  __typename: "EnrollCourses",
  id: string,
  courseId: string,
  enrollmentId: string,
  course: Course,
  enrollment: Enrollment,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum EnrollStatus {
  processing = "processing",
  enrolled = "enrolled",
  canceled = "canceled",
}


export enum PaymentStatus {
  procesing = "procesing",
  acepted = "acepted",
  rejected = "rejected",
  pending = "pending",
}


export enum PaymentType {
  cash = "cash",
  creditCard = "creditCard",
}


export type EnrollDetail = {
  __typename: "EnrollDetail",
  courseID: string,
  courseName: string,
  courseThumbnail: string,
  quantity: number,
  total: number,
};

export type ModelPurchaseConnection = {
  __typename: "ModelPurchaseConnection",
  items:  Array<Purchase | null >,
  nextToken?: string | null,
};

export type Purchase = {
  __typename: "Purchase",
  id: string,
  client: Client,
  course: Course,
  date: string,
  createdAt: string,
  updatedAt: string,
  coursePurchasesId?: string | null,
  clientPurchasesId?: string | null,
  owner?: string | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  thumbnail?: string | null,
  description?: string | null,
  fileUploadEnabled?: boolean | null,
  price?: number | null,
  status?: CourseStatus | null,
  professorCoursesId?: string | null,
  courseProfessorId?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateProfessorInput = {
  id?: string | null,
  name: string,
  cognitoId: string,
};

export type ModelProfessorConditionInput = {
  name?: ModelStringInput | null,
  cognitoId?: ModelStringInput | null,
  and?: Array< ModelProfessorConditionInput | null > | null,
  or?: Array< ModelProfessorConditionInput | null > | null,
  not?: ModelProfessorConditionInput | null,
};

export type UpdateProfessorInput = {
  id: string,
  name?: string | null,
  cognitoId?: string | null,
};

export type DeleteProfessorInput = {
  id: string,
};

export type CreateBlockInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  courseBlocksId?: string | null,
};

export type ModelBlockConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBlockConditionInput | null > | null,
  or?: Array< ModelBlockConditionInput | null > | null,
  not?: ModelBlockConditionInput | null,
  courseBlocksId?: ModelIDInput | null,
};

export type UpdateBlockInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  courseBlocksId?: string | null,
};

export type DeleteBlockInput = {
  id: string,
};

export type CreateClientInput = {
  id?: string | null,
  name: string,
  email: string,
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type UpdateClientInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteClientInput = {
  id: string,
};

export type CreateEnrollmentInput = {
  id?: string | null,
  date: string,
  status: EnrollStatus,
  paymentStatus: PaymentStatus,
  paymentType: PaymentType,
  enrollDetails: Array< EnrollDetailInput >,
  clientEnrolledCoursesId?: string | null,
};

export type EnrollDetailInput = {
  courseID: string,
  courseName: string,
  courseThumbnail: string,
  quantity: number,
  total: number,
};

export type ModelEnrollmentConditionInput = {
  date?: ModelStringInput | null,
  status?: ModelEnrollStatusInput | null,
  paymentStatus?: ModelPaymentStatusInput | null,
  paymentType?: ModelPaymentTypeInput | null,
  and?: Array< ModelEnrollmentConditionInput | null > | null,
  or?: Array< ModelEnrollmentConditionInput | null > | null,
  not?: ModelEnrollmentConditionInput | null,
  clientEnrolledCoursesId?: ModelIDInput | null,
};

export type ModelEnrollStatusInput = {
  eq?: EnrollStatus | null,
  ne?: EnrollStatus | null,
};

export type ModelPaymentStatusInput = {
  eq?: PaymentStatus | null,
  ne?: PaymentStatus | null,
};

export type ModelPaymentTypeInput = {
  eq?: PaymentType | null,
  ne?: PaymentType | null,
};

export type UpdateEnrollmentInput = {
  id: string,
  date?: string | null,
  status?: EnrollStatus | null,
  paymentStatus?: PaymentStatus | null,
  paymentType?: PaymentType | null,
  enrollDetails?: Array< EnrollDetailInput > | null,
  clientEnrolledCoursesId?: string | null,
};

export type DeleteEnrollmentInput = {
  id: string,
};

export type CreatePurchaseInput = {
  id?: string | null,
  date: string,
  coursePurchasesId?: string | null,
  clientPurchasesId?: string | null,
};

export type ModelPurchaseConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelPurchaseConditionInput | null > | null,
  or?: Array< ModelPurchaseConditionInput | null > | null,
  not?: ModelPurchaseConditionInput | null,
  coursePurchasesId?: ModelIDInput | null,
  clientPurchasesId?: ModelIDInput | null,
};

export type UpdatePurchaseInput = {
  id: string,
  date?: string | null,
  coursePurchasesId?: string | null,
  clientPurchasesId?: string | null,
};

export type DeletePurchaseInput = {
  id: string,
};

export type CreateFileInput = {
  id?: string | null,
  name: string,
  url: string,
  fileUploadedById?: string | null,
};

export type ModelFileConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelFileConditionInput | null > | null,
  or?: Array< ModelFileConditionInput | null > | null,
  not?: ModelFileConditionInput | null,
  fileUploadedById?: ModelIDInput | null,
};

export type UpdateFileInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  fileUploadedById?: string | null,
};

export type DeleteFileInput = {
  id: string,
};

export type CreateEnrollCoursesInput = {
  id?: string | null,
  courseId: string,
  enrollmentId: string,
};

export type ModelEnrollCoursesConditionInput = {
  courseId?: ModelIDInput | null,
  enrollmentId?: ModelIDInput | null,
  and?: Array< ModelEnrollCoursesConditionInput | null > | null,
  or?: Array< ModelEnrollCoursesConditionInput | null > | null,
  not?: ModelEnrollCoursesConditionInput | null,
};

export type UpdateEnrollCoursesInput = {
  id: string,
  courseId?: string | null,
  enrollmentId?: string | null,
};

export type DeleteEnrollCoursesInput = {
  id: string,
};

export type ModelProfessorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  cognitoId?: ModelStringInput | null,
  and?: Array< ModelProfessorFilterInput | null > | null,
  or?: Array< ModelProfessorFilterInput | null > | null,
  not?: ModelProfessorFilterInput | null,
};

export type ModelProfessorConnection = {
  __typename: "ModelProfessorConnection",
  items:  Array<Professor | null >,
  nextToken?: string | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
};

export type ModelEnrollmentFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelEnrollStatusInput | null,
  paymentStatus?: ModelPaymentStatusInput | null,
  paymentType?: ModelPaymentTypeInput | null,
  and?: Array< ModelEnrollmentFilterInput | null > | null,
  or?: Array< ModelEnrollmentFilterInput | null > | null,
  not?: ModelEnrollmentFilterInput | null,
  clientEnrolledCoursesId?: ModelIDInput | null,
};

export type ModelPurchaseFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelPurchaseFilterInput | null > | null,
  or?: Array< ModelPurchaseFilterInput | null > | null,
  not?: ModelPurchaseFilterInput | null,
  coursePurchasesId?: ModelIDInput | null,
  clientPurchasesId?: ModelIDInput | null,
};

export type ModelFileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelFileFilterInput | null > | null,
  or?: Array< ModelFileFilterInput | null > | null,
  not?: ModelFileFilterInput | null,
  fileUploadedById?: ModelIDInput | null,
};

export type ModelFileConnection = {
  __typename: "ModelFileConnection",
  items:  Array<File | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  fileUploadEnabled?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  status?: ModelCourseStatusInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
  professorCoursesId?: ModelIDInput | null,
  courseProfessorId?: ModelIDInput | null,
};

export type ModelBlockFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBlockFilterInput | null > | null,
  or?: Array< ModelBlockFilterInput | null > | null,
  not?: ModelBlockFilterInput | null,
  courseBlocksId?: ModelIDInput | null,
};

export type ModelEnrollCoursesFilterInput = {
  id?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  enrollmentId?: ModelIDInput | null,
  and?: Array< ModelEnrollCoursesFilterInput | null > | null,
  or?: Array< ModelEnrollCoursesFilterInput | null > | null,
  not?: ModelEnrollCoursesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionProfessorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  cognitoId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
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

export type ModelSubscriptionClientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientFilterInput | null > | null,
};

export type ModelSubscriptionEnrollmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  paymentStatus?: ModelSubscriptionStringInput | null,
  paymentType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
};

export type ModelSubscriptionPurchaseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
  or?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
};

export type ModelSubscriptionFileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFileFilterInput | null > | null,
  or?: Array< ModelSubscriptionFileFilterInput | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  fileUploadEnabled?: ModelSubscriptionBooleanInput | null,
  price?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
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

export type ModelSubscriptionBlockFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlockFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlockFilterInput | null > | null,
};

export type ModelSubscriptionEnrollCoursesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  enrollmentId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEnrollCoursesFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnrollCoursesFilterInput | null > | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        courseBlocksId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    fileUploadEnabled?: boolean | null,
    price: number,
    status?: CourseStatus | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    enrollment?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
    courseProfessorId?: string | null,
    owner?: string | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        courseBlocksId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    fileUploadEnabled?: boolean | null,
    price: number,
    status?: CourseStatus | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    enrollment?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
    courseProfessorId?: string | null,
    owner?: string | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        courseBlocksId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    fileUploadEnabled?: boolean | null,
    price: number,
    status?: CourseStatus | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    enrollment?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
    courseProfessorId?: string | null,
    owner?: string | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cognitoId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cognitoId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cognitoId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBlockMutationVariables = {
  input: CreateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type CreateBlockMutation = {
  createBlock?:  {
    __typename: "Block",
    id: string,
    name: string,
    description?: string | null,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null,
    uploadedFiles?:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    courseBlocksId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBlockMutationVariables = {
  input: UpdateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type UpdateBlockMutation = {
  updateBlock?:  {
    __typename: "Block",
    id: string,
    name: string,
    description?: string | null,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null,
    uploadedFiles?:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    courseBlocksId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBlockMutationVariables = {
  input: DeleteBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type DeleteBlockMutation = {
  deleteBlock?:  {
    __typename: "Block",
    id: string,
    name: string,
    description?: string | null,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null,
    uploadedFiles?:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    courseBlocksId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    enrolledCourses?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    enrolledCourses?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    enrolledCourses?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateEnrollmentMutationVariables = {
  input: CreateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type CreateEnrollmentMutation = {
  createEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    course?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    date: string,
    status: EnrollStatus,
    paymentStatus: PaymentStatus,
    paymentType: PaymentType,
    enrollDetails:  Array< {
      __typename: "EnrollDetail",
      courseID: string,
      courseName: string,
      courseThumbnail: string,
      quantity: number,
      total: number,
    } >,
    createdAt: string,
    updatedAt: string,
    clientEnrolledCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateEnrollmentMutationVariables = {
  input: UpdateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type UpdateEnrollmentMutation = {
  updateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    course?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    date: string,
    status: EnrollStatus,
    paymentStatus: PaymentStatus,
    paymentType: PaymentType,
    enrollDetails:  Array< {
      __typename: "EnrollDetail",
      courseID: string,
      courseName: string,
      courseThumbnail: string,
      quantity: number,
      total: number,
    } >,
    createdAt: string,
    updatedAt: string,
    clientEnrolledCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEnrollmentMutationVariables = {
  input: DeleteEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type DeleteEnrollmentMutation = {
  deleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    course?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    date: string,
    status: EnrollStatus,
    paymentStatus: PaymentStatus,
    paymentType: PaymentType,
    enrollDetails:  Array< {
      __typename: "EnrollDetail",
      courseID: string,
      courseName: string,
      courseThumbnail: string,
      quantity: number,
      total: number,
    } >,
    createdAt: string,
    updatedAt: string,
    clientEnrolledCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePurchaseMutationVariables = {
  input: CreatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type CreatePurchaseMutation = {
  createPurchase?:  {
    __typename: "Purchase",
    id: string,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    coursePurchasesId?: string | null,
    clientPurchasesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePurchaseMutationVariables = {
  input: UpdatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type UpdatePurchaseMutation = {
  updatePurchase?:  {
    __typename: "Purchase",
    id: string,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    coursePurchasesId?: string | null,
    clientPurchasesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePurchaseMutationVariables = {
  input: DeletePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type DeletePurchaseMutation = {
  deletePurchase?:  {
    __typename: "Purchase",
    id: string,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    coursePurchasesId?: string | null,
    clientPurchasesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateFileMutationVariables = {
  input: CreateFileInput,
  condition?: ModelFileConditionInput | null,
};

export type CreateFileMutation = {
  createFile?:  {
    __typename: "File",
    id: string,
    name: string,
    url: string,
    uploadedBy?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fileUploadedById?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateFileMutationVariables = {
  input: UpdateFileInput,
  condition?: ModelFileConditionInput | null,
};

export type UpdateFileMutation = {
  updateFile?:  {
    __typename: "File",
    id: string,
    name: string,
    url: string,
    uploadedBy?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fileUploadedById?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteFileMutationVariables = {
  input: DeleteFileInput,
  condition?: ModelFileConditionInput | null,
};

export type DeleteFileMutation = {
  deleteFile?:  {
    __typename: "File",
    id: string,
    name: string,
    url: string,
    uploadedBy?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fileUploadedById?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateEnrollCoursesMutationVariables = {
  input: CreateEnrollCoursesInput,
  condition?: ModelEnrollCoursesConditionInput | null,
};

export type CreateEnrollCoursesMutation = {
  createEnrollCourses?:  {
    __typename: "EnrollCourses",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateEnrollCoursesMutationVariables = {
  input: UpdateEnrollCoursesInput,
  condition?: ModelEnrollCoursesConditionInput | null,
};

export type UpdateEnrollCoursesMutation = {
  updateEnrollCourses?:  {
    __typename: "EnrollCourses",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteEnrollCoursesMutationVariables = {
  input: DeleteEnrollCoursesInput,
  condition?: ModelEnrollCoursesConditionInput | null,
};

export type DeleteEnrollCoursesMutation = {
  deleteEnrollCourses?:  {
    __typename: "EnrollCourses",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cognitoId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    enrolledCourses?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnrollmentQueryVariables = {
  id: string,
};

export type GetEnrollmentQuery = {
  getEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    course?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    date: string,
    status: EnrollStatus,
    paymentStatus: PaymentStatus,
    paymentType: PaymentType,
    enrollDetails:  Array< {
      __typename: "EnrollDetail",
      courseID: string,
      courseName: string,
      courseThumbnail: string,
      quantity: number,
      total: number,
    } >,
    createdAt: string,
    updatedAt: string,
    clientEnrolledCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEnrollmentsQueryVariables = {
  filter?: ModelEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrollmentsQuery = {
  listEnrollments?:  {
    __typename: "ModelEnrollmentConnection",
    items:  Array< {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPurchaseQueryVariables = {
  id: string,
};

export type GetPurchaseQuery = {
  getPurchase?:  {
    __typename: "Purchase",
    id: string,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    coursePurchasesId?: string | null,
    clientPurchasesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPurchasesQueryVariables = {
  filter?: ModelPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchasesQuery = {
  listPurchases?:  {
    __typename: "ModelPurchaseConnection",
    items:  Array< {
      __typename: "Purchase",
      id: string,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      },
      date: string,
      createdAt: string,
      updatedAt: string,
      coursePurchasesId?: string | null,
      clientPurchasesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFileQueryVariables = {
  id: string,
};

export type GetFileQuery = {
  getFile?:  {
    __typename: "File",
    id: string,
    name: string,
    url: string,
    uploadedBy?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fileUploadedById?: string | null,
    owner?: string | null,
  } | null,
};

export type ListFilesQueryVariables = {
  filter?: ModelFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilesQuery = {
  listFiles?:  {
    __typename: "ModelFileConnection",
    items:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        courseBlocksId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    fileUploadEnabled?: boolean | null,
    price: number,
    status?: CourseStatus | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    enrollment?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
    courseProfessorId?: string | null,
    owner?: string | null,
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
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlockQueryVariables = {
  id: string,
};

export type GetBlockQuery = {
  getBlock?:  {
    __typename: "Block",
    id: string,
    name: string,
    description?: string | null,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null,
    uploadedFiles?:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    courseBlocksId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBlocksQueryVariables = {
  filter?: ModelBlockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlocksQuery = {
  listBlocks?:  {
    __typename: "ModelBlockConnection",
    items:  Array< {
      __typename: "Block",
      id: string,
      name: string,
      description?: string | null,
      course?:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null,
      uploadedFiles?:  Array< {
        __typename: "File",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        fileUploadedById?: string | null,
        owner?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      courseBlocksId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnrollCoursesQueryVariables = {
  id: string,
};

export type GetEnrollCoursesQuery = {
  getEnrollCourses?:  {
    __typename: "EnrollCourses",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListEnrollCoursesQueryVariables = {
  filter?: ModelEnrollCoursesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrollCoursesQuery = {
  listEnrollCourses?:  {
    __typename: "ModelEnrollCoursesConnection",
    items:  Array< {
      __typename: "EnrollCourses",
      id: string,
      courseId: string,
      enrollmentId: string,
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      },
      enrollment:  {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EnrollCoursesByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnrollCoursesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EnrollCoursesByCourseIdQuery = {
  enrollCoursesByCourseId?:  {
    __typename: "ModelEnrollCoursesConnection",
    items:  Array< {
      __typename: "EnrollCourses",
      id: string,
      courseId: string,
      enrollmentId: string,
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      },
      enrollment:  {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EnrollCoursesByEnrollmentIdQueryVariables = {
  enrollmentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnrollCoursesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EnrollCoursesByEnrollmentIdQuery = {
  enrollCoursesByEnrollmentId?:  {
    __typename: "ModelEnrollCoursesConnection",
    items:  Array< {
      __typename: "EnrollCourses",
      id: string,
      courseId: string,
      enrollmentId: string,
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      },
      enrollment:  {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
  owner?: string | null,
};

export type OnCreateProfessorSubscription = {
  onCreateProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cognitoId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProfessorSubscription = {
  onUpdateProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cognitoId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProfessorSubscription = {
  onDeleteProfessor?:  {
    __typename: "Professor",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        fileUploadEnabled?: boolean | null,
        price: number,
        status?: CourseStatus | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
        courseProfessorId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cognitoId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
  owner?: string | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    enrolledCourses?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
  owner?: string | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    enrolledCourses?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
  owner?: string | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    enrolledCourses?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        paymentStatus: PaymentStatus,
        paymentType: PaymentType,
        createdAt: string,
        updatedAt: string,
        clientEnrolledCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateEnrollmentSubscription = {
  onCreateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    course?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    date: string,
    status: EnrollStatus,
    paymentStatus: PaymentStatus,
    paymentType: PaymentType,
    enrollDetails:  Array< {
      __typename: "EnrollDetail",
      courseID: string,
      courseName: string,
      courseThumbnail: string,
      quantity: number,
      total: number,
    } >,
    createdAt: string,
    updatedAt: string,
    clientEnrolledCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEnrollmentSubscription = {
  onUpdateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    course?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    date: string,
    status: EnrollStatus,
    paymentStatus: PaymentStatus,
    paymentType: PaymentType,
    enrollDetails:  Array< {
      __typename: "EnrollDetail",
      courseID: string,
      courseName: string,
      courseThumbnail: string,
      quantity: number,
      total: number,
    } >,
    createdAt: string,
    updatedAt: string,
    clientEnrolledCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEnrollmentSubscription = {
  onDeleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    course?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    date: string,
    status: EnrollStatus,
    paymentStatus: PaymentStatus,
    paymentType: PaymentType,
    enrollDetails:  Array< {
      __typename: "EnrollDetail",
      courseID: string,
      courseName: string,
      courseThumbnail: string,
      quantity: number,
      total: number,
    } >,
    createdAt: string,
    updatedAt: string,
    clientEnrolledCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
  owner?: string | null,
};

export type OnCreatePurchaseSubscription = {
  onCreatePurchase?:  {
    __typename: "Purchase",
    id: string,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    coursePurchasesId?: string | null,
    clientPurchasesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePurchaseSubscription = {
  onUpdatePurchase?:  {
    __typename: "Purchase",
    id: string,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    coursePurchasesId?: string | null,
    clientPurchasesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
  owner?: string | null,
};

export type OnDeletePurchaseSubscription = {
  onDeletePurchase?:  {
    __typename: "Purchase",
    id: string,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    coursePurchasesId?: string | null,
    clientPurchasesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateFileSubscriptionVariables = {
  filter?: ModelSubscriptionFileFilterInput | null,
  owner?: string | null,
};

export type OnCreateFileSubscription = {
  onCreateFile?:  {
    __typename: "File",
    id: string,
    name: string,
    url: string,
    uploadedBy?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fileUploadedById?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateFileSubscriptionVariables = {
  filter?: ModelSubscriptionFileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFileSubscription = {
  onUpdateFile?:  {
    __typename: "File",
    id: string,
    name: string,
    url: string,
    uploadedBy?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fileUploadedById?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteFileSubscriptionVariables = {
  filter?: ModelSubscriptionFileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFileSubscription = {
  onDeleteFile?:  {
    __typename: "File",
    id: string,
    name: string,
    url: string,
    uploadedBy?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      enrolledCourses?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    fileUploadedById?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        courseBlocksId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    fileUploadEnabled?: boolean | null,
    price: number,
    status?: CourseStatus | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    enrollment?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
    courseProfessorId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        courseBlocksId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    fileUploadEnabled?: boolean | null,
    price: number,
    status?: CourseStatus | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    enrollment?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
    courseProfessorId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    description?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      cognitoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        courseBlocksId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    fileUploadEnabled?: boolean | null,
    price: number,
    status?: CourseStatus | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      items:  Array< {
        __typename: "Purchase",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        coursePurchasesId?: string | null,
        clientPurchasesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    enrollment?:  {
      __typename: "ModelEnrollCoursesConnection",
      items:  Array< {
        __typename: "EnrollCourses",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
    courseProfessorId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateBlockSubscriptionVariables = {
  filter?: ModelSubscriptionBlockFilterInput | null,
  owner?: string | null,
};

export type OnCreateBlockSubscription = {
  onCreateBlock?:  {
    __typename: "Block",
    id: string,
    name: string,
    description?: string | null,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null,
    uploadedFiles?:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    courseBlocksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBlockSubscriptionVariables = {
  filter?: ModelSubscriptionBlockFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBlockSubscription = {
  onUpdateBlock?:  {
    __typename: "Block",
    id: string,
    name: string,
    description?: string | null,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null,
    uploadedFiles?:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    courseBlocksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBlockSubscriptionVariables = {
  filter?: ModelSubscriptionBlockFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBlockSubscription = {
  onDeleteBlock?:  {
    __typename: "Block",
    id: string,
    name: string,
    description?: string | null,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    } | null,
    uploadedFiles?:  Array< {
      __typename: "File",
      id: string,
      name: string,
      url: string,
      uploadedBy?:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      fileUploadedById?: string | null,
      owner?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    courseBlocksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateEnrollCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollCoursesFilterInput | null,
  owner?: string | null,
};

export type OnCreateEnrollCoursesSubscription = {
  onCreateEnrollCourses?:  {
    __typename: "EnrollCourses",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateEnrollCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollCoursesFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEnrollCoursesSubscription = {
  onUpdateEnrollCourses?:  {
    __typename: "EnrollCourses",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteEnrollCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollCoursesFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEnrollCoursesSubscription = {
  onDeleteEnrollCourses?:  {
    __typename: "EnrollCourses",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        cognitoId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      fileUploadEnabled?: boolean | null,
      price: number,
      status?: CourseStatus | null,
      purchases?:  {
        __typename: "ModelPurchaseConnection",
        nextToken?: string | null,
      } | null,
      enrollment?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
      courseProfessorId?: string | null,
      owner?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      course?:  {
        __typename: "ModelEnrollCoursesConnection",
        nextToken?: string | null,
      } | null,
      client:  {
        __typename: "Client",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      date: string,
      status: EnrollStatus,
      paymentStatus: PaymentStatus,
      paymentType: PaymentType,
      enrollDetails:  Array< {
        __typename: "EnrollDetail",
        courseID: string,
        courseName: string,
        courseThumbnail: string,
        quantity: number,
        total: number,
      } >,
      createdAt: string,
      updatedAt: string,
      clientEnrolledCoursesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
