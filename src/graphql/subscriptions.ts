/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
          clientId
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
          clientId
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
          clientId
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
export const onCreateProfessor = /* GraphQL */ `
  subscription OnCreateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $id: String
  ) {
    onCreateProfessor(filter: $filter, id: $id) {
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
export const onUpdateProfessor = /* GraphQL */ `
  subscription OnUpdateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $id: String
  ) {
    onUpdateProfessor(filter: $filter, id: $id) {
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
export const onDeleteProfessor = /* GraphQL */ `
  subscription OnDeleteProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $id: String
  ) {
    onDeleteProfessor(filter: $filter, id: $id) {
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
export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock($filter: ModelSubscriptionBlockFilterInput) {
    onCreateBlock(filter: $filter) {
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
export const onUpdateBlock = /* GraphQL */ `
  subscription OnUpdateBlock($filter: ModelSubscriptionBlockFilterInput) {
    onUpdateBlock(filter: $filter) {
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
export const onDeleteBlock = /* GraphQL */ `
  subscription OnDeleteBlock($filter: ModelSubscriptionBlockFilterInput) {
    onDeleteBlock(filter: $filter) {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
      id
      name
      email
      enrolledCourses {
        items {
          id
          cliendId
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
          clientId
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
      id
      name
      email
      enrolledCourses {
        items {
          id
          cliendId
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
          clientId
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
      id
      name
      email
      enrolledCourses {
        items {
          id
          cliendId
          date
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientEnrolledCoursesId
          clientId
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
export const onCreateEnrollment = /* GraphQL */ `
  subscription OnCreateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onCreateEnrollment(filter: $filter) {
      id
      course {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
          clientId
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
      }
      cliendId
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
      clientId
    }
  }
`;
export const onUpdateEnrollment = /* GraphQL */ `
  subscription OnUpdateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onUpdateEnrollment(filter: $filter) {
      id
      course {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
          clientId
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
      }
      cliendId
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
      clientId
    }
  }
`;
export const onDeleteEnrollment = /* GraphQL */ `
  subscription OnDeleteEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
  ) {
    onDeleteEnrollment(filter: $filter) {
      id
      course {
        items {
          id
          courseId
          enrollmentId
          createdAt
          updatedAt
          clientId
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
      }
      cliendId
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
      clientId
    }
  }
`;
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onCreatePurchase(filter: $filter) {
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onUpdatePurchase(filter: $filter) {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onDeletePurchase(filter: $filter) {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile($filter: ModelSubscriptionFileFilterInput) {
    onCreateFile(filter: $filter) {
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
      }
      cliendId
      createdAt
      updatedAt
      fileUploadedById
    }
  }
`;
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile($filter: ModelSubscriptionFileFilterInput) {
    onUpdateFile(filter: $filter) {
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
      }
      cliendId
      createdAt
      updatedAt
      fileUploadedById
    }
  }
`;
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile($filter: ModelSubscriptionFileFilterInput) {
    onDeleteFile(filter: $filter) {
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
      }
      cliendId
      createdAt
      updatedAt
      fileUploadedById
    }
  }
`;
export const onCreateEnrollCourses = /* GraphQL */ `
  subscription OnCreateEnrollCourses(
    $filter: ModelSubscriptionEnrollCoursesFilterInput
  ) {
    onCreateEnrollCourses(filter: $filter) {
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
          name
          email
          createdAt
          updatedAt
        }
        cliendId
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
        clientId
      }
      createdAt
      updatedAt
      clientId
    }
  }
`;
export const onUpdateEnrollCourses = /* GraphQL */ `
  subscription OnUpdateEnrollCourses(
    $filter: ModelSubscriptionEnrollCoursesFilterInput
  ) {
    onUpdateEnrollCourses(filter: $filter) {
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
          name
          email
          createdAt
          updatedAt
        }
        cliendId
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
        clientId
      }
      createdAt
      updatedAt
      clientId
    }
  }
`;
export const onDeleteEnrollCourses = /* GraphQL */ `
  subscription OnDeleteEnrollCourses(
    $filter: ModelSubscriptionEnrollCoursesFilterInput
  ) {
    onDeleteEnrollCourses(filter: $filter) {
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
          name
          email
          createdAt
          updatedAt
        }
        cliendId
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
        clientId
      }
      createdAt
      updatedAt
      clientId
    }
  }
`;
