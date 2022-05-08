<template>
	<div class="body__powerMenu__background">
		<div
			class="powerMenu__background__contentContainer"
		>
			<div
				@click="closePowerMenu"
				class="contentContainer__close"
			>
				<font-awesome-icon
					icon="fa-solid fa-xmark"
				/>
			</div>
			<h1>POWER</h1>
			<div
				class="contentContainer__upgradeButton"
				:class="{
					contentContainer__upgradeButton___unavailable:
						this.$store.state.credit <
						this.$store.state.demagePrice,
				}"
				@click="upgradeDemage"
			>
				<div class="upgradeButton__imgAndInfo">
					<img
						:src="
							require(`@/assets/img/weapons/${
								this.$store.state.classes[
									this.$store.state.class
								].weaponImg
							}`)
						"
						alt=""
					/>
					<div>
						<h2>INCREASE POWER</h2>

						<p>
							DEMAGE +
							{{ this.$store.state.demage }}
						</p>
					</div>
				</div>
				<div
					class="upgradeButton__price"
					:class="{
						upgradeButton__price___unavailable:
							this.$store.state.credit <
							this.$store.state.demagePrice,
					}"
				>
					{{ this.$store.state.demagePrice }}$
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'classMenu',
	computed: {},
	methods: {
		closePowerMenu() {
			this.$store.commit('closePower');
		},
		upgradeDemage() {
			this.$store.dispatch('upgradeDemage');
		},
	},
};
</script>
