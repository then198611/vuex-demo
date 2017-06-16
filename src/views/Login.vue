<template>
  <div class="login-box">
    <p>i am login page</p>
    <p>username：<input type="text" v-model="name"/></p>
    <p>password：<input type="password" v-model="token"/></p>
    <p>
      <button v-on:click="login">login</button>
    </p>

    <br/>
    <p>
      您输入的用户名为：{{ name }}
    </p>
  </div>
</template>
<style>

</style>
<script>
  import Types from '../store/types'
  export default{
    name: 'login-view',
    data () {
      return {
        name: '',
        token: ''
      }
    },
    created () {
      console.log(this.$store)
    },
    methods: {
      login () {
        this.$store.dispatch(Types.LOGIN.PRE + Types.LOGIN.LOGIN_A_LOGIN, {
          name: this.name,
          token: this.token
        }).then(() => {
          let redirect = decodeURIComponent(this.$route.query.redirect || '/')
          this.$router.push({
            path: redirect
          })
        })
      }
    }
  }
</script>
