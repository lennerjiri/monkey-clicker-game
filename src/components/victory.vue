<template>
	<div class="body__victory__background">
		<div class="victory__background__contentContainer">
			<h1>VICTORY</h1>
			<div>
				<p><span>Time:</span> {{ getTime }}</p>
				<p>
					<span>Best Score:</span>
					{{ getBestScore }}
				</p>
			</div>
			<div>
				<div @click="restart">
					<p>Restart</p>
				</div>
				<div @click="infinityMode">
					<p>Infinity mode</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'victory',

	computed: {
		time() {
			return this.$store.state.scores[
				this.$store.state.scores.length - 1
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
			for (const time of this.$store.state.scores) {
				console.log(time);
				if (!score) {
					score = time
						.split(':')
						.map(timeString => {
							return parseInt(timeString);
						});
					console.log('1.');
				} else {
					const formatedTime = time
						.split(':')
						.map(timeString => {
							return parseInt(timeString);
						});

					if (score[0] > formatedTime[0]) {
						score = formatedTime;
						console.log('2.');
						console.log(formatedTime);
					} else {
						if (score[1] > formatedTime[1]) {
							score = formatedTime;
							console.log('3.');
							console.log(formatedTime);
						} else {
							if (
								score[2] > formatedTime[2]
							) {
								score = formatedTime;
								console.log('4.');
								console.log(formatedTime);
							} else {
								if (
									score[3] >
									formatedTime[3]
								) {
									score = formatedTime;
									console.log('5.');
									console.log(
										formatedTime
									);
								} else {
									console.log('end');
									console.log(score[3]);
									console.log(
										formatedTime[3]
									);
									console.log(
										score[3] >
											formatedTime[3]
									);
									continue;
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
