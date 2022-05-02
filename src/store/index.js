import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// presistance
const vuexLocal = new VuexPersistence({
	key: 'monkClicker',
	storage: window.localStorage,
	reducer: state => ({
		round: state.round,
		serial: state.serial,
		bloonHp: state.bloonHp,

		timeStamp: state.timeStamp,
		playerHp: state.playerHp,

		cash: state.cash,
	}),
});

export default new Vuex.Store({
	plugins: [vuexLocal.plugin],
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

		// round system
		bloonsRounds: [],

		// saved in vuex
		round: 0,
		serial: 1,
		bloonHp: 2,

		timeStamp: '',
		playerHp: 100,

		cash: 0,
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
		setupData(state, bloonsRounds) {
			state.bloonsRounds = bloonsRounds;
		},

		// game system control
		reduceBloonHp(state, amount) {
			state.bloonHp -= amount;
		},

		updateBloonHp(state) {
			state.bloonHp =
				state.bloonsRounds[state.round].hp;
		},

		nextSerial(state) {
			state.serial += 1;
		},

		updateSerial(state) {
			state.serial = 1;
		},

		nextRound(state) {
			state.round += 1;
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
		click(context) {
			const demage = 1;
			context.commit('reduceBloonHp', demage);

			if (context.state.bloonHp <= 0) {
				if (
					context.state.serial + 1 >
					context.state.bloonsRounds[
						context.state.round
					].serial
				) {
					if (
						context.state.round + 1 >
						context.state.bloonsRounds.length
					) {
						// infiniti mode + Victory
					} else {
						// next round
						context.commit('nextRound');
						context.commit('updateSerial');
						context.commit('updateBloonHp');
					}
				} else {
					// load next
					context.commit('nextSerial');
					context.commit('updateBloonHp');
				}
			}
		},
	},
	modules: {},
});
