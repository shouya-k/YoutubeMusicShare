<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import Header from '~/components/layouts/header'
import Content from '~/components/contents/content'
export default {
  components: {
    Header,
    Content,
  },
  data() {
    return {
      currentUID: null,
    }
  },
  created() {
    const user = firebase.auth().currentUser
    if (user) {
      this.currentUID = user.uid
      this.userAuth(user)
    } else {
      console.log('未認証です。')
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
            user.providerData.forEach(function (profile) {
              collection.doc(user.uid).set(
                {
                  createdAt: new Date().toLocaleString({
                    timeZone: 'Asia/Tokyo',
                  }),
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
