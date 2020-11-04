<template>
  <div>
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script>
import Header from '~/components/layouts/auth-header'
import Form from '~/components/contents/signin-form'
export default {
  components: {
    Header,
    Form,
  },
}
</script>

<style lang="scss" scoped></style>
