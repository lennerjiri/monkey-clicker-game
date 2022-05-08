<template>
	<div class="body__farmMenu__background">
		<div class="farmMenu__background__contentContainer">
			<div
				@click="closeFarmMenu"
				class="contentContainer__close"
			>
				<font-awesome-icon
					icon="fa-solid fa-xmark"
				/>
			</div>
			<h1>
				FARM {{ this.$store.state.currentFarm + 1 }}
			</h1>
			<div
				class="contentContainer__maxLevel"
				v-if="
					this.$store.state.currentFarmLvl + 1 > 5
				"
			>
				MAX LEVEL
			</div>
			<div
				v-if="
					!(
						this.$store.state.currentFarmLvl +
							1 >
						5
					)
				"
				class="contentContainer__upgradeButton"
				:class="{
					contentContainer__upgradeButton___unavailable:
						this.$store.state.credit <
						this.$store.state.farmLevels[
							this.$store.state.currentFarmLvl
						].price,
				}"
				@click="updateFarmLevel"
			>
				<div class="upgradeButton__imgAndInfo">
					<img
						:src="
							require(`@/assets/img/farms/${
								this.$store.state
									.farmLevels[
									this.$store.state
										.currentFarmLvl
								].img
							}`)
						"
						alt=""
					/>
					<div>
						<h2>
							{{
								this.$store.state
									.farmLevels[
									this.$store.state
										.currentFarmLvl
								].name
							}}
						</h2>
						<p>
							{{
								this.$store.state
									.farmLevels[
									this.$store.state
										.currentFarmLvl
								].production
							}}
							<span>$</span> / s
						</p>
					</div>
				</div>
				<div
					class="upgradeButton__price"
					:class="{
						upgradeButton__price___unavailable:
							this.$store.state.credit <
							this.$store.state.farmLevels[
								this.$store.state
									.currentFarmLvl
							].price,
					}"
				>
					{{
						this.$store.state.farmLevels[
							this.$store.state.currentFarmLvl
						].price
					}}$
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'farmMenu',
	computed: {},
	methods: {
		closeFarmMenu() {
			this.$store.commit('closeFarm');
		},
		updateFarmLevel() {
			this.$store.dispatch('upgradeFarm');
		},
	},
};
</script>
