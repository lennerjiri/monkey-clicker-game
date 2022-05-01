<template>
	<div
		class="body__rightBar"
		:class="{
			body__rightBar___open:
				this.$store.state.rightPanelOpen,
		}"
	>
		<div class="body__rightBar__healthBarContainer">
			<p>HP 10</p>
			<div
				class="rightBar__healthBarContainer--health"
			></div>
		</div>
		<div class="body__rightBar__nameContainer">
			<div>
				<p>MONK</p>
				<p>500 / 1000</p>
			</div>
			<img
				:src="require('@/assets/img/monks/01.png')"
				alt=""
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'rightHealth',
	computed: {
		health() {
			// calculate percentage of health right
			return 100;
		},
	},
};
</script>
