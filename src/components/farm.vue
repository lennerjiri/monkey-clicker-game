<template>
	<div
		class="body__rightPaneBuilding__build--selectBuilding"
		@click="openFarm"
	>
		<img
			v-if="farm !== 0"
			:src="
				require(`@/assets/img/farms/0${farm}.webp`)
			"
			alt=""
		/>
		<font-awesome-icon
			v-if="farm === 0"
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
	methods: {
		openFarm() {
			this.$store.commit('openFarm', this.index);
		},
	},
};
</script>

<style></style>
