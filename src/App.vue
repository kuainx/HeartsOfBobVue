<template>
<div id="app">
	<TopBar></TopBar>
	<!-- <a-button type="primary">Button</a-button> -->
</div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
	name: 'app',
	components: {
		TopBar
	},
	data: function () {
		return {
			base: {
				stability: 23,
				studySupport: 46
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
