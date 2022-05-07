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
		infinityScores: state.infinityScores,
		infinityMode: state.infinityMode,
		infinityModeMultiplier:
			state.infinityModeMultiplier,

		victory: state.victory,
		defeat: state.defeat,

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

		cash: 0,

		// bloon control
		destroyed: false,

		// scoring system
		infinityMode: false,
		infinityModeMultiplier: 1,

		victory: false,
		defeat: false,
		manual: false,

		audioPlaying: false,

		scores: [],
		infinityScores: [],

		// player control
		playerHp: 10,
		playerMaxHp: 10,

		// demage timers
		hpRegularDemageTimer: 5,
		hpBloonDemageTimer: 5,
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
			if (state.bloonHp - amount < 0) {
				state.bloonHp = 0;
			} else {
				state.bloonHp -= amount;
			}
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
		openDefeat(state) {
			state.defeat = true;
			state.pause = true;
		},
		closeDefeat(state) {
			state.defeat = false;
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
		addInfinityScore(state) {
			state.infinityScores.push(
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
			state.defeat = false;
			state.pause = false;

			// player hp
			state.playerHp = 10;
		},

		// audio
		playAudio(state) {
			state.audioPlaying = true;
		},

		stopAudio(state) {
			state.audioPlaying = false;
		},

		// player hp
		reducePlayerHp(state, demage) {
			if (state.playerHp - demage < 0) {
				state.playerHp = 0;
			} else {
				state.playerHp -= demage;
			}
		},
		resetPlayerHp(state) {
			state.playerHp = 10;
		},

		// demage timers
		changeHpRegularDemageTimer(state) {
			state.hpRegularDemageTimer -= 1;
		},
		resetHpRegularDemageTimer(state) {
			state.hpRegularDemageTimer = 5;
		},
		changehpBloonDemageTimer(state) {
			state.hpBloonDemageTimer -= 1;
		},
		resethpBloonDemageTimer(state) {
			state.hpBloonDemageTimer = 5;
		},
	},
	actions: {
		// time
		timeTick(context) {
			/// time
			if (!context.state.pause) {
				/// health
				// regular
				if (
					context.state.hpRegularDemageTimer === 0
				) {
					context.commit(
						'reducePlayerHp',
						context.state.bloonsRounds[
							context.state.round
						].demage
					);
					context.commit(
						'resetHpRegularDemageTimer'
					);
				} else {
					context.commit(
						'changeHpRegularDemageTimer'
					);
				}

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
				if (context.state.playerHp <= 0) {
					if (context.state.infinityMode) {
						context.commit('addInfinityScore');
					}
					context.commit('openDefeat');
				}

				// bloon
				if (
					context.state.hpBloonDemageTimer === 0
				) {
					context.commit(
						'reducePlayerHp',
						context.state.bloonsRounds[
							context.state.round
						].demage
					);
					context.commit(
						'resethpBloonDemageTimer'
					);
				} else {
					context.commit(
						'changehpBloonDemageTimer'
					);
				}
			}

			context.commit('bloonRecharge');
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

			// demage timer reset for 5 sec
			context.commit('resetHpRegularDemageTimer');

			if (context.state.bloonHp <= 0) {
				// reset demage timer
				context.commit('resethpBloonDemageTimer');
				// series
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
