const graphql = require('graphql')

const {
  GraphQLObjectType,
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: "",
    firsrName: "",
    age: ""
  }
})