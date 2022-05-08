<template>
	<div class="body__manual__background">
		<div class="manual__background__contentContainer">
			<div
				@click="closeManual"
				class="contentContainer__close"
			>
				<font-awesome-icon
					icon="fa-solid fa-xmark"
				/>
			</div>
			<h1>MANUAL</h1>
			<div>
				<h2>BASICS</h2>
				<p>
					Welcome to this epic and strategic
					clicker game. As you probably noticed
					this i not one of your oridinary clicker
					games. The goal of this game is clear
					all rounds as quickly as possible. After
					defeating the final bloon the victory
					menu will be shown with your time score.
				</p>
				<h2>RULES</h2>
				<p>
					This game is completely build on timers.
					If the game is open and you dont click
					for longer than 5 seconds you get
					demage. If you are destroying a
					particular bloon longer than 5 seconds
					you get demage. Every bloon deals
					different amount of demage. With every
					new bloon the demage it deals will
					doble. On the other hand, with every new
					bloon the amount of cash you receive
					after killing the bloon will increase
				</p>
				<h2>MONK UPGRADES</h2>
				<p>
					As you probably noticed you are allowed
					to purhcase upgrade to adapt to the
					constantly increseing game difficulty.
					The amount of upgrades you are allowd to
					purchase is defined by your class. So if
					you cant upgrade demage anymore you need
					to upgrade your class. Charge is
					specific to every class and it allows
					you to deal x times more demage for a
					period of time. Lastly, health allows
					you to purchase potions to heal monk.
				</p>
				<h2>AFK</h2>
				<p>
					This game allows you to farm afk,
					however be aware that after every 3
					hours of being afk you will get a full
					bloon demage. If you click on pause
					before shutting down the window you wont
					receive any demage but you will also not
					receive any cash from your farms
				</p>
				<H2>BLOONS TD BATTLES</H2>
				<p>
					This game is heavili insipired by the
					popular bloons td battles series. All
					asets are taken from:
					<a
						href="https://bloons.fandom.com/wiki/Bloons_Wiki"
						>Bloons td wiki</a
					>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'manual',
	computed: {},
	methods: {
		closeManual() {
			this.$store.commit('closeManual');
		},
	},
};
</script>
