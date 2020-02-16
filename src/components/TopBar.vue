<template>
<div class="TopBar">
	<a-card style="width: 100%">
		<EduPoint></EduPoint>
	</a-card>

</div>
</template>

<script>
import EduPoint from './TopBar/EduPoint.vue'
export default {
	name: 'TopBar',
	data: function () {
		return {

		}
	},
	components: {
		EduPoint
	}
}
</script>

<style scoped>
.TopBar {
	margin: 5px;
}
</style>
