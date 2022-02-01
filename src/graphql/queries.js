/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPhotos = /* GraphQL */ `
  query GetPhotos($id: ID!) {
    getPhotos(id: $id) {
      id
      type
      img
      url
      createdAt
      updatedAt
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        img
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
