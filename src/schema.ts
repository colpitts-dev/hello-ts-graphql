import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

// Root query type
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Documentation for RootQueryType...",
  fields: {
    greeting: {
      type: GraphQLString,
      resolve() {
        return "Hello TypeScript + GraphQL";
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
