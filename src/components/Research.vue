<template>
<div id="research"></div>
</template>

<script>
import G6 from '@antv/g6';
export default {
	name: "Research",
	mounted() {
		this.initG6();
	},
	methods: {
		initG6() {
			const graph = new G6.Graph({
				container: 'research', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
				width: 800, // Number，必须，图的宽度
				height: 500, // Number，必须，图的高度
			});
			graph.data(data); // 读取 Step 2 中的数据源到图上
			graph.render();
		}
	}
}
</script>

<style scoped>
</style>
