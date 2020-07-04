<template>
<div>
	<mdb-modal class="sideBarModal" size="lg" side position="left" fullHeight direction="left" :show="$root.runData.sideBar" @close="$root.runData.sideBar = false" removeBackdrop>
		<mdb-modal-header>
			<mdb-modal-title>管理</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<mdb-container>
				<mdb-row>
					<mdb-col col="4" style="text-align:center;"><img src="http://temp.im/150x200" alt="">
						<h4 class="leaderName">Leader.name</h4>
					</mdb-col>
					<mdb-col col="8">
						<mdb-row>
							<mdb-btn-group style="width:100%;max-height:106px;">
								<mdb-btn darkWaves outline="primary" style="padding: 0;max-width:94px;"><img src="http://temp.im/90x90" alt="" width="90" height="90" /></mdb-btn>
								<mdb-btn color="primary" style="font-size: large;letter-spacing: 0.4em;">整风运动</mdb-btn>
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
							<mdb-popover trigger="hover" :options="{placement: 'right'}">
								<span slot="header">popover on bottom</span>
								<span slot="body">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
								<mdb-list-group-item slot="reference" :action="true" tag="a">文科主义<mdb-badge color="primary" pill>60</mdb-badge>
								</mdb-list-group-item>
							</mdb-popover>
							<mdb-popover trigger="hover" :options="{placement: 'right'}">
								<span slot="header">popover on bottom</span>
								<span slot="body">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
								<mdb-list-group-item slot="reference" :action="true" tag="a">理科主义<mdb-badge color="danger" pill>30</mdb-badge>
								</mdb-list-group-item>
							</mdb-popover>
							<mdb-popover trigger="hover" :options="{placement: 'right'}">
								<span slot="header">popover on bottom</span>
								<span slot="body">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
								<mdb-list-group-item slot="reference" :action="true" tag="a">中立主义<mdb-badge color="warning" pill>3</mdb-badge>
								</mdb-list-group-item>
							</mdb-popover>
							<mdb-popover trigger="hover" :options="{placement: 'right'}">
								<span slot="header">popover on bottom</span>
								<span slot="body">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
								<mdb-list-group-item slot="reference" :action="true" tag="a">自由主义<mdb-badge color="success" pill>7</mdb-badge>
								</mdb-list-group-item>
							</mdb-popover>
						</mdb-list-group>
					</mdb-col>
				</mdb-row>
			</mdb-container>
		</mdb-modal-body>
	</mdb-modal>
	<a-modal v-model="$root.runData.sideBar" title="管理" :footer="null" :mask="false" :maskClosable="false">
		<div class="container">
			<div class="row">
				<div class="card" style="width: 100%;">
					<div class="card-body" style="padding: 4px;margin: 2px;width: 100%;">
						<div class="badge badge-primary text-wrap card-title" style="margin: 6px;letter-spacing: 0.25em;font-size: medium;">政策和班委</div>
						<div class="card-text">
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="card" style="width: 100%;">
					<div class="card-body" style="padding: 4px;margin: 2px;width: 100%;">
						<div class="badge badge-primary text-wrap card-title" style="margin: 6px;letter-spacing: 0.25em;font-size: medium;">学习和资料</div>
						<div class="card-text">
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="card" style="width: 100%;">
					<div class="card-body" style="padding: 4px;margin: 2px;width: 100%;">
						<div class="badge badge-primary text-wrap card-title" style="margin: 6px;letter-spacing: 0.25em;font-size: medium;">课代表</div>
						<div class="card-text">
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
							<button type="button" class="btn btn-lg btn-rounded btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</a-modal>
</div>
</template>
<script>
import PartyPie from './SideBar/PartyPie.vue';
export default {
	name: "SideBar",
	data: () => ({
		partyPercent: [6000, 3000, 301, 699]
	}),
	components: {
		PartyPie
	}
}
</script>
<style scoped>
.leaderName {
	text-align: center;
}
</style>
<style>
.sideBarModal>.modal-dialog {
	width: 620px !important;
	min-width: 620px !important;
}
</style>
