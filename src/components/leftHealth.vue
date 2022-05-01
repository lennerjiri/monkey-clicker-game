<template>
	<div
		class="body__leftBar"
		:class="{
			body__leftBar___open:
				this.$store.state.leftPanelOpen,
		}"
	>
		<div class="body__leftBar__healthBarContainer">
			<p>HP 10</p>
			<div
				class="leftBar__healthBarContainer--health"
			></div>
		</div>
		<div class="body__leftBar__nameContainer">
			<img
				:src="require('@/assets/img/bloons/01.png')"
				alt=""
			/>
			<div>
				<p>RED</p>
				<p>5 / 10</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'leftHealth',
	computed: {
		health() {
			// calculate percentage of health left
			return 100;
		},
	},
};
</script>
