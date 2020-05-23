<template>
<div>
	<div ref="div" class="blackback" :class="{backclr:background,backdisplay:display}"></div>
</div>
</template>
<script>
export default {
	name: "blackBack",
	props: ['show'],
	watch: {
		show() {
			this.appendShow();
		}
	},
	created() {
		this.appendShow();
	},
	methods: {
		appendShow() {
			if (this.show) {
				this.display = true;
				this.background = true;
			} else {
				let that = this;
				this.background = false;
				setTimeout(() => {
					that.display = false;
				}, 300);
			}
		}
	},
	data: () => ({
		display: false,
		background: false
	})
}
</script>
<style scoped>
.blackback {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1049;
	width: 100%;
	height: 100%;
	overflow: hidden;
	outline: 0;
	-webkit-transition: .3s;
	transition: .3s;
}

.backclr {
	background-color: rgba(0, 0, 0, .5);
}

.backdisplay {
	display: block;
}
</style>
