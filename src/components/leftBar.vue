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
			>
				<img
					src="@/assets/img/weapons/arrow.png"
					alt=""
				/>
			</div>
		</div>
		<div class="body__leftPanelUser__class selectBox">
			<p>Class</p>
			<div
				class="body__leftPanelUser__class--classSelect"
			>
				<img
					src="@/assets/img/class/01.png"
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
					src="@/assets/img/mobility/PatFustyPortrait.png"
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
					src="@/assets/img/charge/power.png"
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
	methods: {},
};
</script>

<style scoped></style>
