<template>
<div>
	<mdb-modal class="sideBarModal" size="lg" side position="left" fullHeight direction="left" :show="$root.runData.sideBar" @close="$root.runData.sideBar = false" removeBackdrop scrollable>
		<mdb-modal-header>
			<mdb-modal-title>管理</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<mdb-container>
				<mdb-row>
					<mdb-col col="4" style="text-align:center;">
						<img src="http://temp.im/150x200" alt="">
						<h4 class="leaderName">Leader.name</h4>
					</mdb-col>
					<mdb-col col="8">
						<mdb-row>
							<mdb-btn-group style="width:100%;max-height:106px;">
								<mdb-btn darkWaves outline="primary" style="padding: 0;max-width:94px;"><img src="http://temp.im/90x90" alt="" width="90" height="90" /></mdb-btn>
								<mdb-btn color="primary" style="font-size: large;letter-spacing: 0.4em;" @click="$root.runData.focus = true">整风运动</mdb-btn>
							</mdb-btn-group>
						</mdb-row>
						<mdb-row>
							<mdb-card class="card-body" style="padding: 4px;margin: 2px;width: 100%;">
								<mdb-card-title style="margin:0 6px;">
									<mdb-badge color="primary" style="letter-spacing: 0.25em;font-size: medium;">班级精神</mdb-badge>
								</mdb-card-title>
								<mdb-card-text>
									<mdb-btn outline="primary" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
									<mdb-btn outline="primary" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
								</mdb-card-text>
							</mdb-card>
						</mdb-row>
					</mdb-col>
				</mdb-row>
				<mdb-row>
					<mdb-col coll="6">
						<mdb-btn-group style="width:100%;max-height:86px;">
							<mdb-btn darkWaves outline="primary" style="padding: 0;max-width:74px;"><img src="http://temp.im/70x70" alt="" width="70" height="70" /></mdb-btn>
							<mdb-btn color="primary" style="font-size: medium;letter-spacing: 0.2em;">文科主义<br />无选举</mdb-btn>
						</mdb-btn-group>
					</mdb-col>
					<mdb-col col="2" style="padding:0;">
						<PartyPie :dat="partyPercent"></PartyPie>
					</mdb-col>
					<mdb-col col="4">
						<mdb-list-group>
							<mdb-popover v-for="(item,index) in partyRender" :key="item.key" trigger="hover" :options="{placement: 'right'}">
								<span slot="header">{{item.name}}支持率变化</span>
								<span slot="body">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
								<mdb-list-group-item class="partyItem" slot="reference" :class="[partyActive === index ? 'p-active' : '']" :action="true" tag="a">{{item.name}}
									<mdb-badge :color="item.color" pill>{{Math.round(partyPercent[index]/100)}}</mdb-badge>
								</mdb-list-group-item>
							</mdb-popover>
						</mdb-list-group>
					</mdb-col>
				</mdb-row>
				<mdb-row style="margin: 15px 5px;">
					<mdb-card class="iconCard">
						<mdb-card-header class="iconCardHead" color="primary-color">政策和班委</mdb-card-header>
						<mdb-card-body class="iconCardBody">
							<mdb-card-text>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
							</mdb-card-text>
						</mdb-card-body>
					</mdb-card>
					<mdb-card class="iconCard">
						<mdb-card-header class="iconCardHead" color="primary-color">课代表</mdb-card-header>
						<mdb-card-body class="iconCardBody">
							<mdb-card-text>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
							</mdb-card-text>
						</mdb-card-body>
					</mdb-card>
					<mdb-card class="iconCard">
						<mdb-card-header class="iconCardHead" color="primary-color">学习和资料</mdb-card-header>
						<mdb-card-body class="iconCardBody">
							<mdb-card-text>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
								<mdb-btn class="iconBtn" outline="primary" darkWaves rounded><img src="http://temp.im/60x60" alt="" width="60" height="60" /></mdb-btn>
							</mdb-card-text>
						</mdb-card-body>
					</mdb-card>
				</mdb-row>
			</mdb-container>
		</mdb-modal-body>
	</mdb-modal>
	<Focus></Focus>
</div>
</template>
<script>
import PartyPie from './SideBar/PartyPie.vue';
import Focus from './SideBar/Focus.vue'
export default {
	name: "SideBar",
	data: () => ({
		partyPercent: [6000, 3000, 301, 699],
		partyActive: 0,
		partyRender: [{
			name: '文科主义',
			color: 'primary'
		}, {
			name: '理科主义',
			color: 'danger'
		}, {
			name: '中立主义',
			color: 'warning'
		}, {
			name: '自由主义',
			color: 'success'
		}]
	}),
	components: {
		PartyPie,
		Focus
	}
}
</script>
<style scoped>
.leaderName {
	text-align: center;
}

.partyItem {
	height: 21.5px;
	padding: 0 15px;
	font-size: small;
}

.partyItem.p-active {
	background: linear-gradient(to right, rgba(236, 172, 12, 0.75), rgba(236, 172, 12, 0.25));
}

.iconBtn {
	padding: 0 !important;
}

.iconCard {
	width: 100%;
}

.iconCardHead {
	padding: 5px 10px;
	letter-spacing: 0.25em;
}

.iconCardBody {
	padding: 5px;
}
</style>
<style>
.sideBarModal>.modal-dialog {
	width: 620px !important;
	min-width: 620px !important;
}

.sideBarModal>.modal-dialog>.modal-content {
	max-height: 100%;
}
</style>
