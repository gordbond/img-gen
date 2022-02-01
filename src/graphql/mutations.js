/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPhotodata = /* GraphQL */ `
  mutation CreatePhotodata(
    $input: CreatePhotodataInput!
    $condition: ModelPhotodataConditionInput
  ) {
    createPhotodata(input: $input, condition: $condition) {
      id
      url
      type
      image
      createdAt
      updatedAt
    }
  }
`;
export const updatePhotodata = /* GraphQL */ `
  mutation UpdatePhotodata(
    $input: UpdatePhotodataInput!
    $condition: ModelPhotodataConditionInput
  ) {
    updatePhotodata(input: $input, condition: $condition) {
      id
      url
      type
      image
      createdAt
      updatedAt
    }
  }
`;
export const deletePhotodata = /* GraphQL */ `
  mutation DeletePhotodata(
    $input: DeletePhotodataInput!
    $condition: ModelPhotodataConditionInput
  ) {
    deletePhotodata(input: $input, condition: $condition) {
      id
      url
      type
      image
      createdAt
      updatedAt
    }
  }
`;
