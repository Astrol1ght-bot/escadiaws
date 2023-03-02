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
      professor {
        id
        name
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      blocks {
        items {
          id
          name
          description
          authorId
          createdAt
          updatedAt
          courseBlocksId
        }
        nextToken
      }
      fileUploadEnabled
      price
      status
      purchases {
        items {
          id
          clientId
          date
          createdAt
          updatedAt
          coursePurchasesId
          clientPurchasesId
          cliendId
        }
        nextToken
      }
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
      courseProfessorId
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
        professor {
          id
          name
          createdAt
          updatedAt
        }
        blocks {
          nextToken
        }
        fileUploadEnabled
        price
        status
        purchases {
          nextToken
        }
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
        professorCoursesId
        courseProfessorId
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
      courses {
        items {
          id
          name
          thumbnail
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          courseProfessorId
        }
        nextToken
      }
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
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    getBlock(id: $id) {
      id
      name
      description
      course {
        id
        name
        thumbnail
        description
        professor {
          id
          name
          createdAt
          updatedAt
        }
        blocks {
          nextToken
        }
        fileUploadEnabled
        price
        status
        purchases {
          nextToken
        }
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
        professorCoursesId
        courseProfessorId
      }
      uploadedFiles {
        id
        name
        url
        uploadedBy {
          id
          user
          name
          email
          createdAt
          updatedAt
        }
        cliendId
        createdAt
        updatedAt
        fileUploadedById
      }
      author {
        id
        name
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      createdAt
      updatedAt
      courseBlocksId
    }
  }
`;
export const listBlocks = /* GraphQL */ `
  query ListBlocks(
    $filter: ModelBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        course {
          id
          name
          thumbnail
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          courseProfessorId
        }
        uploadedFiles {
          id
          name
          url
          cliendId
          createdAt
          updatedAt
          fileUploadedById
        }
        author {
          id
          name
          createdAt
          updatedAt
        }
        authorId
        createdAt
        updatedAt
        courseBlocksId
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      user
      name
      email
      enrolledCourses {
        items {
          id
          total
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
        }
        nextToken
      }
      purchases {
        items {
          id
          clientId
          date
          createdAt
          updatedAt
          coursePurchasesId
          clientPurchasesId
          cliendId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        name
        email
        enrolledCourses {
          nextToken
        }
        purchases {
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
      client {
        id
        user
        name
        email
        enrolledCourses {
          nextToken
        }
        purchases {
          nextToken
        }
        createdAt
        updatedAt
      }
      total
      date
      status
      paymentStatus
      paymentType
      enrollDetails {
        courseID
        courseName
        courseThumbnail
        quantity
        total
      }
      createdAt
      updatedAt
      clientEnrolledCoursesId
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
        course {
          nextToken
        }
        client {
          id
          user
          name
          email
          createdAt
          updatedAt
        }
        total
        date
        status
        paymentStatus
        paymentType
        enrollDetails {
          courseID
          courseName
          courseThumbnail
          quantity
          total
        }
        createdAt
        updatedAt
        clientEnrolledCoursesId
      }
      nextToken
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
      id
      client {
        id
        user
        name
        email
        enrolledCourses {
          nextToken
        }
        purchases {
          nextToken
        }
        createdAt
        updatedAt
      }
      clientId
      course {
        id
        name
        thumbnail
        description
        professor {
          id
          name
          createdAt
          updatedAt
        }
        blocks {
          nextToken
        }
        fileUploadEnabled
        price
        status
        purchases {
          nextToken
        }
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
        professorCoursesId
        courseProfessorId
      }
      date
      createdAt
      updatedAt
      coursePurchasesId
      clientPurchasesId
      cliendId
    }
  }
`;
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        client {
          id
          user
          name
          email
          createdAt
          updatedAt
        }
        clientId
        course {
          id
          name
          thumbnail
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          courseProfessorId
        }
        date
        createdAt
        updatedAt
        coursePurchasesId
        clientPurchasesId
        cliendId
      }
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      name
      url
      uploadedBy {
        id
        user
        name
        email
        enrolledCourses {
          nextToken
        }
        purchases {
          nextToken
        }
        createdAt
        updatedAt
      }
      cliendId
      createdAt
      updatedAt
      fileUploadedById
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        uploadedBy {
          id
          user
          name
          email
          createdAt
          updatedAt
        }
        cliendId
        createdAt
        updatedAt
        fileUploadedById
      }
      nextToken
    }
  }
`;
export const getEnrollCourses = /* GraphQL */ `
  query GetEnrollCourses($id: ID!) {
    getEnrollCourses(id: $id) {
      id
      courseId
      enrollmentId
      course {
        id
        name
        thumbnail
        description
        professor {
          id
          name
          createdAt
          updatedAt
        }
        blocks {
          nextToken
        }
        fileUploadEnabled
        price
        status
        purchases {
          nextToken
        }
        enrollment {
          nextToken
        }
        createdAt
        updatedAt
        professorCoursesId
        courseProfessorId
      }
      enrollment {
        id
        course {
          nextToken
        }
        client {
          id
          user
          name
          email
          createdAt
          updatedAt
        }
        total
        date
        status
        paymentStatus
        paymentType
        enrollDetails {
          courseID
          courseName
          courseThumbnail
          quantity
          total
        }
        createdAt
        updatedAt
        clientEnrolledCoursesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEnrollCourses = /* GraphQL */ `
  query ListEnrollCourses(
    $filter: ModelEnrollCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrollCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseId
        enrollmentId
        course {
          id
          name
          thumbnail
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          courseProfessorId
        }
        enrollment {
          id
          total
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const enrollCoursesByCourseId = /* GraphQL */ `
  query EnrollCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEnrollCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    enrollCoursesByCourseId(
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
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          courseProfessorId
        }
        enrollment {
          id
          total
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const enrollCoursesByEnrollmentId = /* GraphQL */ `
  query EnrollCoursesByEnrollmentId(
    $enrollmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEnrollCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    enrollCoursesByEnrollmentId(
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
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          courseProfessorId
        }
        enrollment {
          id
          total
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
