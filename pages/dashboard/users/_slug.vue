<template>
	<h1>Compte user {{ slug }}</h1>
</template>
<script>
export default {
  data: () => ({
    slug: '',
  }),
  mounted() {
    console.log(this.$route.params['slug'])
    this.slug = this.$route.params['slug']
  },
}
</script>
