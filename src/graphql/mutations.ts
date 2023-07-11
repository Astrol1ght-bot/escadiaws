/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      name
      emai
      enrollments {
        items {
          id
          status
          date
          filekey
          courseID
          courseName
          thumbnail
          total
          createdAt
          updatedAt
          studentEnrollmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      name
      emai
      enrollments {
        items {
          id
          status
          date
          filekey
          courseID
          courseName
          thumbnail
          total
          createdAt
          updatedAt
          studentEnrollmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      name
      emai
      enrollments {
        items {
          id
          status
          date
          filekey
          courseID
          courseName
          thumbnail
          total
          createdAt
          updatedAt
          studentEnrollmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
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
      professor
      keyfile
      enrollment {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
        }
        nextToken
      }
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
      professor
      keyfile
      enrollment {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
        }
        nextToken
      }
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
      professor
      keyfile
      enrollment {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEnrollment = /* GraphQL */ `
  mutation CreateEnrollment(
    $input: CreateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    createEnrollment(input: $input, condition: $condition) {
      id
      student {
        id
        name
        emai
        enrollments {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      date
      filekey
      courseID
      courseName
      thumbnail
      total
      createdAt
      updatedAt
      studentEnrollmentsId
    }
  }
`;
export const updateEnrollment = /* GraphQL */ `
  mutation UpdateEnrollment(
    $input: UpdateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    updateEnrollment(input: $input, condition: $condition) {
      id
      student {
        id
        name
        emai
        enrollments {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      date
      filekey
      courseID
      courseName
      thumbnail
      total
      createdAt
      updatedAt
      studentEnrollmentsId
    }
  }
`;
export const deleteEnrollment = /* GraphQL */ `
  mutation DeleteEnrollment(
    $input: DeleteEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    deleteEnrollment(input: $input, condition: $condition) {
      id
      student {
        id
        name
        emai
        enrollments {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      date
      filekey
      courseID
      courseName
      thumbnail
      total
      createdAt
      updatedAt
      studentEnrollmentsId
    }
  }
`;
export const createCourseEnrollments = /* GraphQL */ `
  mutation CreateCourseEnrollments(
    $input: CreateCourseEnrollmentsInput!
    $condition: ModelCourseEnrollmentsConditionInput
  ) {
    createCourseEnrollments(input: $input, condition: $condition) {
      id
      courseId
      enrollmentId
      course {
        id
        name
        thumbnail
        description
        price
        professor
        keyfile
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
      }
      enrollment {
        id
        student {
          id
          name
          emai
          createdAt
          updatedAt
        }
        course {
          nextToken
        }
        status
        date
        filekey
        courseID
        courseName
        thumbnail
        total
        createdAt
        updatedAt
        studentEnrollmentsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseEnrollments = /* GraphQL */ `
  mutation UpdateCourseEnrollments(
    $input: UpdateCourseEnrollmentsInput!
    $condition: ModelCourseEnrollmentsConditionInput
  ) {
    updateCourseEnrollments(input: $input, condition: $condition) {
      id
      courseId
      enrollmentId
      course {
        id
        name
        thumbnail
        description
        price
        professor
        keyfile
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
      }
      enrollment {
        id
        student {
          id
          name
          emai
          createdAt
          updatedAt
        }
        course {
          nextToken
        }
        status
        date
        filekey
        courseID
        courseName
        thumbnail
        total
        createdAt
        updatedAt
        studentEnrollmentsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseEnrollments = /* GraphQL */ `
  mutation DeleteCourseEnrollments(
    $input: DeleteCourseEnrollmentsInput!
    $condition: ModelCourseEnrollmentsConditionInput
  ) {
    deleteCourseEnrollments(input: $input, condition: $condition) {
      id
      courseId
      enrollmentId
      course {
        id
        name
        thumbnail
        description
        price
        professor
        keyfile
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
      }
      enrollment {
        id
        student {
          id
          name
          emai
          createdAt
          updatedAt
        }
        course {
          nextToken
        }
        status
        date
        filekey
        courseID
        courseName
        thumbnail
        total
        createdAt
        updatedAt
        studentEnrollmentsId
      }
      createdAt
      updatedAt
    }
  }
`;
