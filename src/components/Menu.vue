<template>
<div>
	<mdb-modal removeBackdrop centered :show="$root.runData.esc" @close="$root.runData.esc = false">
		<mdb-modal-header>
			<mdb-modal-title>菜单</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<mdb-btn class="menu-btn" rounded block color="primary" @click="toggleEsc">继续</mdb-btn>
			<mdb-btn class="menu-btn" rounded block color="primary" @click="toggleRead">读取存档</mdb-btn>
			<mdb-btn class="menu-btn" rounded block color="primary" @click="toggleWrite">存储存档</mdb-btn>
			<mdb-btn class="menu-btn" rounded block color="primary" @click="aboutClick">关于</mdb-btn>
			<mdb-btn class="menu-btn" rounded block color="primary">关闭</mdb-btn>
		</mdb-modal-body>
	</mdb-modal>
	<blackBack :show="$root.runData.esc"></blackBack>
	<mdb-modal centered :show="read" @close="read = false">
		<mdb-modal-header>
			<mdb-modal-title>读取存档</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<mdb-input label="存档名" v-model="saveName">
				<mdb-btn color="primary" size="md" group slot="append" @click="saveName=''">
					<mdb-icon icon="backspace" />
				</mdb-btn>
			</mdb-input>
			<MenuList :dataList="saveList" v-model="listKey" @del="delSave" @item="itemClick"></MenuList>
		</mdb-modal-body>
		<mdb-modal-footer>
			<mdb-btn outline="primary" @click="read = false">取消</mdb-btn>
			<mdb-btn color="primary" @click="readSave">确认</mdb-btn>
		</mdb-modal-footer>
	</mdb-modal>

	<mdb-modal centered :show="write" @close="write = false">
		<mdb-modal-header>
			<mdb-modal-title>存储存档</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<mdb-input label="存档名" v-model="saveName">
				<mdb-btn color="primary" size="md" group slot="append" @click="newSaveName">
					<mdb-icon icon="sync-alt" />
				</mdb-btn>
			</mdb-input>
			<MenuList :dataList="saveList" v-model="listKey" @del="delSave" @item="itemClick"></MenuList>
		</mdb-modal-body>
		<mdb-modal-footer>
			<mdb-btn outline="primary" @click="write = false">取消</mdb-btn>
			<mdb-btn color="primary" @click="writeSave">确认</mdb-btn>
		</mdb-modal-footer>
	</mdb-modal>

	<mdb-modal :show="about" @close="about = false">
		<mdb-modal-header>
			<mdb-modal-title>关于</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<h2>Hearts Of Bob (Vue)</h2>
			<h3>Version</h3>
			<ul>
				<li>Current Version:Alpha-0.2.03</li>
				<li>Latest build:2020-04-25</li>
			</ul>
			<h3>Source Code</h3>
			<ul>
				<li>GitHub(latest): <a target="_blank" href="https://github.com/kuainx/HeartsOfBobVue">https://github.com/kuainx/HeartsOfBobVue</a></li>
				<li>Build(Alpha-0.1.11): <a target="_blank" href="http://demo.ekuai.tech/BobUGVue/">http://demo.ekuai.tech/BobUGVue/</a></li>
			</ul>
			<h3>Use</h3>
			<ul>
				<li>Vue</li>
				<li>Bootstrap Material Design for Vue</li>
				<li>AntV G6</li>
			</ul>
		</mdb-modal-body>
		<mdb-modal-footer>
			<mdb-btn color="primary" @click.native="about = false">关闭</mdb-btn>
		</mdb-modal-footer>
	</mdb-modal>

</div>
</template>

<script>
import {
	HOBDB
} from '../assets/inDB.js'
import BlackBack from './Menu/BlackBack.vue'
import MenuList from './Menu/MenuList.vue'
export default {
	name: "Menu",
	components: {
		BlackBack,
		MenuList
	},
	data() {
		return {
			read: false,
			write: false,
			about: false,
			saveName: '',
			listKey: -1,
			saveList: []
		}
	},
	watch: {
		saveName() {
			this.listKey = this.saveName2Index(this.saveName);
		}
	},
	methods: {
		newSaveName() {
			let day = new Date();
			let ret = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate() + '#' + day.getHours() + ':' + day.getMinutes() + ":" + day.getSeconds() + '.hob';
			this.saveName = ret;
		},
		toggleRead() {
			this.read = !this.read;
			this.newSaveName();
			this.refreshList();
		},
		toggleWrite() {
			this.write = !this.write;
			this.newSaveName();
			this.refreshList();
		},
		toggleEsc() {
			this.$root.runData.esc = false;
		},
		readSave() {
			let that = this;
			if (this.saveName2Index(this.saveName) > -1) {
				window.alertM('这将覆盖当前内存，且无法恢复！确定覆盖吗？', '警告', 'danger', {
					noBtn: true,
					onOk() {
						HOBDB.get(that.saveName, function (e) {
							window.gameData = e.data;
						});
					}
				});
			} else {
				window.alertM('存档（' + that.saveName + '）不存在', '错误', 'error');
			}
		},
		writeSave() {
			if (this.saveName2Index(this.saveName) > -1) {
				let that = this;
				window.alertM('这将覆盖一个存档（' + this.saveName + '），且无法恢复！确认覆盖存档吗？', '警告', 'danger', {
					noBtn: true,
					onOk() {
						HOBDB.set(that.saveName, window.gameData);
						that.refreshList();
					},
				});
			} else {
				HOBDB.set(this.saveName, window.gameData);
				this.refreshList();
			}
		},
		delSave(e) {
			console.log(e);
			let name = this.saveList[e].name;
			let that = this;
			window.alertM('这将删除一个存档（' + name + '），且无法恢复！确认删除该存档吗？', '警告', 'warning', {
				noBtn: true,
				onOk() {
					HOBDB.delete(name);
					that.refreshList();
				}
			});
		},
		itemClick(e) {
			this.saveName = this.saveList[e].name;
		},
		refreshList() {
			let that = this;
			HOBDB.getAll(function (e) {
				for (var i = 0; i < e.length; i++) {
					let day = e[i].time;
					e[i].timeText = day.getFullYear() + "年" + (day.getMonth() + 1) + "月" + day.getDate() + '日' + day.getHours() + '时' + day.getMinutes() + "分";
				}
				that.saveList = e;
			});
		},
		saveName2Index(name) {
			for (var i = 0; i < this.saveList.length; i++) {
				if (this.saveList[i].name == name) {
					return i;
				}
			}
			return -1;
		},
		aboutClick() {
			this.about = true;
		}
	}
}
</script>

<style scoped>
.menu-btn {
	margin: 5px !important;
}

.del-btn {
	float: right;
	margin: 4px;
}

.times-line {
	font-size: 20px;
	line-height: 10px;
}
</style>
