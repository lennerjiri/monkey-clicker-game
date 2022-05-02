<template>
	<div class="body__victory__background">
		<div class="victory__background__contentContainer">
			<h1>VICTORY</h1>
			<div>
				<p>Time: {{ time }}</p>
				<p>Best score: {{ bestScore }}</p>
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
	props: {
		time: String,
	},
	computed: {
		bestScore() {
			return;
		},
	},
	methods: {
		restart() {
			this.$store.commit('restart');
		},
		infinityMode() {
			this.$store.commit('restart');
		},
	},
};
</script>
