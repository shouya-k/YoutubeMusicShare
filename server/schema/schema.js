const graphql = require('graphql')
const Music = require('../models/music')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = graphql
const { GraphQLDateTime } = require('graphql-iso-date')

const MusicType = new GraphQLObjectType({
  name: 'Music',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    message: { type: GraphQLString },
    category: { type: GraphQLString },
    url: { type: GraphQLString },
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
    musics: {
      type: new GraphQLList(MusicType),
      resolve(parent, args) {
        return Music.find({})
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
        message: { type: GraphQLString },
        category: { type: GraphQLString },
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        let music = new Music({
          name: args.name,
          message: args.message,
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
