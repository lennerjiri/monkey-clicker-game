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
				<p>
					{{
						this.$store.state.classes[
							this.$store.state.class
						].name
					}}
				</p>
				<p v-if="!this.$store.state.charge">
					{{ demage }} - DM
				</p>
				<p v-if="this.$store.state.charge">
					{{
						demage *
						this.$store.state.classes[
							this.$store.state.class
						].chargeBoost
					}}
					- DM
				</p>
			</div>
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
</template>

<script>
export default {
	name: 'rightHealth',
	computed: {
		playerHp() {
			return this.$store.state.playerHp;
		},

		playerMaxHp() {
			return this.$store.state.classes[
				this.$store.state.class
			].health;
		},

		demage() {
			return this.$store.state.demage;
		},

		playerHpPercentage() {
			//calculate percentage of health right

			return (
				100 -
				(this.$store.state.playerHp * 100) /
					this.$store.state.classes[
						this.$store.state.class
					].health
			);
		},
	},
};
</script>
