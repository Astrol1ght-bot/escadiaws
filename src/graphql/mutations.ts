/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createProfessor = /* GraphQL */ `
  mutation CreateProfessor(
    $input: CreateProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    createProfessor(input: $input, condition: $condition) {
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
export const updateProfessor = /* GraphQL */ `
  mutation UpdateProfessor(
    $input: UpdateProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    updateProfessor(input: $input, condition: $condition) {
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
export const deleteProfessor = /* GraphQL */ `
  mutation DeleteProfessor(
    $input: DeleteProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    deleteProfessor(input: $input, condition: $condition) {
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
export const createBlock = /* GraphQL */ `
  mutation CreateBlock(
    $input: CreateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    createBlock(input: $input, condition: $condition) {
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
export const updateBlock = /* GraphQL */ `
  mutation UpdateBlock(
    $input: UpdateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    updateBlock(input: $input, condition: $condition) {
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
export const deleteBlock = /* GraphQL */ `
  mutation DeleteBlock(
    $input: DeleteBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    deleteBlock(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createEnrollment = /* GraphQL */ `
  mutation CreateEnrollment(
    $input: CreateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    createEnrollment(input: $input, condition: $condition) {
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
export const updateEnrollment = /* GraphQL */ `
  mutation UpdateEnrollment(
    $input: UpdateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    updateEnrollment(input: $input, condition: $condition) {
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
export const deleteEnrollment = /* GraphQL */ `
  mutation DeleteEnrollment(
    $input: DeleteEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    deleteEnrollment(input: $input, condition: $condition) {
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
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
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
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
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
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
export const createEnrollCourses = /* GraphQL */ `
  mutation CreateEnrollCourses(
    $input: CreateEnrollCoursesInput!
    $condition: ModelEnrollCoursesConditionInput
  ) {
    createEnrollCourses(input: $input, condition: $condition) {
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
export const updateEnrollCourses = /* GraphQL */ `
  mutation UpdateEnrollCourses(
    $input: UpdateEnrollCoursesInput!
    $condition: ModelEnrollCoursesConditionInput
  ) {
    updateEnrollCourses(input: $input, condition: $condition) {
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
export const deleteEnrollCourses = /* GraphQL */ `
  mutation DeleteEnrollCourses(
    $input: DeleteEnrollCoursesInput!
    $condition: ModelEnrollCoursesConditionInput
  ) {
    deleteEnrollCourses(input: $input, condition: $condition) {
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
