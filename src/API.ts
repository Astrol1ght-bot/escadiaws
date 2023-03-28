/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentInput = {
  id?: string | null,
};

export type ModelStudentConditionInput = {
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  enrollments?: ModelEnrollmentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEnrollmentConnection = {
  __typename: "ModelEnrollmentConnection",
  items:  Array<Enrollment | null >,
  nextToken?: string | null,
};

export type Enrollment = {
  __typename: "Enrollment",
  id: string,
  student?: Student | null,
  course?: ModelCourseEnrollmentsConnection | null,
  status: EnrollmentStatus,
  date: string,
  filekey: string,
  courseID: string,
  courseName: string,
  thumbnail: string,
  total: string,
  createdAt: string,
  updatedAt: string,
  studentEnrollmentsId?: string | null,
};

export type ModelCourseEnrollmentsConnection = {
  __typename: "ModelCourseEnrollmentsConnection",
  items:  Array<CourseEnrollments | null >,
  nextToken?: string | null,
};

export type CourseEnrollments = {
  __typename: "CourseEnrollments",
  id: string,
  courseId: string,
  enrollmentId: string,
  course: Course,
  enrollment: Enrollment,
  createdAt: string,
  updatedAt: string,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  thumbnail: string,
  description?: string | null,
  price: number,
  professor?: Professor | null,
  keyfile?: string | null,
  enrollment?: ModelCourseEnrollmentsConnection | null,
  createdAt: string,
  updatedAt: string,
  professorCoursesId?: string | null,
};

export type Professor = {
  __typename: "Professor",
  id: string,
  name: string,
  courses?: ModelCourseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export enum EnrollmentStatus {
  pendiente = "pendiente",
  aprobado = "aprobado",
  rechazado = "rechazado",
}


export type UpdateStudentInput = {
  id: string,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  thumbnail: string,
  description?: string | null,
  price: number,
  keyfile?: string | null,
  professorCoursesId?: string | null,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  keyfile?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  professorCoursesId?: ModelIDInput | null,
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

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  thumbnail?: string | null,
  description?: string | null,
  price?: number | null,
  keyfile?: string | null,
  professorCoursesId?: string | null,
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

export type UpdateProfessorInput = {
  id: string,
  name?: string | null,
};

export type DeleteProfessorInput = {
  id: string,
};

export type CreateEnrollmentInput = {
  id?: string | null,
  status: EnrollmentStatus,
  date: string,
  filekey: string,
  courseID: string,
  courseName: string,
  thumbnail: string,
  total: string,
  studentEnrollmentsId?: string | null,
};

export type ModelEnrollmentConditionInput = {
  status?: ModelEnrollmentStatusInput | null,
  date?: ModelStringInput | null,
  filekey?: ModelStringInput | null,
  courseID?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  total?: ModelStringInput | null,
  and?: Array< ModelEnrollmentConditionInput | null > | null,
  or?: Array< ModelEnrollmentConditionInput | null > | null,
  not?: ModelEnrollmentConditionInput | null,
  studentEnrollmentsId?: ModelIDInput | null,
};

export type ModelEnrollmentStatusInput = {
  eq?: EnrollmentStatus | null,
  ne?: EnrollmentStatus | null,
};

export type UpdateEnrollmentInput = {
  id: string,
  status?: EnrollmentStatus | null,
  date?: string | null,
  filekey?: string | null,
  courseID?: string | null,
  courseName?: string | null,
  thumbnail?: string | null,
  total?: string | null,
  studentEnrollmentsId?: string | null,
};

export type DeleteEnrollmentInput = {
  id: string,
};

export type CreateCourseEnrollmentsInput = {
  id?: string | null,
  courseId: string,
  enrollmentId: string,
};

export type ModelCourseEnrollmentsConditionInput = {
  courseId?: ModelIDInput | null,
  enrollmentId?: ModelIDInput | null,
  and?: Array< ModelCourseEnrollmentsConditionInput | null > | null,
  or?: Array< ModelCourseEnrollmentsConditionInput | null > | null,
  not?: ModelCourseEnrollmentsConditionInput | null,
};

export type UpdateCourseEnrollmentsInput = {
  id: string,
  courseId?: string | null,
  enrollmentId?: string | null,
};

export type DeleteCourseEnrollmentsInput = {
  id: string,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  keyfile?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
  professorCoursesId?: ModelIDInput | null,
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

export type ModelEnrollmentFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelEnrollmentStatusInput | null,
  date?: ModelStringInput | null,
  filekey?: ModelStringInput | null,
  courseID?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  total?: ModelStringInput | null,
  and?: Array< ModelEnrollmentFilterInput | null > | null,
  or?: Array< ModelEnrollmentFilterInput | null > | null,
  not?: ModelEnrollmentFilterInput | null,
  studentEnrollmentsId?: ModelIDInput | null,
};

export type ModelCourseEnrollmentsFilterInput = {
  id?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  enrollmentId?: ModelIDInput | null,
  and?: Array< ModelCourseEnrollmentsFilterInput | null > | null,
  or?: Array< ModelCourseEnrollmentsFilterInput | null > | null,
  not?: ModelCourseEnrollmentsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
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

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  keyfile?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
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
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
};

export type ModelSubscriptionEnrollmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  filekey?: ModelSubscriptionStringInput | null,
  courseID?: ModelSubscriptionStringInput | null,
  courseName?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  total?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
};

export type ModelSubscriptionCourseEnrollmentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  enrollmentId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCourseEnrollmentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseEnrollmentsFilterInput | null > | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    keyfile?: string | null,
    enrollment?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    keyfile?: string | null,
    enrollment?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    keyfile?: string | null,
    enrollment?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
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
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    student?:  {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    course?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status: EnrollmentStatus,
    date: string,
    filekey: string,
    courseID: string,
    courseName: string,
    thumbnail: string,
    total: string,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    course?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status: EnrollmentStatus,
    date: string,
    filekey: string,
    courseID: string,
    courseName: string,
    thumbnail: string,
    total: string,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    course?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status: EnrollmentStatus,
    date: string,
    filekey: string,
    courseID: string,
    courseName: string,
    thumbnail: string,
    total: string,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
  } | null,
};

export type CreateCourseEnrollmentsMutationVariables = {
  input: CreateCourseEnrollmentsInput,
  condition?: ModelCourseEnrollmentsConditionInput | null,
};

export type CreateCourseEnrollmentsMutation = {
  createCourseEnrollments?:  {
    __typename: "CourseEnrollments",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseEnrollmentsMutationVariables = {
  input: UpdateCourseEnrollmentsInput,
  condition?: ModelCourseEnrollmentsConditionInput | null,
};

export type UpdateCourseEnrollmentsMutation = {
  updateCourseEnrollments?:  {
    __typename: "CourseEnrollments",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseEnrollmentsMutationVariables = {
  input: DeleteCourseEnrollmentsInput,
  condition?: ModelCourseEnrollmentsConditionInput | null,
};

export type DeleteCourseEnrollmentsMutation = {
  deleteCourseEnrollments?:  {
    __typename: "CourseEnrollments",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    price: number,
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    keyfile?: string | null,
    enrollment?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
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
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    student?:  {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    course?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status: EnrollmentStatus,
    date: string,
    filekey: string,
    courseID: string,
    courseName: string,
    thumbnail: string,
    total: string,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
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
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseEnrollmentsQueryVariables = {
  id: string,
};

export type GetCourseEnrollmentsQuery = {
  getCourseEnrollments?:  {
    __typename: "CourseEnrollments",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCourseEnrollmentsQueryVariables = {
  filter?: ModelCourseEnrollmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseEnrollmentsQuery = {
  listCourseEnrollments?:  {
    __typename: "ModelCourseEnrollmentsConnection",
    items:  Array< {
      __typename: "CourseEnrollments",
      id: string,
      courseId: string,
      enrollmentId: string,
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      },
      enrollment:  {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseEnrollmentsByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseEnrollmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseEnrollmentsByCourseIdQuery = {
  courseEnrollmentsByCourseId?:  {
    __typename: "ModelCourseEnrollmentsConnection",
    items:  Array< {
      __typename: "CourseEnrollments",
      id: string,
      courseId: string,
      enrollmentId: string,
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      },
      enrollment:  {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseEnrollmentsByEnrollmentIdQueryVariables = {
  enrollmentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseEnrollmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseEnrollmentsByEnrollmentIdQuery = {
  courseEnrollmentsByEnrollmentId?:  {
    __typename: "ModelCourseEnrollmentsConnection",
    items:  Array< {
      __typename: "CourseEnrollments",
      id: string,
      courseId: string,
      enrollmentId: string,
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      },
      enrollment:  {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        status: EnrollmentStatus,
        date: string,
        filekey: string,
        courseID: string,
        courseName: string,
        thumbnail: string,
        total: string,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    keyfile?: string | null,
    enrollment?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    keyfile?: string | null,
    enrollment?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
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
    professor?:  {
      __typename: "Professor",
      id: string,
      name: string,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    keyfile?: string | null,
    enrollment?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    professorCoursesId?: string | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        description?: string | null,
        price: number,
        keyfile?: string | null,
        createdAt: string,
        updatedAt: string,
        professorCoursesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
};

export type OnCreateEnrollmentSubscription = {
  onCreateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    student?:  {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    course?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status: EnrollmentStatus,
    date: string,
    filekey: string,
    courseID: string,
    courseName: string,
    thumbnail: string,
    total: string,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
  } | null,
};

export type OnUpdateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
};

export type OnUpdateEnrollmentSubscription = {
  onUpdateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    student?:  {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    course?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status: EnrollmentStatus,
    date: string,
    filekey: string,
    courseID: string,
    courseName: string,
    thumbnail: string,
    total: string,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
  } | null,
};

export type OnDeleteEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
};

export type OnDeleteEnrollmentSubscription = {
  onDeleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    student?:  {
      __typename: "Student",
      id: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    course?:  {
      __typename: "ModelCourseEnrollmentsConnection",
      items:  Array< {
        __typename: "CourseEnrollments",
        id: string,
        courseId: string,
        enrollmentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status: EnrollmentStatus,
    date: string,
    filekey: string,
    courseID: string,
    courseName: string,
    thumbnail: string,
    total: string,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
  } | null,
};

export type OnCreateCourseEnrollmentsSubscriptionVariables = {
  filter?: ModelSubscriptionCourseEnrollmentsFilterInput | null,
};

export type OnCreateCourseEnrollmentsSubscription = {
  onCreateCourseEnrollments?:  {
    __typename: "CourseEnrollments",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseEnrollmentsSubscriptionVariables = {
  filter?: ModelSubscriptionCourseEnrollmentsFilterInput | null,
};

export type OnUpdateCourseEnrollmentsSubscription = {
  onUpdateCourseEnrollments?:  {
    __typename: "CourseEnrollments",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseEnrollmentsSubscriptionVariables = {
  filter?: ModelSubscriptionCourseEnrollmentsFilterInput | null,
};

export type OnDeleteCourseEnrollmentsSubscription = {
  onDeleteCourseEnrollments?:  {
    __typename: "CourseEnrollments",
    id: string,
    courseId: string,
    enrollmentId: string,
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      description?: string | null,
      price: number,
      professor?:  {
        __typename: "Professor",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      keyfile?: string | null,
      enrollment?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      professorCoursesId?: string | null,
    },
    enrollment:  {
      __typename: "Enrollment",
      id: string,
      student?:  {
        __typename: "Student",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      course?:  {
        __typename: "ModelCourseEnrollmentsConnection",
        nextToken?: string | null,
      } | null,
      status: EnrollmentStatus,
      date: string,
      filekey: string,
      courseID: string,
      courseName: string,
      thumbnail: string,
      total: string,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
