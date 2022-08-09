// import { gql } from "apollo-server";

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Ranker {
    nickname: String!
    gender: String
    body: Int!
    squat: Int!
    bench: Int!
    dead: Int!
  }

  input RankerInput {
    nickname: String!
    gender: String!
    body: Int!
    squat: Int!
    bench: Int!
    dead: Int!
  }

  type Query {
    allRankers: [Ranker!]!
    manRankers: [Ranker!]!
    womanRankers: [Ranker!]!
  }

  type Mutation {
    addRanker(rankerInput: RankerInput): Ranker!
  }
`;

// export default typeDefs;
module.exports = typeDefs;
