<template>
	<div id="app">
		<!-- Game Manual -->
		<manual v-if="this.$store.state.manual" />
		<!-- Victory -->
		<victory v-if="this.$store.state.victory" />
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

		<!-- audio -->
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
import victory from '@/components/victory.vue';
import manual from '@/components/manual.vue';

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
		victory,
		manual,
	},
	data() {
		return {
			audio: {},
		};
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
	},
	mounted() {
		if (this.$store.state.victory) {
			this.$store.commit('openVictory');
		}
		setInterval(this.timeTick1x, 1000);
		setInterval(this.timeTick2x, 500);
		setInterval(this.timeTick3x, 250);
		this.audio = new Audio('/audio/monk.mp3');
	},
	watch: {
		'$store.state.audioPlaying'(playing) {
			if (playing) {
				this.audio.play();
			} else {
				this.audio.pause();
			}
		},
	},
};
</script>
