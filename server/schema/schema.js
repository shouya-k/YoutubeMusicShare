const graphql = require('graphql')
const Music = require('../models/music')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = graphql

const MusicType = new GraphQLObjectType({
  name: 'Music',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    music: {
      type: MusicType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Music.findById(args.id)
      },
    },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMusic: {
      type: MusicType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
      },
      resolve(parent, args) {
        let music = new Music({
          name: args.name,
          category: args.category,
        })

        return music.save()
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
