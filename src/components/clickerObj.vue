<template>
	<div class="body__main">
		<div
			class="body__main__bloonContainer"
			@click="click(), runAnimation()"
		>
			<img
				class="body__main__bloonContainer__bloon"
				:src="
					require(`@/assets/img/bloons/${
						this.$store.state.bloonsRounds[
							this.$store.state.round
						].img
					}`)
				"
				v-if="!this.$store.state.victory"
				alt=""
				ondragstart="return false;"
				:class="{
					bloon___visibility:
						this.$store.state.destroyed,
				}"
			/>
			<img
				:src="
					explosion
						? require(`@/assets/img/animation/boom.gif`)
						: ``
				"
				class="body__main__bloonContainer__boom"
				alt=""
				ondragstart="return false;"
			/>
		</div>

		<img
			class="body__main__monk"
			:src="
				require(`@/assets/img/class/${
					this.$store.state.classes[
						this.$store.state.class
					].img
				}`)
			"
			@click="click(), runAnimation()"
			alt=""
			ondragstart="return false;"
		/>
		<img
			src="@/assets/img/assets/arrow.png"
			class="body__main__arrow"
			@animationend="restartAnimation()"
			:class="{
				body__main__arrow___animation:
					runningAnimation,
			}"
			alt=""
			ondragstart="return false;"
		/>
	</div>
</template>

<script>
export default {
	name: 'clickerObj',
	data() {
		return {
			runningAnimation: false,
			explosion: false,
		};
	},
	methods: {
		// Animations
		runAnimation() {
			if (!this.$store.state.pause) {
				this.runningAnimation = true;
			}
		},
		restartAnimation() {
			this.runningAnimation = false;
		},

		// Click
		click() {
			if (
				!this.$store.state.pause &&
				!this.$store.state.destroyed
			) {
				if (
					this.$store.state.bloonHp -
						this.$store.state.demage <=
					0
				) {
					this.explosion = true;
					this.$store.commit('bloonDestroyed');

					// run in few secs
					setTimeout(() => {
						this.explosion = false;
					}, 200);
				}
				this.$store.dispatch('click');
			}
		},
	},
	computed: {},
};
</script>

<style></style>
