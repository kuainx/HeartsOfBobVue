<template>
<div>
	<mdb-modal class="sideBarModal" size="lg" side position="left" fullHeight direction="left" :show="$root.runData.sideBar" @close="$root.runData.sideBar = false" removeBackdrop>
		<mdb-modal-header>
			<mdb-modal-title>管理</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<mdb-container>
				<mdb-row>
					<mdb-col col="4"><img src="http://temp.im/150x200" alt="">
						<h4 class="leaderName">Leader.name</h4>
					</mdb-col>
					<mdb-col col="8">
						<mdb-row>
							<div class="btn-group" role="group" style="width:100%;max-height:106px;">
								<a-button type="button" class="btn btn-lg btn-outline-primary waves-effect" style="padding: 0;max-width:94px;"><img src="http://temp.im/90x90" alt="" width="90" height="90" /></a-button>
								<a-button type="button" class="btn btn-lg btn-primary" style="font-size: large;letter-spacing: 0.2em;" data-toggle="modal" data-target="#modalFocus">整风运动</a-button>
							</div>
						</mdb-row>
					</mdb-col>
				</mdb-row>
				<mdb-row>
					<mdb-col>1 of 3</mdb-col>
					<mdb-col col="5">2 of 3 (wider)</mdb-col>
					<mdb-col>3 of 3</mdb-col>
				</mdb-row>
			</mdb-container>
		</mdb-modal-body>

	</mdb-modal>
	<a-modal v-model="$root.runData.sideBar" title="管理" :footer="null" :mask="false" :maskClosable="false">
		<div class="container">

			<!-- <div class="row">
				<div class="col-md-4" style="max-width: 180px;padding-top: 6px;">
					<div class="card">
						<div class="view overlay">
							<img src="http://temp.im/150x200" width="150" height="200" />
						</div>
						<div class="card-body text-center" style="padding: 0;">
							<button type="button" class="btn btn-outline-primary waves-effect card-title" style="padding: 1px 10px;margin: 5px 0;width: 90%;font-size: medium;letter-spacing: 0.1em;">YET</button>
						</div>
					</div>
				</div>
				<div class="col-md-8">
					<div class="row">
						<div class="btn-group" role="group" style="width:100%;max-height:106px;">
							<button type="button" class="btn btn-lg btn-outline-primary waves-effect" style="padding: 0;max-width:94px;"><img src="http://temp.im/90x90" alt="" width="90" height="90" /></button>
							<button type="button" class="btn btn-lg btn-primary" style="font-size: large;letter-spacing: 0.2em;" data-toggle="modal" data-target="#modalFocus">整风运动</button>
						</div>
					</div>
					<div class="row">
						<div class="card" style="width: 100%;">
							<div class="card-body" style="padding: 4px;margin: 2px;width: 100%;">
								<div class="badge badge-primary text-wrap card-title" style="margin: 6px;letter-spacing: 0.25em;font-size: medium;">班级精神</div>
								<div class="card-text">
									<button type="button" class="btn btn-lg btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
									<button type="button" class="btn btn-lg btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
									<button type="button" class="btn btn-lg btn-outline-primary waves-effect" style="padding: 0;"><img src="http://temp.im/60x60" alt="" width="60" height="60" /></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> -->
			<div class="row">
				<div class="col-md-6" style="padding: 0 8px;">
					<div class="btn-group" role="group" style="max-height:86px;width: 100%;">
						<button type="button" class="btn btn-lg btn-outline-primary waves-effect" style="padding: 0;max-width:74px;"><img src="http://temp.im/70x70" alt="" width="70" height="70" /></button>
						<button type="button" class="btn btn-lg btn-primary" style="letter-spacing: 0.2em;">文科主义<br />无选举</button>
					</div>
				</div>
				<div class="col-md-2" style="padding:0;z-index: 100;">
					<canvas id="partySupport" style="height:86px;width:146px;"></canvas>
				</div>
				<div class="col-md-4" style="padding:0">
					<div class="list-group party-group">
						<a class="list-group-item list-group-item-action" role="button" data-toggle="popover" data-partyid="0" data-placement="top" title="理科主义支持率变化" data-content="<div id='partyContainer'></div>">理科主义&emsp;<span
								class="badge badge-primary badge-pill">50</span></a>
						<a class="list-group-item list-group-item-action group-active" role="button" data-toggle="popover" data-partyid="1" data-placement="top" title="文科主义支持率变化" data-content="<div id='partyContainer'></div>">文科主义&emsp;<span
								class="badge badge-danger badge-pill">32</span></a>
						<a class="list-group-item list-group-item-action" role="button" data-toggle="popover" data-partyid="2" data-placement="top" title="体育主义支持率变化" data-content="<div id='partyContainer'></div>">体育主义&emsp;<span
								class="badge badge-warning badge-pill">10</span></a>
						<a class="list-group-item list-group-item-action" role="button" data-toggle="popover" data-partyid="3" data-placement="top" title="综合主义支持率变化" data-content="<div id='partyContainer'></div>">综合主义&emsp;<span
								class="badge badge-success badge-pill">7</span></a>
					</div>
				</div>
			</div>
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
export default {
	name: "SideBar",
	data: () => ({

	})
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
