<template>
<div>
	<mdb-modal class="focusModal" :show="$root.runData.focus" @close="$root.runData.focus = false" fullHeight>
		<mdb-modal-header>
			<mdb-modal-title>聚焦</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body class="focusContainer">
			<FocusGraph></FocusGraph>
		</mdb-modal-body>
	</mdb-modal>

</div>
</template>
<script>
import FocusGraph from './FocusGraph.vue'
export default {
	name: "Focus",
	data: () => ({

	}),
	components: {
		FocusGraph
	}
}
</script>
<style scoped>
.focusModal {
	overflow: hidden !important;
}

.focusContainer {
	padding: 0;
}
</style>
<style>
.focusModal>.modal-dialog {
	max-width: 100%;
	width: 100% !important;
}
</style>
