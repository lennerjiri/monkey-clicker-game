<template>
	<aside
		class="body__rightPanelBuildings"
		:class="{
			body__rightPanelUser___hidden:
				!this.$store.state.rightPanelOpen,
		}"
	>
		<!--Hider-->
		<div
			class="body__rightPanelBuildings__slider"
			@click="$emit('togglePanel', 'rightPanelOpen')"
		>
			<font-awesome-icon
				icon="fa-solid fa-chevron-left"
			/>
		</div>
		<!--Content-->
		<div
			class="body__rightPanelBuildings__build__container"
		>
			<div
				class="body__rightPanelBuildings__build selectBox"
			>
				<p>FARMS</p>
				<farm
					v-for="(farm, index) of this.$store
						.state.farms"
					:key="index"
					:index="index"
					:farm="farm"
				/>
			</div>
		</div>

		<div
			class="body__rightPanelBuildings__build__menus"
		>
			<div
				:class="{
					disabled:
						!this.$store.state.audioPlaying,
				}"
				@click="toggleSound"
			>
				<font-awesome-icon
					icon="fa-solid fa-music"
				/>
			</div>
			<div @click="openManual">
				<font-awesome-icon
					icon="fa-solid fa-info"
				/>
			</div>
		</div>
	</aside>
</template>

<script>
import farm from '@/components/farm.vue';
export default {
	name: 'rightBar',
	methods: {
		openManual() {
			this.$store.commit('openManual');
		},
		toggleSound() {
			if (this.$store.state.audioPlaying) {
				this.$store.commit('stopAudio');
			} else {
				this.$store.commit('playAudio');
			}
		},
	},
	components: {
		farm,
	},
};
</script>

<style scoped></style>
