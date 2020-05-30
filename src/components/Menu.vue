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
					<mdb-icon icon="sync-alt" />
				</mdb-btn>
			</mdb-input>
			<MenuList :dataList="saveList" v-model="key" @del="delSave" @item="itemClick"></MenuList>
		</mdb-modal-body>
		<mdb-modal-footer>
			<mdb-btn color="primary" @click.native="read = false">取消</mdb-btn>
		</mdb-modal-footer>
	</mdb-modal>


	<a-modal title="读取存档" centered v-model="read" cancelText="取消" okText="加载" :confirmLoading="readLoading" :maskClosable="false" :z-index="10001" @cancel="readCancel" @ok="readSave">
		<b-input-group prepend="存档名">
			<b-form-input v-model="saveName"></b-form-input>
			<b-input-group-append>
				<b-button variant="outline-primary" @click="saveName=''">
					<b-icon-backspace-fill></b-icon-backspace-fill>
				</b-button>
			</b-input-group-append>
		</b-input-group>
		<a-menu mode="vertical" @click="saveListClick" v-model="key">
			<a-menu-item v-for="item in saveList" :key="item.name">
				<a-icon type="file-text" />
				{{item.name}}（{{item.timeText}}）
				<a-button type="danger" shape="circle" @click="delSave" :item="item.name" class="del-btn"><span class="times-line">&times;</span></a-button>
			</a-menu-item>
		</a-menu>
	</a-modal>

	<a-modal title="存储存档" centered v-model="write" cancelText="取消" okText="存储" :confirmLoading="writeLoading" :maskClosable="false" :z-index="10001" @cancel="writeCancel" @ok="writeSave">
		<b-input-group prepend="存档名">
			<b-form-input v-model="saveName"></b-form-input>
			<b-input-group-append>
				<b-button variant="outline-primary" @click="newSaveName">
					<b-icon-arrow-clockwise></b-icon-arrow-clockwise>
				</b-button>
			</b-input-group-append>
		</b-input-group>
		<a-menu mode="vertical" @click="saveListClick" v-model="keyList">
			<a-menu-item v-for="item in saveList" :key="item.name">
				<a-icon type="file-text" />
				{{item.name}}（{{item.timeText}}）
				<a-button type="danger" shape="circle" @click="delSave" :item="item.name" class="del-btn"><span class="times-line">&times;</span></a-button>
			</a-menu-item>
		</a-menu>
	</a-modal>

	<mdb-modal :show="about" @close="about = false">
		<mdb-modal-header>
			<mdb-modal-title>关于</mdb-modal-title>
		</mdb-modal-header>
		<mdb-modal-body>
			<h2>Hearts Of Bob (Vue)</h2>
			<h3>Version</h3>
			<ul>
				<li>Alpha-0.2.01</li>
				<li>Latest build:2020-04-25(Alpha-0.1.11)</li>
			</ul>
			<h3>Source Code</h3>
			<ul>
				<li>GitHub(latest): <a target="_blank" href="https://github.com/kuainx/HeartsOfBobVue">https://github.com/kuainx/HeartsOfBobVue</a></li>
				<li>Build: <a target="_blank" href="http://demo.ekuai.tech/BobUGVue/">http://demo.ekuai.tech/BobUGVue/</a></li>
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
			readLoading: false,
			write: false,
			writeLoading: false,
			about: false,
			saveName: '',
			key: -1,
			saveList: []
		}
	},
	watch: {
		saveName() {
			this.key = this.saveList.indexOf(this.saveName);
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
			this.readLoading = true;
			let that = this;
			if (this.existName(this.saveName)) {
				window.alertM('这将覆盖当前内存，且无法恢复！确定覆盖吗？', '警告', 'danger', {
					onOk() {
						HOBDB.get(that.saveName, function (e) {
							window.gameData = e.data;
							that.readCancel();
						});
					},
					onCancel() {
						that.readCancel();
					}
				});
			} else {
				window.alertM('存档' + that.saveName + '不存在', '错误', 'error', {
					zIndex: 10100
				});
				this.readCancel();
			}
		},
		writeSave() {
			this.writeLoading = true;
			if (this.existName(this.saveName)) {
				let that = this;
				window.alertM('这将覆盖一个存档，且无法恢复！确认覆盖存档吗？', '警告', 'danger', {
					onOk() {
						HOBDB.set(that.saveName, window.gameData);
						that.refreshList();
						that.writeCancel();
					},
					onCancel() {
						that.writeCancel();
					}
				});
			} else {
				HOBDB.set(this.saveName, window.gameData);
				this.refreshList();
				this.writeCancel();
			}
		},
		readCancel() {
			this.readLoading = false;
		},
		writeCancel() {
			this.writeLoading = false;
		},
		saveListClick(item) {
			console.log(item)
			this.saveName = item.key;
		},
		delSave(e) {
			console.log(e);
			e.stopPropagation();
			let name = e.target.getAttribute("item");
			let that = this;
			window.alertM('这将删除一个存档（' + name + '），且无法恢复！确认删除存档（' + name + '）吗？', '警告', 'confirm', {
				zIndex: 10100,
				onOk() {
					HOBDB.delete(name);
					that.refreshList();
				}
			});
		},
		itemClick() {
			this.saveName = this.saveList[this.key];
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
		existName(name) {
			for (var i = 0; i < this.saveList.length; i++) {
				if (this.saveList[i].name == name) {
					return true;
				}
			}
			return false;
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
