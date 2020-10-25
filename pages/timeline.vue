<template>
  <div>
    <Header />
    <Content />
    <PostsIcon />
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import Header from '../components/header'
import Content from '../components/content'
import PostsIcon from '../components/posts-icon'
export default {
  components: {
    Header,
    Content,
    PostsIcon,
  },
  data() {
    return {
      currentUID: null,
    }
  },
  created() {
    const user = firebase.auth().currentUser
    if (user) {
      // ログイン済み
      this.currentUID = user.uid
      console.log(user)
      this.userAuth(user)
    } else {
      // 未ログイン。ログイン画面へ遷移する
      this.$router.push('/signup')
    }
  },
  methods: {
    userAuth(user) {
      const db = firebase.firestore()
      const collection = db.collection('users')

      const docRef = collection.doc(this.currentUID)

      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log('Get document data!!')
          } else {
            // Firestoreにデータが無かったら追加する
            console.log('No such document!')
            user.providerData.forEach(function (profile) {
              collection.doc(user.uid).set(
                {
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  signProvider: profile.providerId,
                  email: profile.email,
                  displayName: profile.displayName,
                  photoURL: profile.photoURL,
                },
                { merge: true }
              )
            })
          }
        })
        .catch(function (error) {
          console.log('Error getting document:', error)
        })
    },
  },
}
</script>
