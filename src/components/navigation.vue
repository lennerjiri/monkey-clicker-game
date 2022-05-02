<template>
	<nav class="body__controlPanel">
		<div class="body__controlPanel__data">
			<div class="body__controlPanel__data__time">
				<img
					src="@/assets/img/assets/sandClock.png"
					alt=""
				/>
				<p>
					{{ getTime.days }}:{{
						getTime.hours
					}}:{{ getTime.minutes }}:{{
						getTime.seconds
					}}
				</p>
			</div>
			<div class="body__controlPanel__data__lvl">
				<p>LVL</p>
				<p>1</p>
			</div>
			<div class="body__controlPanel__data__cash">
				<img
					src="@/assets/img/assets/money.png"
					alt=""
				/>
				<p>{{ credit }}</p>
			</div>
		</div>
		<div class="body__controlPanel__stage">
			<p class="body__controlPanel__stage--head">
				Round
			</p>
			<p
				class="body__controlPanel__stage--count"
				v-if="!this.$store.state.infinityMode"
			>
				{{ $store.state.round + 1 }}
			</p>
			<p
				class="body__controlPanel__stage--infinityMode"
				v-if="this.$store.state.infinityMode"
			>
				INFINITY
			</p>
		</div>
		<div class="body__controlPanel__pause">
			<div class="body__controlPanel__pause--time">
				<font-awesome-icon
					class="body__controlPanel__pause--backward body__controlPanel__pause--icon"
					icon="fa-solid fa-backward-step"
					@click="chanteTimeSpeed(-1)"
				/>

				<font-awesome-icon
					class="body__controlPanel__pause--pause body__controlPanel__pause--icon"
					@click="pause()"
					icon="fa-solid fa-pause"
					v-if="!this.$store.state.pause"
				/>

				<font-awesome-icon
					class="body__controlPanel__pause--pause body__controlPanel__pause--icon"
					icon="fa-solid fa-play"
					@click="pause()"
					v-if="this.$store.state.pause"
				/>

				<font-awesome-icon
					class="body__controlPanel__pause--forward body__controlPanel__pause--icon"
					icon="fa-solid fa-forward-step"
					@click="chanteTimeSpeed(1)"
				/>
			</div>
			<div class="body__controlPanel__pause--speed">
				{{ getTimeSpeed }} <span>x</span>
			</div>

			<div class="body__controlPanel__pause--restart">
				<font-awesome-icon
					icon="fa-solid fa-arrow-rotate-right"
				/>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'navigation',
	computed: {
		// credit
		credit() {
			return this.$store.state.credit;
		},
		// time
		getTime() {
			const seconds =
				this.$store.state.seconds > 9
					? this.$store.state.seconds
					: `0${this.$store.state.seconds}`;
			const minutes =
				this.$store.state.minutes > 9
					? this.$store.state.minutes
					: `0${this.$store.state.minutes}`;
			const hours =
				this.$store.state.hours > 9
					? this.$store.state.hours
					: `0${this.$store.state.hours}`;
			const days =
				this.$store.state.days > 9
					? this.$store.state.days
					: `0${this.$store.state.days}`;

			return {
				seconds: seconds,
				minutes: minutes,
				hours: hours,
				days: days,
			};
		},
		// time speed
		getTimeSpeed() {
			return this.$store.state.timeSpeed;
		},
	},
	methods: {
		// time
		chanteTimeSpeed(speedChange) {
			this.$store.dispatch(
				'changeTimeSpeed',
				speedChange
			);
		},
		pause() {
			this.$store.dispatch('pause');
		},
	},
};
</script>
