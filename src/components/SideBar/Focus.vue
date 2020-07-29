<template>
<div>
	<mdb-modal class="focusModal" :show="$root.runData.focus" @close="$root.runData.focus = false" fullHeight>
		<mdb-modal-header>
			<mdb-modal-title>聚焦</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>...</mdb-modal-body>
	</mdb-modal>

</div>
</template>
<script>
export default {
	name: "Focus",
	data: () => ({

	})
}
</script>
<style scoped>
</style>
<style>
.focusModal>.modal-dialog {
	max-width: 100%;
	width: 100% !important;
}
</style>
