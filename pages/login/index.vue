<template>
	  <v-container>
    <h1>Login</h1>

    <Login buttonText="Login" :submitForm="loginUser" />
  </v-container>
</template>

<script>

import Login from '@/components/Login'

  export default {
    components: {
      Login
    }
	}
</script>
