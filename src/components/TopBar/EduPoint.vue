<template>
<div class="EduPoint">
	<a-button-group>
		<a-button type="primary" icon="book" />
		<a-popover title="教育点数变化" placement="bottom">
			<template slot="content">
				点数改变：<b class="f-green">+233.00</b>/回合<br />基础值<b class="f-orange">2.00</b><br />稳定度<b class="f-red">-20% {{ 1}}</b>
			</template>
			<a-button @click="root">866</a-button>
		</a-popover>
	</a-button-group>
</div>
</template>

<script>
export default {
	name: "TopBar-EduPoint",
	data: function () {
		return {
			root: this.$root.$children[0],
			basicEduPoint: 2
		}
	},
	methods: {

	}
}
</script>

<style scoped>
</style>
