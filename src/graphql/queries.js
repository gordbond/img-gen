/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPhotodata = /* GraphQL */ `
  query GetPhotodata($id: ID!) {
    getPhotodata(id: $id) {
      id
      url
      type
      image
      createdAt
      updatedAt
    }
  }
`;
export const listPhotodata = /* GraphQL */ `
  query ListPhotodata(
    $filter: ModelPhotodataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotodata(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        type
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
