import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const peopleData = [
  { id: "1", name: "Bill", email: "bill@example.com", age: 65 },
  { id: "2", name: "Jane", email: "jane@example.com", age: 23 },
  { id: "3", name: "Ted", email: "ted@example.com", age: 33 },
  { id: "4", name: "John", email: "johndoe@example.com", age: 18 },
];

const PersonType = new GraphQLObjectType({
  name: "Person",
  description: "People are what make up the hyper[local] communities",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

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
    people: {
      type: new GraphQLList(PersonType),
      description: "Returns a list of all people on the platform",
      resolve() {
        return peopleData;
      },
    },
    person: {
      type: PersonType,
      description: "Returns a single person by their ID",
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return peopleData.find((person) => {
          return person.id === args.id;
        });
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
