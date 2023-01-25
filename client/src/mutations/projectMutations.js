import { gql } from "@apollo/client"

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $status: ProjectStatus
    $description: String!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      status: $status
      description: $description
      clientId: $clientId
    ) {
      id
      name
      status
    }
  }
`

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $status: ProjectStatusUpdate
    $description: String!
  ) {
    updateProject(
      id: $id
      name: $name
      status: $status
      description: $description
    ) {
      id
      name
      status
      description
    }
  }
`

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`

export { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT }
