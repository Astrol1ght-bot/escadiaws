/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        emai
        enrollments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
        professor
        keyfile
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEnrollment = /* GraphQL */ `
  query GetEnrollment($id: ID!) {
    getEnrollment(id: $id) {
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
export const listEnrollments = /* GraphQL */ `
  query ListEnrollments(
    $filter: ModelEnrollmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrollments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourseEnrollments = /* GraphQL */ `
  query GetCourseEnrollments($id: ID!) {
    getCourseEnrollments(id: $id) {
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
export const listCourseEnrollments = /* GraphQL */ `
  query ListCourseEnrollments(
    $filter: ModelCourseEnrollmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseEnrollments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        enrollment {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseEnrollmentsByCourseId = /* GraphQL */ `
  query CourseEnrollmentsByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseEnrollmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseEnrollmentsByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        enrollment {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseEnrollmentsByEnrollmentId = /* GraphQL */ `
  query CourseEnrollmentsByEnrollmentId(
    $enrollmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseEnrollmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseEnrollmentsByEnrollmentId(
      enrollmentId: $enrollmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        enrollment {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
