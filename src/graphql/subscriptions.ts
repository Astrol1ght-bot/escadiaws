/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateEnrollment = /* GraphQL */ `
  subscription OnCreateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onCreateEnrollment(filter: $filter) {
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
export const onUpdateEnrollment = /* GraphQL */ `
  subscription OnUpdateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onUpdateEnrollment(filter: $filter) {
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
export const onDeleteEnrollment = /* GraphQL */ `
  subscription OnDeleteEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onDeleteEnrollment(filter: $filter) {
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
