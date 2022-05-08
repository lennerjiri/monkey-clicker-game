<template>
	<div
		class="body__rightPaneBuilding__build--selectBuilding"
		@click="openFarm"
	>
		<img
			v-if="farmLevel !== 0"
			:src="
				require(`@/assets/img/farms/${
					this.$store.state.farmLevels[
						farmLevel - 1
					].img
				}`)
			"
			alt=""
		/>
		<font-awesome-icon
			v-if="farmLevel === 0"
			icon="fa-solid fa-plus"
		/>
	</div>
</template>

<script>
export default {
	name: 'farm',
	props: {
		index: Number,
		farm: Number,
	},
	computed: {
		farmLevel() {
			return this.$store.state[
				`farm${this.index + 1}`
			];
		},
	},
	methods: {
		openFarm() {
			this.$store.commit('openFarm', this.index);
		},
	},
};
</script>

<style></style>
