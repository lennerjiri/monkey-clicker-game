<template>
	<div class="body__classMenu__background">
		<div
			class="classMenu__background__contentContainer"
		>
			<div
				@click="closeClassMenu"
				class="contentContainer__close"
			>
				<font-awesome-icon
					icon="fa-solid fa-xmark"
				/>
			</div>
			<h1>CLASS</h1>
			<div
				class="contentContainer__maxLevel"
				v-if="this.$store.state.class === 5"
			>
				MAX LEVEL
			</div>
			<div
				v-if="!(this.$store.state.class === 5)"
				class="contentContainer__upgradeButton"
				:class="{
					contentContainer__upgradeButton___unavailable:
						this.$store.state.credit <
						this.$store.state.classes[
							this.$store.state.class + 1
						].price,
				}"
				@click="upgradeClass"
			>
				<div class="upgradeButton__imgAndInfo">
					<img
						:src="
							require(`@/assets/img/class/${
								this.$store.state.classes[
									this.$store.state
										.class + 1
								].img
							}`)
						"
						alt=""
					/>
					<div>
						<h2>
							{{
								this.$store.state.classes[
									this.$store.state
										.class + 1
								].name
							}}
						</h2>
						<p>
							MAX HP:
							{{
								this.$store.state.classes[
									this.$store.state
										.class + 1
								].health
							}}
						</p>
						<p>
							CHARGE TIMER:
							{{
								this.$store.state.classes[
									this.$store.state
										.class + 1
								].chargeBoost
							}}
							s
						</p>
					</div>
				</div>
				<div
					class="upgradeButton__price"
					:class="{
						upgradeButton__price___unavailable:
							this.$store.state.credit <
							this.$store.state.classes[
								this.$store.state.class + 1
							].price,
					}"
				>
					{{
						this.$store.state.classes[
							this.$store.state.class + 1
						].price
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
		closeClassMenu() {
			this.$store.commit('closeClass');
		},
		upgradeClass() {
			this.$store.dispatch('upgradeClass');
		},
	},
};
</script>
