<template>
	<img
		class="body__backgroundImage"
		:src="
			require(`@/assets/img/backgrounds/${
				this.$store.state.bloonsRounds[
					this.$store.state.round
				].background
			}`)
		"
		alt=""
	/>
</template>

<script>
export default {
	name: 'background',
};
</script>

<style></style>
