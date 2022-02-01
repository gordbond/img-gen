/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPhotos = /* GraphQL */ `
  mutation CreatePhotos(
    $input: CreatePhotosInput!
    $condition: ModelPhotosConditionInput
  ) {
    createPhotos(input: $input, condition: $condition) {
      id
      type
      img
      url
      createdAt
      updatedAt
    }
  }
`;
export const updatePhotos = /* GraphQL */ `
  mutation UpdatePhotos(
    $input: UpdatePhotosInput!
    $condition: ModelPhotosConditionInput
  ) {
    updatePhotos(input: $input, condition: $condition) {
      id
      type
      img
      url
      createdAt
      updatedAt
    }
  }
`;
export const deletePhotos = /* GraphQL */ `
  mutation DeletePhotos(
    $input: DeletePhotosInput!
    $condition: ModelPhotosConditionInput
  ) {
    deletePhotos(input: $input, condition: $condition) {
      id
      type
      img
      url
      createdAt
      updatedAt
    }
  }
`;
