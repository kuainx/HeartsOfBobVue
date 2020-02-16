<template>
<div class="EduPoint">
	<a-button-group>
		<a-popover title="教育点数" placement="bottom">
			<template slot="content">
				这个班级领袖拥有多少教育点数。
			</template>
			<a-button type="primary" icon="book" />
		</a-popover>
		<a-popover title="教育点数变化" placement="bottom">
			<template slot="content">
				点数改变：<b class="f-green">+233.00</b>/回合<br />基础值<b class="f-orange">2.00</b><br />稳定度<b class="f-red">-20% {{ 1}}</b>
				<p>
					班级稳定度
					<ac num="-0.23" percent></ac>
				</p>
			</template>
			<a-button @click="change">866</a-button>
		</a-popover>
	</a-button-group>
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
	methods: {
		change() {
			this.$root.dat.base.stability++;
		}
	}
}
</script>

<style scoped>
</style>
