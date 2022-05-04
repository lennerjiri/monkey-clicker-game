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
				<h2>Basics</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. In quidem doloribus
					nesciunt suscipit facere harum at,
					eligendi, necessitatibus reprehenderit
					dolor alias voluptas amet illum optio
					architecto eaque enim labore quam?
				</p>
				<h2>RULES</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. In quidem doloribus
					nesciunt suscipit facere harum at,
					eligendi, necessitatibus reprehenderit
					dolor alias voluptas amet illum optio
					architecto eaque enim labore quam?
				</p>
				<h2>MONK STUFF</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. In quidem doloribus
					nesciunt suscipit facere harum at,
					eligendi, necessitatibus reprehenderit
					dolor alias voluptas amet illum optio
					architecto eaque enim labore quam?
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
