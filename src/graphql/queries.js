/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchFetchTodo = /* GraphQL */ `
  query BatchFetchTodo($ids: [ID]) {
    batchFetchTodo(ids: $ids) {
      id
      name
      description
      priority
      createdAt
      updatedAt
    }
  }
`;
export const batchFetchTodoWithNotes = /* GraphQL */ `
  query BatchFetchTodoWithNotes($todoIds: [ID], $notesIds: [ID]) {
    batchFetchTodoWithNotes(todoIds: $todoIds, notesIds: $notesIds) {
      todos {
        id
        name
        description
        priority
        createdAt
        updatedAt
      }
      notes {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      priority
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        priority
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
