export type AmplifyDependentResourcesAttributes = {
  "api": {
    "apiEscadi": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "escadiauth": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "AdminsGroupRole": "string",
      "ClientsGroupRole": "string",
      "ProfessorsGroupRole": "string",
      "StudentsGroupRole": "string"
    }
  },
  "storage": {
    "storage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}