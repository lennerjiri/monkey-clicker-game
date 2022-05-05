import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// presistance
const vuexLocal = new VuexPersistence({
	key: 'monkClicker',
	storage: window.localStorage,
	reducer: state => ({
		// game info
		round: state.round,
		serial: state.serial,
		bloonHp: state.bloonHp,
		inifinityMode: state.inifinityMode,

		timeStamp: state.timeStamp,
		playerHp: state.playerHp,

		cash: state.cash,

		// time
		seconds: state.seconds,
		minutes: state.minutes,
		hours: state.hours,
		days: state.days,

		timeSpeed: state.timeSpeed,
		pause: state.pause,

		// scores
		scores: state.scores,
		infinityMode: state.infinityMode,
		infinityModeMultiplier:
			state.infinityModeMultiplier,

		victory: state.victory,
		victoryData: state.victoryData,
		manual: state.manual,
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
		bloonHp: 3,

		timeStamp: '',
		playerHp: 200,
		playerMaxHp: 200,

		cash: 0,

		// bloon control
		destroyed: false,

		// scoring system
		infinityMode: false,
		infinityModeMultiplier: 1,

		victory: false,
		manual: false,

		audioPlaying: false,

		scores: [],
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
			if (state.infinityMode) {
				state.bloonHp =
					state.bloonsRounds[state.round].hp *
					state.infinityModeMultiplier;
			} else {
				state.bloonHp =
					state.bloonsRounds[state.round].hp;
			}
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

		randomRound(state) {
			state.round = Math.floor(
				Math.random() * state.bloonsRounds.length
			);
			state.infinityModeMultiplier *= 10;
		},

		// bloon controls
		bloonDestroyed(state) {
			state.destroyed = true;
		},
		bloonRecharge(state) {
			state.destroyed = false;
		},
		enableInfinity(state) {
			state.infinityMode = true;
		},
		disableInfinity(state) {
			state.infinityMode = false;
		},

		openVictory(state) {
			state.victory = true;
			state.pause = true;
		},
		closeVictory(state) {
			state.victory = false;
			state.pause = false;
		},
		openManual(state) {
			state.manual = true;
			state.pause = true;
		},
		closeManual(state) {
			state.manual = false;
			state.pause = false;
		},

		addScore(state) {
			state.scores.push(
				`${state.days}:${state.hours}:${state.minutes}:${state.seconds}`
			);
		},
		restart(state) {
			// restart
			// time
			state.seconds = 0;
			state.minutes = 0;
			state.hours = 0;
			state.days = 0;

			// system
			state.round = 0;
			state.serial = 1;
			state.bloonHp = 3;

			state.infinityMode = false;
			state.infinityModeMultiplier = 1;

			state.destroyed = false;

			// close victory
			state.victory = false;
			state.pause = false;
		},

		// audio
		playAudio(state) {
			state.audioPlaying = true;
		},

		stopAudio(state) {
			state.audioPlaying = false;
		},
	},
	actions: {
		// time
		timeTick(context) {
			// time
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

			context.commit('bloonRecharge');
			// //  bloon
			// if (!context.state.victory) {
			// }
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
						context.state.round + 2 >
						context.state.bloonsRounds.length
					) {
						// if the player enabled infinity mode
						if (context.state.infinityMode) {
							// vyhodí random balon s 10000x lepšíma statama
							context.commit('randomRound');
							context.commit('updateSerial');
							context.commit('updateBloonHp');
						} else {
							// stop the time
							context.commit('addScore');
							context.commit('openVictory');

							// programm the the buttons to trigger actions below here
						}
					} else {
						// next round
						if (!context.state.infinityMode) {
							context.commit('nextRound');
						} else {
							context.commit('randomRound');
						}
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

		enableInfinity(context) {
			context.commit('enableInfinity');

			context.commit('randomRound');
			context.commit('updateSerial');
			context.commit('updateBloonHp');

			context.commit('closeVictory');
		},
	},
	modules: {},
});
