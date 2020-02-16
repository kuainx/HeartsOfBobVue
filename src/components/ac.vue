<template>
<span>
	<b v-if="this.num == undefined" class="f-orange">
		<slot></slot>
	</b>
	<b v-if="clr===true" class="f-orange">
		{{str}}
	</b>
	<b v-else-if="num>=0" class="f-green">
		{{str}}
	</b>
	<b v-else class="f-red">
		{{str}}
	</b>
</span>
</template>

<script>
export default {
	name: "ac",
	props: {
		clr: {
			type: Boolean,
			default: false
		},
		percent: {
			type: Boolean,
			default: false
		},
		front: String,
		back: String,
		num: [Number, String]
	},
	computed: {
		str() {
			if (this.num == undefined) {
				return;
			} else {
				let mid = this.num;
				let front = this.front ? this.front : '';
				let back = this.back ? this.back : '';
				if (this.percent) {
					mid = mid * 100 + "%";
				}
				return front + mid + back;
			}
		}
	}
}
</script>

<style scoped>
.f-green {
	color: green;
}

.f-red {
	color: red;
}

.f-orange {
	color: orange;
}
</style>
