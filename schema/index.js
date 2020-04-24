const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
  } = require('graphql')
  
  const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
  
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => "World"
      },
      name: {
        type: GraphQLString,
        resolve: () => "Sravan Kumar Bonagiri"
      }
    }
  })
  
  const ncSchema = new GraphQLSchema({
    query: RootQueryType
    //mutation: ....
  })
  
  
  module.exports = ncSchema;
  