<template>
	<div class="body__defeat__background">
		<div class="defeat__background__contentContainer">
			<h1>DEATH !</h1>

			<div v-if="this.$store.state.infinityMode">
				<p>
					<span>Infinity Time:</span>
					{{ getTime }}
				</p>
				<p>
					<span>Best Infinity Score:</span>
					{{ getBestScore }}
				</p>
			</div>

			<div>
				<div @click="restart">
					<p>Restart</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'defeat',

	computed: {
		time() {
			return this.$store.state.infinityScores[
				this.$store.state.infinityScores.length - 1
			].split(':');
		},
		getTime() {
			const seconds =
				this.time[3] > 9
					? this.time[3]
					: `0${this.time[3]}`;
			const minutes =
				this.time[2] > 9
					? this.time[2]
					: `0${this.time[2]}`;
			const hours =
				this.time[1] > 9
					? this.time[1]
					: `0${this.time[1]}`;
			const days =
				this.time[0] > 9
					? this.time[0]
					: `0${this.time[0]}`;

			return `${days}:${hours}:${minutes}:${seconds}`;
		},
		bestScore() {
			let score;
			for (const time of this.$store.state
				.infinityScores) {
				if (!score) {
					score = time
						.split(':')
						.map(timeString => {
							return parseInt(timeString);
						});
				} else {
					const formatedTime = time
						.split(':')
						.map(timeString => {
							return parseInt(timeString);
						});

					if (score[0] < formatedTime[0]) {
						score = formatedTime;
					} else if (
						score[0] === formatedTime[0]
					) {
						if (score[1] < formatedTime[1]) {
							score = formatedTime;
						} else if (
							score[1] === formatedTime[1]
						) {
							if (
								score[2] < formatedTime[2]
							) {
								score = formatedTime;
							} else if (
								score[2] === formatedTime[2]
							) {
								if (
									score[3] <
									formatedTime[3]
								) {
									score = formatedTime;
								}
							}
						}
					}
				}
			}

			return score;
		},
		getBestScore() {
			const seconds =
				this.bestScore[3] > 9
					? this.bestScore[3]
					: `0${this.bestScore[3]}`;
			const minutes =
				this.bestScore[2] > 9
					? this.bestScore[2]
					: `0${this.bestScore[2]}`;
			const hours =
				this.bestScore[1] > 9
					? this.bestScore[1]
					: `0${this.bestScore[1]}`;
			const days =
				this.bestScore[0] > 9
					? this.bestScore[0]
					: `0${this.bestScore[0]}`;

			return `${days}:${hours}:${minutes}:${seconds}`;
		},
	},

	methods: {
		restart() {
			this.$store.commit('restart');
		},
		infinityMode() {
			this.$store.dispatch('enableInfinity');
		},
	},
};
</script>
