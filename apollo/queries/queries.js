import gql from 'graphql-tag'

export const MUSIC_LIST = gql`
  query {
    musics {
      id
      name
      message
      category
      url
    }
  }
`

export const ADD_MUSIC = gql`
  mutation(
    $name: String!
    $message: String!
    $category: String!
    $url: String!
  ) {
    addMusic(name: $name, message: $message, category: $category, url: $url) {
      id
      name
      category
      url
    }
  }
`
