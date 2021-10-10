<template>
     <div>
    <v-form>
      <div>
        <label>Username</label>
        <v-text-field v-model="name" required/>
      </div>
      <div>
        <label>Password</label>
        <v-text-field v-model="password" required/>
      </div>
      <div>
        <v-btn @click="login" type="submit">Submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  	data: () => ({
		name: '',
		password: ''
	
  	}),
  methods: {
    login() {
		var nbUser  = this.$store.state.users;
		for (let i = 0; i < nbUser.users.length; i++) {
			if (nbUser.users[i].name == this.name && nbUser.users[i].password == this.password) {
				this.$store.dispatch(ACTIONS.USER_LOGIN, {
					name: this.name,
				})
				this.$router.push('dashboard')
			}
		}
    },
  },
}
</script>