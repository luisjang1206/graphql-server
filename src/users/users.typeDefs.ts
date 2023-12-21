// import { gql } from "apollo-server";

export default `#graphql
  type User {
    id: Int!
    email: String!
    name: String!
  }

  type Query {
    users: [User]
  }
`;
