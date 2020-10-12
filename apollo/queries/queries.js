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
