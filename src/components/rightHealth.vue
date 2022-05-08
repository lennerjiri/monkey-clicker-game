<template>
	<div
		class="body__rightBar"
		:class="{
			body__rightBar___open:
				this.$store.state.rightPanelOpen,
		}"
	>
		<div class="body__rightBar__healthBarContainer">
			<p>{{ playerHp }} / {{ playerMaxHp }} HP</p>
			<div
				class="rightBar__healthBarContainer--health"
				:style="`width: ${playerHpPercentage}%`"
			></div>
		</div>
		<div class="body__rightBar__nameContainer">
			<div>
				<p>MONK</p>
				<p>500 DM</p>
			</div>
			<img
				:src="require('@/assets/img/class/01.png')"
				alt=""
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'rightHealth',
	computed: {
		playerHp() {
			return this.$store.state.playerHp;
		},

		playerMaxHp() {
			return this.$store.state.playerMaxHp;
		},

		playerHpPercentage() {
			//calculate percentage of health right

			return (
				100 -
				(this.$store.state.playerHp * 100) /
					this.$store.state.playerMaxHp
			);
		},
	},
};
</script>
