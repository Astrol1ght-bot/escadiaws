/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          images
          available
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        owner
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      email
      enrolledCourses {
        items {
          id
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
          owner
        }
        nextToken
      }
      purchases {
        items {
          id
          date
          createdAt
          updatedAt
          coursePurchasesId
          clientPurchasesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        owner
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
          owner
        }
        nextToken
      }
      client {
        id
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
        owner
      }
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
      owner
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
          name
          email
          createdAt
          updatedAt
          owner
        }
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
        owner
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
        owner
      }
      course {
        id
        name
        thumbnail
        images
        available
        description
        professor {
          id
          name
          createdAt
          updatedAt
          owner
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
        owner
      }
      date
      createdAt
      updatedAt
      coursePurchasesId
      clientPurchasesId
      owner
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
          name
          email
          createdAt
          updatedAt
          owner
        }
        course {
          id
          name
          thumbnail
          images
          available
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          owner
        }
        date
        createdAt
        updatedAt
        coursePurchasesId
        clientPurchasesId
        owner
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
        owner
      }
      createdAt
      updatedAt
      fileUploadedById
      owner
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
          name
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        fileUploadedById
        owner
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
      images
      available
      description
      professor {
        id
        name
        courses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      blocks {
        items {
          id
          name
          description
          createdAt
          updatedAt
          courseBlocksId
          owner
        }
        nextToken
      }
      fileUploadEnabled
      price
      status
      purchases {
        items {
          id
          date
          createdAt
          updatedAt
          coursePurchasesId
          clientPurchasesId
          owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      professorCoursesId
      owner
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
        images
        available
        description
        professor {
          id
          name
          createdAt
          updatedAt
          owner
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
        owner
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
        images
        available
        description
        professor {
          id
          name
          createdAt
          updatedAt
          owner
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
        owner
      }
      uploadedFiles {
        id
        name
        url
        uploadedBy {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        fileUploadedById
        owner
      }
      createdAt
      updatedAt
      courseBlocksId
      owner
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
          images
          available
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          owner
        }
        uploadedFiles {
          id
          name
          url
          createdAt
          updatedAt
          fileUploadedById
          owner
        }
        createdAt
        updatedAt
        courseBlocksId
        owner
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
        images
        available
        description
        professor {
          id
          name
          createdAt
          updatedAt
          owner
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
        owner
      }
      enrollment {
        id
        course {
          nextToken
        }
        client {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
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
        owner
      }
      createdAt
      updatedAt
      owner
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
          images
          available
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          owner
        }
        enrollment {
          id
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
          owner
        }
        createdAt
        updatedAt
        owner
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
          images
          available
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          owner
        }
        enrollment {
          id
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
          owner
        }
        createdAt
        updatedAt
        owner
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
          images
          available
          description
          fileUploadEnabled
          price
          status
          createdAt
          updatedAt
          professorCoursesId
          owner
        }
        enrollment {
          id
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
