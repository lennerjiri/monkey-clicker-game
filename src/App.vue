<template>
	<div id="app">
		<!--Background image-->
		<background />
		<!--Nav-->
		<navigation />
		<!-- Left health bar of the bloon -->
		<leftHealth />
		<!-- Right health bar of the player -->
		<rightHealth />
		<!--LeftPanel => User Upgrades-->
		<leftBar
			@togglePanel="
				panelName => togglePanel(panelName)
			"
		/>
		<!--RightPanel => Buildings and automations-->
		<rightBar
			@togglePanel="
				panelName => togglePanel(panelName)
			"
		/>

		<!--Characters clickable-->
		<clickerObj />
	</div>
</template>

<script>
// @ is an alias to /src
import leftBar from '@/components/leftBar.vue';
import rightBar from '@/components/rightBar.vue';
import navigation from '@/components/navigation.vue';
import clickerObj from '@/components/clickerObj.vue';
import background from '@/components/background.vue';
import leftHealth from '@/components/leftHealth.vue';
import rightHealth from '@/components/rightHealth.vue';

import data from './assets/data/bloonsTest.json';

export default {
	name: 'App',
	components: {
		leftBar,
		rightBar,
		navigation,
		clickerObj,
		background,
		leftHealth,
		rightHealth,
	},
	// Toggle Side Bars
	methods: {
		togglePanel(panelName) {
			if (this.$store.state[panelName] === true) {
				this.$store.commit('closePanel', panelName);
			} else {
				this.$store.commit('openPanel', panelName);
			}
		},
		// time
		timeTick1x() {
			if (this.$store.state.timeSpeed === 1) {
				this.$store.dispatch('timeTick');
			}
		},
		timeTick2x() {
			if (this.$store.state.timeSpeed === 2) {
				this.$store.dispatch('timeTick');
			}
		},
		timeTick3x() {
			if (this.$store.state.timeSpeed === 3) {
				this.$store.dispatch('timeTick');
			}
		},
	},
	created() {
		this.$store.commit('setupData', data);
		console.log(data);
	},
	mounted() {
		setInterval(this.timeTick1x, 1000);
		setInterval(this.timeTick2x, 500);
		setInterval(this.timeTick3x, 250);
	},
};
</script>
