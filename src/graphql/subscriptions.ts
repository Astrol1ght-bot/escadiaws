/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
      id
      enrollments {
        items {
          id
          status
          date
          filekey
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
      id
      enrollments {
        items {
          id
          status
          date
          filekey
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
      id
      enrollments {
        items {
          id
          status
          date
          filekey
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
      id
      name
      thumbnail
      description
      price
      professor {
        id
        name
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      professorCoursesId
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
      professor {
        id
        name
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      professorCoursesId
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
      professor {
        id
        name
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      professorCoursesId
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
      courses {
        items {
          id
          name
          thumbnail
          description
          price
          keyfile
          createdAt
          updatedAt
          professorCoursesId
        }
        nextToken
      }
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
      courses {
        items {
          id
          name
          thumbnail
          description
          price
          keyfile
          createdAt
          updatedAt
          professorCoursesId
        }
        nextToken
      }
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
      courses {
        items {
          id
          name
          thumbnail
          description
          price
          keyfile
          createdAt
          updatedAt
          professorCoursesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEnrollment = /* GraphQL */ `
  subscription OnCreateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onCreateEnrollment(filter: $filter) {
      id
      student {
        id
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
      enrollDetails {
        courseID
        courseName
        thumbnail
        courseKeyFIle
        total
      }
      status
      date
      filekey
      createdAt
      updatedAt
      studentEnrollmentsId
    }
  }
`;
export const onUpdateEnrollment = /* GraphQL */ `
  subscription OnUpdateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onUpdateEnrollment(filter: $filter) {
      id
      student {
        id
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
      enrollDetails {
        courseID
        courseName
        thumbnail
        courseKeyFIle
        total
      }
      status
      date
      filekey
      createdAt
      updatedAt
      studentEnrollmentsId
    }
  }
`;
export const onDeleteEnrollment = /* GraphQL */ `
  subscription OnDeleteEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onDeleteEnrollment(filter: $filter) {
      id
      student {
        id
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
      enrollDetails {
        courseID
        courseName
        thumbnail
        courseKeyFIle
        total
      }
      status
      date
      filekey
      createdAt
      updatedAt
      studentEnrollmentsId
    }
  }
`;
export const onCreateCourseEnrollments = /* GraphQL */ `
  subscription OnCreateCourseEnrollments(
    $filter: ModelSubscriptionCourseEnrollmentsFilterInput
  ) {
    onCreateCourseEnrollments(filter: $filter) {
      id
      courseId
      enrollmentId
      course {
        id
        name
        thumbnail
        description
        price
        professor {
          id
          name
          createdAt
          updatedAt
        }
        keyfile
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
        professorCoursesId
      }
      enrollment {
        id
        student {
          id
          createdAt
          updatedAt
        }
        course {
          nextToken
        }
        enrollDetails {
          courseID
          courseName
          thumbnail
          courseKeyFIle
          total
        }
        status
        date
        filekey
        createdAt
        updatedAt
        studentEnrollmentsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseEnrollments = /* GraphQL */ `
  subscription OnUpdateCourseEnrollments(
    $filter: ModelSubscriptionCourseEnrollmentsFilterInput
  ) {
    onUpdateCourseEnrollments(filter: $filter) {
      id
      courseId
      enrollmentId
      course {
        id
        name
        thumbnail
        description
        price
        professor {
          id
          name
          createdAt
          updatedAt
        }
        keyfile
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
        professorCoursesId
      }
      enrollment {
        id
        student {
          id
          createdAt
          updatedAt
        }
        course {
          nextToken
        }
        enrollDetails {
          courseID
          courseName
          thumbnail
          courseKeyFIle
          total
        }
        status
        date
        filekey
        createdAt
        updatedAt
        studentEnrollmentsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseEnrollments = /* GraphQL */ `
  subscription OnDeleteCourseEnrollments(
    $filter: ModelSubscriptionCourseEnrollmentsFilterInput
  ) {
    onDeleteCourseEnrollments(filter: $filter) {
      id
      courseId
      enrollmentId
      course {
        id
        name
        thumbnail
        description
        price
        professor {
          id
          name
          createdAt
          updatedAt
        }
        keyfile
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
        professorCoursesId
      }
      enrollment {
        id
        student {
          id
          createdAt
          updatedAt
        }
        course {
          nextToken
        }
        enrollDetails {
          courseID
          courseName
          thumbnail
          courseKeyFIle
          total
        }
        status
        date
        filekey
        createdAt
        updatedAt
        studentEnrollmentsId
      }
      createdAt
      updatedAt
    }
  }
`;
