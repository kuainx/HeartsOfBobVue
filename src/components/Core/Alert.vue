<template>
<div>
	<mdb-modal :show="show" @close="hide" removeBackdrop centered danger>
		<mdb-modal-header>
			<p class="heading">
				<strong>{{title}}</strong>
			</p>
		</mdb-modal-header>
		<mdb-modal-body>
			<mdb-row>
				<mdb-col col="3">
					<mdb-icon :icon="icon" size="4x" />
				</mdb-col>
				<mdb-col col="9">
					<p>
						{{content}}
					</p>
				</mdb-col>
			</mdb-row>
		</mdb-modal-body>
		<mdb-modal-footer center>
			<mdb-btn outline="danger" @click="noFunc" darkWaves>{{noText}}</mdb-btn>
			<mdb-btn color="danger" @click="yesFunc">{{yesText}}</mdb-btn>
		</mdb-modal-footer>
	</mdb-modal>
</div>
</template>
<script>
export default {
	name: "AlertM",
	data: () => ({
		show: false,
		title: '警告',
		content: '确认？',
		noText: '否',
		yesText: '是',
		icon: 'times'
	}),
	methods: {
		hide() {
			this.show = false;
			setTimeout(() => {
				document.body.removeChild(this.$el);
				this.$destroy();
			}, 1000);
		},
		noFunc() {
			this.noDo();
			this.hide();
		},
		yesFunc() {
			console.log(this)
			this.yesDo();
			// this.hide();
		},
		noDo() {},
		yesDo() {}
	}
}
</script>
<style lang="scss" scoped>
</style>
