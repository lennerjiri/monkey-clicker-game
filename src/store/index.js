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

		playerHp: state.playerHp,

		// time
		seconds: state.seconds,
		minutes: state.minutes,
		hours: state.hours,
		days: state.days,

		// afk
		timeStamp: state.timeStamp,

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

		// farms and cash
		credit: state.credit,
		farms: state.farms,

		farm1: state.farm1,
		farm2: state.farm2,
		farm3: state.farm3,
		farm4: state.farm4,
		farm5: state.farm5,

		currentFarm: state.currentFarm,
		currentFarmLvl: state.currentFarmLvl,

		openFarm: state.openFarm,

		// class
		class: state.class,
		openClass: state.openClass,

		// power
		openPower: state.openPower,
		demage: state.demage,
		demagePrice: state.demagePrice,

		// health
		openHealth: state.openHealth,
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

		// afk
		timeStamp: '',

		// cash
		credit: 10000,

		// round system
		bloonsRounds: [],
		farmLevels: [],
		classes: [],

		// saved in vuex
		round: 0,
		serial: 1,
		bloonHp: 3,

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

		// demage timers
		hpRegularDemageTimer: 5,
		hpBloonDemageTimer: 5,

		// farming
		farms: [0, 0, 0, 0, 0],
		// inididual farms - reactive issues
		farm1: 0,
		farm2: 0,
		farm3: 0,
		farm4: 0,
		farm5: 0,
		openFarm: false,

		currentFarm: 0,
		currentFarmLvl: 0,

		// class
		class: 0,
		openClass: false,

		// demage
		demage: 1,
		demagePrice: 100,
		openPower: false,

		// health
		openHealth: false,
	},

	mutations: {
		// farms
		farm1(state) {
			state.farm1 += 0;
		},
		farm2(state) {
			state.farm1 += 0;
		},
		farm3(state) {
			state.farm1 += 0;
		},
		farm4(state) {
			state.farm1 += 0;
		},
		farm5(state) {
			state.farm1 += 0;
		},
		openFarm(state, farmIndex) {
			state.openFarm = true;
			state.currentFarm = farmIndex;
			state.currentFarmLvl = state.farms[farmIndex];
			state.pause = true;
		},
		closeFarm(state) {
			state.openFarm = false;
			state.pause = false;
		},
		openClass(state) {
			state.openClass = true;
			state.pause = true;
		},
		closeClass(state) {
			state.openClass = false;
			state.pause = false;
		},
		upgradeFarm(state, farmIndex) {
			state.farms[farmIndex] += 1;
			state[`farm${farmIndex + 1}`] += 1;
		},
		upgradeCurrentFarmLevel(state) {
			state.currentFarmLvl += 1;
		},
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
		removeCredit(state, amount) {
			state.credit -= amount;
		},
		setupBloonData(state, bloonsRounds) {
			state.bloonsRounds = bloonsRounds;
		},
		setupFarmData(state, farmLevels) {
			state.farmLevels = farmLevels;
		},
		setupClassData(state, classes) {
			state.classes = classes;
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
		openPower(state) {
			state.openPower = true;
			state.pause = true;
		},
		closePower(state) {
			state.openPower = false;
			state.pause = false;
		},
		openHealth(state) {
			state.openHealth = true;
			state.pause = true;
		},
		closeHealth(state) {
			state.openHealth = false;
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

			// money
			state.credit = 10000;

			// farms
			state.farms = [0, 0, 0, 0, 0];
			// inididual farms - reactive issues
			state.farm1 = 0;
			state.farm2 = 0;
			state.farm3 = 0;
			state.farm4 = 0;
			state.farm5 = 0;
			state.openFarm = false;

			state.currentFarm = 0;
			state.currentFarmLvl = 0;

			// class
			state.class = 0;

			// power
			state.demage = 1;
			state.demagePrice = 100;
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

		// afk time controll
		createTimeStamp(state) {
			state.timeStamp = Date.now();
		},
		addAfkScore(state) {
			let seconds = Math.floor(
				(Date.now() - state.timeStamp) / 1000
			);
			const overAllSeconds = seconds;

			/// add time to the timer
			// days
			let days = 0;
			if (seconds / 86400 >= 1) {
				days = Math.floor(seconds / 86400);
				seconds -= 86400 * days;
			}

			// hours
			let hours = 0;
			if (seconds / 3600 >= 1) {
				hours = Math.floor(seconds / 3600);
				seconds -= 3600 * hours;
			}

			// minutes
			let minutes = 0;
			if (seconds / 60 >= 1) {
				minutes = Math.floor(seconds / 60);
				seconds -= 60 * minutes;
			}

			/// remove hp
			if (!state.pause) {
				// once per  hours
				if (hours >= 1) {
					state.playerHp -=
						hours *
						state.bloonsRounds[state.round]
							.demage;
				}
				// once per 1 min add cash
				let credit = 0;
				for (const farm of state.farms) {
					console.log(!(farm - 1 < 0));
					if (!(farm - 1 < 0)) {
						credit =
							credit +
							Number(
								state.farmLevels[farm - 1]
									.production
							) *
								Math.floor(
									overAllSeconds / 60
								);
					}
				}
				state.credit += credit;
			}
		},
		// health
		fullHeal(state) {
			state.playerHp =
				state.classes[state.class].health;
		},
		halfHeal(state) {
			state.playerHp +=
				state.classes[state.class].health / 2;
		},
		quarterHeal(state) {
			state.playerHp +=
				state.classes[state.class].health / 4;
		},

		// class
		upgradeClass(state) {
			state.class += 1;
		},
		// demage
		increaseDemagePrice(state) {
			state.demagePrice = state.demagePrice * 2;
		},
		upgradeDemage(state) {
			state.demage = state.demage * 2;
		},
	},
	actions: {
		// health
		heal(context, amount) {
			if (
				context.state.credit >=
				context.state.classes[context.state.class]
					.health *
					amount
			) {
				context.commit(
					'removeCredit',
					context.state.classes[
						context.state.class
					].health * amount
				);

				if (amount == 100) {
					context.commit('fullHeal');
				} else if (amount == 50) {
					context.commit('halfHeal');
				} else {
					context.commit('quarterHeal');
				}
			}
		},

		// upgrade Demage

		upgradeDemage(context) {
			if (
				context.state.credit >=
				context.state.demagePrice
			) {
				context.commit(
					'removeCredit',
					context.state.demagePrice
				);
				context.commit('increaseDemagePrice');
				context.commit('upgradeDemage');
			}
		},

		// FARMS
		upgradeFarm(context) {
			// check credit

			if (
				context.state.credit >=
				context.state.farmLevels[
					context.state.currentFarmLvl
				].price
			) {
				context.commit(
					'removeCredit',
					context.state.farmLevels[
						context.state.currentFarmLvl
					].price
				);
				context.commit('upgradeCurrentFarmLevel');
				context.commit(
					'upgradeFarm',
					context.state.currentFarm
				);
			}
		},
		upgradeClass(context) {
			if (
				context.state.credit >=
				context.state.classes[
					context.state.class + 1
				].price
			) {
				context.commit(
					'removeCredit',
					context.state.classes[
						context.state.class + 1
					].price
				);
				context.commit('upgradeClass');
				context.commit('fullHeal');
			}
		},

		// time
		timeTick(context) {
			/// time
			if (!context.state.pause) {
				/// money
				for (const farm of context.state.farms) {
					if (!(farm - 1 < 0)) {
						context.commit(
							'addCredit',
							Number(
								context.state.farmLevels[
									farm - 1
								].production
							)
						);
					}
				}
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
			const demage = context.state.demage;
			context.commit('reduceBloonHp', demage);

			// demage timer reset for 5 sec
			context.commit('resetHpRegularDemageTimer');

			if (context.state.bloonHp <= 0) {
				// reset demage timer
				context.commit('resethpBloonDemageTimer');
				// add cash for destroyed bloon
				context.commit(
					'addCredit',
					context.state.bloonsRounds[
						context.state.round
					].reward
				);
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
