<template>
	<aside
		class="body__rightPanelBuildings"
		:class="{
			body__rightPanelUser___hidden:
				!this.$store.state.rightPanelOpen,
		}"
	>
		<!--Hider-->
		<div
			class="body__rightPanelBuildings__slider"
			@click="$emit('togglePanel', 'rightPanelOpen')"
		>
			<font-awesome-icon
				icon="fa-solid fa-chevron-left"
			/>
		</div>
		<!--Content-->
		<div
			class="body__rightPanelBuildings__build__container"
		>
			<div
				class="body__rightPanelBuildings__build selectBox"
			>
				<p>Buildings</p>
				<div
					class="body__rightPaneBuilding__build--selectBuilding"
				>
					<img
						src="@/assets/img/building/400-BananaFarm.png"
						alt=""
					/>
				</div>
			</div>
			<div
				class="body__rightPanelBuildings__build selectBox"
			>
				<div
					class="body__rightPaneBuilding__build--selectBuilding"
				>
					<img
						src="@/assets/img/building/100-BananaFarm.png"
						alt=""
					/>
				</div>
			</div>
			<div
				class="body__rightPanelBuildings__build selectBox"
			>
				<div
					class="body__rightPaneBuilding__build--selectBuilding"
				>
					<font-awesome-icon
						icon="fa-solid fa-plus"
					/>
					<!-- <img
						src="@/assets/img/building/pngwing.com.png"
						alt=""
					/> -->
				</div>
			</div>
			<div
				class="body__rightPanelBuildings__build selectBox"
			>
				<div
					class="body__rightPaneBuilding__build--selectBuilding"
				>
					<font-awesome-icon
						icon="fa-solid fa-plus"
					/>
					<!-- <img
						src="@/assets/img/building/pngwing.com.png"
						alt=""
					/> -->
				</div>
			</div>
			<div
				class="body__rightPanelBuildings__build selectBox"
			>
				<div
					class="body__rightPaneBuilding__build--selectBuilding"
				>
					<font-awesome-icon
						icon="fa-solid fa-plus"
					/>
					<!-- <img
						src="@/assets/img/building/pngwing.com.png"
						alt=""
					/> -->
				</div>
			</div>
			<div
				class="body__rightPanelBuildings__build selectBox"
			>
				<div
					class="body__rightPaneBuilding__build--selectBuilding"
				>
					<font-awesome-icon
						icon="fa-solid fa-plus"
					/>
					<!-- <img
						src="@/assets/img/building/pngwing.com.png"
						alt=""
					/> -->
				</div>
			</div>
		</div>

		<!-- <div
			class="body__rightPanelBuildings__build__container"
		>
			<div
				class="body__rightPanelBuildings__tool selectBox"
			>
				<p>Toolkit</p>
				<div
					class="body__rightPanelUser__tool--selectTool"
				>
					<img
						src="@/assets/img/toolkit/SentryPortrait.png"
						alt=""
					/>
				</div>
			</div>
			<div
				class="body__rightPanelBuildings__tool selectBox"
			>
				<div
					class="body__rightPanelUser__tool--selectTool"
				>
					<img
						src="@/assets/img/toolkit/000-MortarMonkey.png"
						alt=""
					/>
				</div>
			</div>
		</div> -->
	</aside>
</template>

<script>
export default {
	name: 'rightBar',
};
</script>

<style scoped></style>
