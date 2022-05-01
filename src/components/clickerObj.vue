<template>
	<div class="body__main">
		<div
			class="body__main__bloonContainer"
			@click="runAnimation(), attack()"
		>
			<img
				class="body__main__bloonContainer__bloon"
				src="@/assets/img/bloons/01.png"
				alt=""
				ondragstart="return false;"
			/>
			<img
				:src="explosion ? require(`@/assets/img/animation/boom.gif`) : ``"
				class="body__main__bloonContainer__boom"
				
				alt=""
				ondragstart="return false;"
			/>
		</div>

		<img
			class="body__main__monk"
			src="@/assets/img/monks/01.png"
			@click="runAnimation(), attack()"
			alt=""
			ondragstart="return false;"
		/>
		<img
			src="@/assets/img/weapons/arrow.png"
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
				this.explosion = true;

				// run in few secs
				setTimeout(() => {
					this.explosion = false;
				}, 200);
			}
		},
		restartAnimation() {
			this.runningAnimation = false;
		},

		// Attack
		attack() {
			if (!this.$store.state.pause) {
				this.$store.commit(
					'addCredit',
					this.attackCredit
				);
			}
		},
	},
	computed: {
		attackCredit() {
			return this.$store.state.attackCredit;
		},
	},
};
</script>

<style></style>
