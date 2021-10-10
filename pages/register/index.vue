<template>
	  <v-container>
    <h1>Login</h1>

    <AddUserForm buttonText="Register" :submitForm="loginUser" />
  </v-container>
</template>

<script>

import AddUserForm from '@/components/AddUserForm'

  export default {
    components: {
      AddUserForm
    }
	}
</script>
