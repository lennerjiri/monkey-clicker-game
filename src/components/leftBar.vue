<template>
	<aside
		class="body__leftPanelUser"
		:class="{
			body__leftPanelUser___hidden:
				!this.$store.state.leftPanelOpen,
		}"
	>
		<!--Hider-->
		<div
			class="body__leftPanelUser__slider"
			@click="$emit('togglePanel', 'leftPanelOpen')"
		>
			<font-awesome-icon
				icon="fa-solid fa-chevron-right"
			/>
		</div>
		<!--Content -->
		<div class="body__leftPanelUser__weapons selectBox">
			<p>POWER</p>
			<div
				class="body__leftPanelUser__weapons--weaponUpgrade"
				@click="openPower"
			>
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
			</div>
		</div>
		<div class="body__leftPanelUser__class selectBox">
			<p>Class</p>
			<div
				class="body__leftPanelUser__class--classSelect"
				@click="openClass"
			>
				<img
					:src="
						require(`@/assets/img/class/${
							this.$store.state.classes[
								this.$store.state.class
							].img
						}`)
					"
					alt=""
				/>
			</div>
		</div>
		<div
			class="body__leftPanelUser__mobility selectBox"
		>
			<p>Health</p>
			<div
				class="body__leftPanelUser__mobility--mobilityUpgrade"
			>
				<img
					src="@/assets/img/health/01.png"
					alt=""
				/>
			</div>
		</div>
		<div class="body__leftPanelUser__ability selectBox">
			<p>Charge</p>
			<div
				class="body__leftPanelUser__ability--abilityUpgrade"
			>
				<img
					:src="
						require(`@/assets/img/charge/${
							this.$store.state.classes[
								this.$store.state.class
							].chargeImg
						}`)
					"
					alt=""
				/>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'leftBar',
	computed: {},
	methods: {
		openClass() {
			this.$store.commit('openClass');
		},
		openPower() {
			this.$store.commit('openPower');
		},
	},
};
</script>

<style scoped></style>
