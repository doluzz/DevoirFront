<template>
     <div>
    <v-form>
      <div>
        <label>Username</label>
        <v-text-field v-model="name" required/>
      </div>
		<div>
        <label>Email</label>
        <v-text-field v-model="email" required/>
      </div>
      <div>
        <label>Password</label>
        <v-text-field v-model="password" required/>
      </div>
      <div>
        <v-btn @click="add" type="submit">Submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
	data () {
		return {
			name: '',
			email: '',
			password: '',
		}
	},
	methods: {
		add() {
		// console.log(this.name)
		// console.log(this.$store)
			this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
			name: this.name,
			email: this.email,
			password: this.password,
			})
			this.$router.push('login')	
		},
	},
}
</script>
