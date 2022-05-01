<template>
	<div
		class="body__leftBar"
		:class="{
			body__leftBar___open:
				this.$store.state.leftPanelOpen,
		}"
	>
		<div class="body__leftBar__healthBarContainer">
			<p>HP {{ bloonHp }}</p>
			<div
				class="leftBar__healthBarContainer--health"
				:style="`width: ${bloonHpPercentage}%`"
			></div>
		</div>
		<div class="body__leftBar__nameContainer">
			<img
				:src="require('@/assets/img/bloons/01.png')"
				alt=""
			/>
			<div>
				<p>{{ bloonRound.name }}</p>
				<p>
					{{ this.$store.state.serial }} /
					{{ bloonRound.serial }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'leftHealth',
	computed: {
		bloonRound() {
			return this.$store.state.bloonsRounds[
				this.$store.state.round
			];
		},
		bloonHp() {
			return this.$store.state.bloonHp;
		},
		bloonHpPercentage() {
			return (
				100 -
				(this.bloonHp * 100) /
					this.$store.state.bloonsRounds[
						this.$store.state.round
					].hp
			);
			// + calculate percentage of health left
		},
	},
};
</script>
