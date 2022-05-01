import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// panels
		leftPanelOpen: false,
		rightPanelOpen: false,

		// time control
		timeSpeed: 1,
		pause: false,

		// time
		seconds: 0,
		minutes: 0,
		hours: 0,
		days: 0,

		// cash
		credit: 0,

		// attack / income per attack
		attackCredit: 1,
	},
	mutations: {
		// open | close panels
		openPanel(state, panel) {
			state[panel] = true;
		},
		closePanel(state, panel) {
			state[panel] = false;
		},

		// time control
		changeTimeSpeed(state, speedChange) {
			state.timeSpeed += speedChange;
		},

		pause(state, status) {
			state.pause = status;
		},

		// sec
		addSecond(state) {
			state.seconds += 1;
		},
		nullSeconds(state) {
			state.seconds = 0;
		},
		// min
		addMinute(state) {
			state.minutes += 1;
		},
		nullMinutes(state) {
			state.minutes = 0;
		},
		// hour
		addHour(state) {
			state.hours += 1;
		},
		nullHours(state) {
			state.hours = 0;
		},
		// days
		addDay(state) {
			state.days += 1;
		},
		nullDays(state) {
			state.days = 0;
		},

		// credit control
		addCredit(state, amount) {
			state.credit += amount;
		},
	},
	actions: {
		// time
		timeTick(context) {
			if (!context.state.pause) {
				if (context.state.seconds + 1 > 59) {
					context.commit('nullSeconds');

					if (context.state.minutes + 1 === 60) {
						context.commit('nullMinutes');

						if (
							context.state.hours + 1 ===
							24
						) {
							context.commit('nullHours');

							if (
								context.state.days + 1 ===
								360
							) {
								context.commit('nullDays');
							} else {
								context.commit('addDay');
							}
						} else {
							context.commit('addHour');
						}
					} else {
						context.commit('addMinute');
					}
				} else {
					context.commit('addSecond');
				}
			}
		},
		changeTimeSpeed(context, speedChange) {
			if (
				context.state.timeSpeed + speedChange > 3 ||
				context.state.timeSpeed + speedChange < 1
			)
				return;
			context.commit('changeTimeSpeed', speedChange);
		},
		pause(context) {
			if (context.state.pause) {
				context.commit('pause', false);
			} else {
				context.commit('pause', true);
			}
		},
	},
	modules: {},
});
