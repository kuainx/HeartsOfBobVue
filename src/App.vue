<template>
<div id="app">
	<Menu></Menu>
	<TopBar></TopBar>
	<SideBar></SideBar>
</div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Menu from './components/Menu.vue'
import SideBar from './components/SideBar.vue'

export default {
	name: 'app',
	components: {
		TopBar,
		Menu,
		SideBar
	},
	mounted() {
		let that = this;
		document.onkeydown = function (e) {
			if (e.keyCode == 27) {
				window.event.preventDefault();
				that.$root.runData.esc = !that.$root.runData.esc;
			}
		};
	}
}
</script>

<style>
</style>
