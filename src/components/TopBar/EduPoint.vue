<template>
<div class="EduPoint">

	<mdb-btn-group>
		<mdb-popover trigger="hover" :options="{placement: 'bottom'}">
			<span slot="header">教育点数</span>
			<span slot="body">这个班级领袖拥有多少教育点数。</span>
			<mdb-btn slot="reference" outline="primary" darkWaves class="iconBtn">
				<mdb-icon icon="book" />
			</mdb-btn>
		</mdb-popover>
		<mdb-popover trigger="hover" :options="{placement: 'bottom'}">
			<span slot="header">教育点数变化</span>
			<span slot="body">点数改变：<b class="f-green">+233.00</b>/回合<br />基础值<b class="f-orange">2.00</b><br />稳定度<b class="f-red">-20% {{ 1}}</b>
				<p>
					班级稳定度
					<ac num="-0.23" percent></ac>
				</p>
			</span>
			<mdb-btn slot="reference" color="primary" class="numBtn">866</mdb-btn>
		</mdb-popover>
	</mdb-btn-group>
</div>
</template>

<script>
import ac from "../ac.vue"

export default {
	name: "TopBar-EduPoint",
	components: {
		ac
	},
	data: function () {
		return {

		}
	},
	computed: {

	},
	methods: {
		change() {
			this.$root.dat.base.stability++;
		}
	}
}
</script>

<style scoped>
</style>
