<template>
<div class="TopBar">
	<mdb-card>
		<mdb-card-body>
			<EduPoint></EduPoint>
		</mdb-card-body>
	</mdb-card>
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

>>>.iconBtn {
	padding: 0;
	margin-right: 0;
	max-width: 50px;
	min-width: 50px;
}

>>>.numBtn {
	margin-left: 0;
}
</style>
