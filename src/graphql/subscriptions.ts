/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfessor = /* GraphQL */ `
  subscription OnCreateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $owner: String
  ) {
    onCreateProfessor(filter: $filter, owner: $owner) {
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
          owner
        }
        nextToken
      }
      cognitoId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfessor = /* GraphQL */ `
  subscription OnUpdateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $owner: String
  ) {
    onUpdateProfessor(filter: $filter, owner: $owner) {
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
          owner
        }
        nextToken
      }
      cognitoId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfessor = /* GraphQL */ `
  subscription OnDeleteProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $owner: String
  ) {
    onDeleteProfessor(filter: $filter, owner: $owner) {
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
          owner
        }
        nextToken
      }
      cognitoId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onCreateClient(filter: $filter, owner: $owner) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onUpdateClient(filter: $filter, owner: $owner) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onDeleteClient(filter: $filter, owner: $owner) {
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
export const onCreateEnrollment = /* GraphQL */ `
  subscription OnCreateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
    $owner: String
  ) {
    onCreateEnrollment(filter: $filter, owner: $owner) {
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
export const onUpdateEnrollment = /* GraphQL */ `
  subscription OnUpdateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
    $owner: String
  ) {
    onUpdateEnrollment(filter: $filter, owner: $owner) {
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
export const onDeleteEnrollment = /* GraphQL */ `
  subscription OnDeleteEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
    $owner: String
  ) {
    onDeleteEnrollment(filter: $filter, owner: $owner) {
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
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $owner: String
  ) {
    onCreatePurchase(filter: $filter, owner: $owner) {
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
        description
        professor {
          id
          name
          cognitoId
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
        courseProfessorId
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $owner: String
  ) {
    onUpdatePurchase(filter: $filter, owner: $owner) {
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
        description
        professor {
          id
          name
          cognitoId
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
        courseProfessorId
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $owner: String
  ) {
    onDeletePurchase(filter: $filter, owner: $owner) {
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
        description
        professor {
          id
          name
          cognitoId
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
        courseProfessorId
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile(
    $filter: ModelSubscriptionFileFilterInput
    $owner: String
  ) {
    onCreateFile(filter: $filter, owner: $owner) {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile(
    $filter: ModelSubscriptionFileFilterInput
    $owner: String
  ) {
    onUpdateFile(filter: $filter, owner: $owner) {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile(
    $filter: ModelSubscriptionFileFilterInput
    $owner: String
  ) {
    onDeleteFile(filter: $filter, owner: $owner) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onCreateCourse(filter: $filter, owner: $owner) {
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
        cognitoId
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
      courseProfessorId
      owner
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onUpdateCourse(filter: $filter, owner: $owner) {
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
        cognitoId
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
      courseProfessorId
      owner
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onDeleteCourse(filter: $filter, owner: $owner) {
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
        cognitoId
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
      courseProfessorId
      owner
    }
  }
`;
export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock(
    $filter: ModelSubscriptionBlockFilterInput
    $owner: String
  ) {
    onCreateBlock(filter: $filter, owner: $owner) {
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
          cognitoId
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
        courseProfessorId
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
export const onUpdateBlock = /* GraphQL */ `
  subscription OnUpdateBlock(
    $filter: ModelSubscriptionBlockFilterInput
    $owner: String
  ) {
    onUpdateBlock(filter: $filter, owner: $owner) {
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
          cognitoId
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
        courseProfessorId
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
export const onDeleteBlock = /* GraphQL */ `
  subscription OnDeleteBlock(
    $filter: ModelSubscriptionBlockFilterInput
    $owner: String
  ) {
    onDeleteBlock(filter: $filter, owner: $owner) {
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
          cognitoId
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
        courseProfessorId
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
export const onCreateEnrollCourses = /* GraphQL */ `
  subscription OnCreateEnrollCourses(
    $filter: ModelSubscriptionEnrollCoursesFilterInput
    $owner: String
  ) {
    onCreateEnrollCourses(filter: $filter, owner: $owner) {
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
          cognitoId
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
        courseProfessorId
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
export const onUpdateEnrollCourses = /* GraphQL */ `
  subscription OnUpdateEnrollCourses(
    $filter: ModelSubscriptionEnrollCoursesFilterInput
    $owner: String
  ) {
    onUpdateEnrollCourses(filter: $filter, owner: $owner) {
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
          cognitoId
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
        courseProfessorId
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
export const onDeleteEnrollCourses = /* GraphQL */ `
  subscription OnDeleteEnrollCourses(
    $filter: ModelSubscriptionEnrollCoursesFilterInput
    $owner: String
  ) {
    onDeleteEnrollCourses(filter: $filter, owner: $owner) {
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
          cognitoId
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
        courseProfessorId
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
