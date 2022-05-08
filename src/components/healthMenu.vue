<template>
	<div class="body__healthMenu__background">
		<div
			class="healthMenu__background__contentContainer"
		>
			<div
				@click="closeHealthMenu"
				class="contentContainer__close"
			>
				<font-awesome-icon
					icon="fa-solid fa-xmark"
				/>
			</div>
			<h1>HEALTH</h1>
			<!-- 25% -->

			<div
				class="contentContainer__upgradeButton"
				:class="{
					contentContainer__upgradeButton___unavailable:
						this.$store.state.credit <
						(this.$store.state.classes[
							this.$store.state.class
						].health /
							4) *
							100,
				}"
				@click="heal(25)"
			>
				<div class="upgradeButton__imgAndInfo">
					<img
						src="@/assets/img/health/01.png"
						alt=""
					/>
					<div>
						<h2>25% HEAL</h2>
					</div>
				</div>
				<div
					class="upgradeButton__price"
					:class="{
						upgradeButton__price___unavailable:
							this.$store.state.credit <
							(this.$store.state.classes[
								this.$store.state.class
							].health /
								4) *
								100,
					}"
				>
					{{
						(this.$store.state.classes[
							this.$store.state.class
						].health /
							4) *
						100
					}}$
				</div>
			</div>

			<!-- 50% -->
			<div
				class="contentContainer__upgradeButton"
				:class="{
					contentContainer__upgradeButton___unavailable:
						this.$store.state.credit <
						(this.$store.state.classes[
							this.$store.state.class
						].health /
							2) *
							100,
				}"
				@click="heal(50)"
			>
				<div class="upgradeButton__imgAndInfo">
					<img
						src="@/assets/img/health/02.png"
						alt=""
					/>
					<div>
						<h2>50% HEAL</h2>
					</div>
				</div>
				<!-- 100% -->
				<div
					class="upgradeButton__price"
					:class="{
						upgradeButton__price___unavailable:
							this.$store.state.credit <
							(this.$store.state.classes[
								this.$store.state.class
							].health /
								2) *
								100,
					}"
				>
					{{
						(this.$store.state.classes[
							this.$store.state.class
						].health /
							2) *
						100
					}}$
				</div>
			</div>
			<div
				class="contentContainer__upgradeButton"
				:class="{
					contentContainer__upgradeButton___unavailable:
						this.$store.state.credit <
						this.$store.state.classes[
							this.$store.state.class
						].health *
							100,
				}"
				@click="heal(100)"
			>
				<div class="upgradeButton__imgAndInfo">
					<img
						src="@/assets/img/health/03.png"
						alt=""
					/>
					<div>
						<h2>100% HEAL</h2>
					</div>
				</div>
				<div
					class="upgradeButton__price"
					:class="{
						upgradeButton__price___unavailable:
							this.$store.state.credit <
							this.$store.state.classes[
								this.$store.state.class
							].health *
								100,
					}"
				>
					{{
						this.$store.state.classes[
							this.$store.state.class
						].health * 100
					}}$
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'classMenu',
	computed: {},
	methods: {
		closeHealthMenu() {
			this.$store.commit('closeHealth');
		},
		heal(amount) {
			this.$store.dispatch('heal', amount);
		},
	},
};
</script>
