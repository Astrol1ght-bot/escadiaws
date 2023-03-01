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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
      }
      cliendId
      createdAt
      updatedAt
      fileUploadedById
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
      }
      cliendId
      createdAt
      updatedAt
      fileUploadedById
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
      }
      cliendId
      createdAt
      updatedAt
      fileUploadedById
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
