<template>
<div id="app">
	<Menu></Menu>
	<TopBar></TopBar>
	<!-- <a-button type="primary">Button</a-button> -->
</div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Menu from './components/Menu.vue'

export default {
	name: 'app',
	components: {
		TopBar,
		Menu
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
