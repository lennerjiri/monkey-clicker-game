<template>
	<div id="app">
		<!-- healthMenu -->
		<healthMenu v-if="this.$store.state.openHealth" />
		<!-- Power menu -->
		<powerMenu v-if="this.$store.state.openPower" />
		<!-- classMenu -->
		<classMenu v-if="this.$store.state.openClass" />
		<!-- factoryMenu -->
		<farmMenu v-if="this.$store.state.openFarm" />
		<!-- Defeat -->
		<defeat v-if="this.$store.state.defeat" />
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
import defeat from '@/components/defeat.vue';
import farmMenu from '@/components/farmMenu.vue';
import classMenu from '@/components/classMenu.vue';
import powerMenu from '@/components/powerMenu.vue';
import healthMenu from '@/components/healthMenu.vue';

import bloonData from './assets/data/bloons.json';
import farmData from './assets/data/farms.json';
import classData from './assets/data/class.json';

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
		defeat,
		farmMenu,
		classMenu,
		powerMenu,
		healthMenu,
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
		beforePageDestroyed() {
			this.$store.commit('createTimeStamp');
		},
	},
	created() {
		this.$store.commit('setupBloonData', bloonData);
		this.$store.commit('setupFarmData', farmData);
		this.$store.commit('setupClassData', classData);

		window.addEventListener(
			'beforeunload',
			this.beforePageDestroyed
		);
	},
	mounted() {
		if (this.$store.state.victory) {
			this.$store.commit('openVictory');
		}

		if (this.$store.state.defeat) {
			this.$store.commit('openDefeat');
		}

		setInterval(this.timeTick1x, 1000);
		setInterval(this.timeTick2x, 500);
		setInterval(this.timeTick3x, 250);
		this.audio = new Audio('/audio/monk.mp4');

		this.$store.commit('addAfkScore');
	},
	watch: {
		'$store.state.audioPlaying'(playing) {
			if (playing) {
				this.audio.play();
				this.audio.loop = true;
			} else {
				this.audio.pause();
			}
		},
	},
};
</script>
