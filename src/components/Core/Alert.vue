<template>
<div>
	<mdb-modal :show="push" @close="push = false" class="text-center" info>
		<mdb-modal-header center :close="false">
			<p class="heading">Be always up to date</p>
		</mdb-modal-header>
		<mdb-modal-body>
			<p>Do you want to receive the push notification about the newest posts?</p>
		</mdb-modal-body>
		<mdb-modal-footer center>
			<mdb-btn outline="primary" @click="push = false" tag="a" href="https://mdbootstrap.com/docs/vue/newsletter/" target="_blank">Yes</mdb-btn>
			<mdb-btn color="primary" @click="push = false">No</mdb-btn>
		</mdb-modal-footer>
	</mdb-modal>
</div>
</template>
<script>
export default {
	name: "AlertM",
	data: () => ({

	})
}
</script>
<style lang="scss" scoped>
</style>
