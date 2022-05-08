<template>
	<div class="body__farmMenu__background">
		<div class="farmMenu__background__contentContainer">
			<div
				@click="closefarmMenu"
				class="contentContainer__close"
			>
				<font-awesome-icon
					icon="fa-solid fa-xmark"
				/>
			</div>
			<h1>FARM 1</h1>
			<div
				class="contentContainer__upgradeButton"
				:class="{
					contentContainer__upgradeButton___unavailable:
						this.$store.state.credit < 100,
				}"
			>
				<div class="upgradeButton__imgAndInfo">
					<img
						src="@/assets/img/farms/01.webp"
						alt=""
					/>
					<div>
						<h2>Increased production</h2>
						<p>1 <span>$</span> / s</p>
					</div>
				</div>
				<div
					class="upgradeButton__price"
					:class="{
						upgradeButton__price___unavailable:
							this.$store.state.credit < 100,
					}"
				>
					100$
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'farmMenu',
	computed: {},
	methods: {
		closefarmMenu() {
			this.$store.commit('closefarmMenu');
		},
	},
};
</script>
