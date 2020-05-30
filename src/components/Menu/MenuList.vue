<template>
<div>
	<mdb-list-group>
		<mdb-btn-group v-for="(item, index) in dataList" :key="index">
			<mdb-btn v-if="key===index" color="primary" class="listbtn" @click="itemClick(index)">{{item.name}}（{{item.timeText}}）</mdb-btn>
			<mdb-btn v-else outline="primary" darkWaves class="listbtn" @click="itemClick(index)">{{item.name}}（{{item.timeText}}）</mdb-btn>
			<mdb-btn color="danger" class="times listbtn" @click="del(index)">
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
		prop: 'key',
		event: 'change'
	},
	props: ['dataList', 'key'],
	data: () => ({

	}),
	methods: {
		delClick(e) {
			this.$emit('del', e);
		},
		itemClick(e) {
			this.key = e;
			this.$emit('item', e);
		}
	},
	watch: {
		key() {
			this.$emit('change', this.key);
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
