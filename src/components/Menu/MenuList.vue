<template>
<div>
	<mdb-list-group>
		<mdb-btn-group v-for="(item, index) in dataList" :key="index">
			<mdb-btn v-if="thisListKey===index" color="primary" class="listbtn" @click="itemClick(index)">{{item.name}}（{{item.timeText}}）</mdb-btn>
			<mdb-btn v-else outline="primary" darkWaves class="listbtn" @click="itemClick(index)">{{item.name}}（{{item.timeText}}）</mdb-btn>
			<mdb-btn color="danger" class="times listbtn" @click="delClick(index)">
				<mdb-icon icon="times" />
			</mdb-btn>
		</mdb-btn-group>
	</mdb-list-group>
</div>
</template>
<script>
export default {
	name: "",
	model: {
		prop: 'listKey',
		event: 'change'
	},
	props: ['dataList', 'listKey'],
	data: () => ({
		thisListKey: -1
	}),
	methods: {
		delClick(e) {
			this.$emit('del', e);
		},
		itemClick(e) {
			this.thisListKey = e;
			this.$emit('item', e);
		}
	},
	watch: {
		thisListKey() {
			this.$emit('change', this.thisListKey);
		},
		listKey() {
			this.thisListKey = this.listKey;
		}
	}
}
</script>
<style scoped>
.times {
	padding: 0;
	max-width: 40px;
	min-width: 40px;
}

.listbtn {
	margin-top: 0;
	margin-bottom: 0;
}
</style>
