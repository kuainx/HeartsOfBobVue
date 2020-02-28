<template>
<div>
	<a-modal title="菜单" centered v-model="$root.runData.esc" :footer="null" :keyboard="false" :maskClosable="false" :closable="false" :z-index="10000">
		<a-button class="menu-btn" type="primary" block @click="toggleEsc">继续</a-button>
		<a-button class="menu-btn" type="primary" block @click="toggleRead">读取存档</a-button>
		<a-button class="menu-btn" type="primary" block @click="toggleWrite">存储存档</a-button>
		<a-button class="menu-btn" type="primary" block>回到主界面</a-button>
		<a-button class="menu-btn" type="primary" block>关闭</a-button>
	</a-modal>

	<a-modal title="读取存档" centered v-model="read" cancelText="取消" okText="加载" :confirmLoading="readLoading" :maskClosable="false" :z-index="10001" @cancel="readCancel" @ok="readSave">
		<a-input-search placeholder="存档名称" @search="setNewName" v-model="saveName" @change="inputChange">
			<a-icon slot="prefix" theme="filled" type="book" />
			<a-button slot="enterButton">
				<a-icon type="reload" />
			</a-button>
		</a-input-search>
		<a-menu mode="vertical" @click="saveListClick" v-model="keyList">
			<a-menu-item v-for="item in saveList" :key="item.name">
				<a-icon type="file-text" />
				{{item.name}}（{{item.timeText}}）
				<a-button type="danger" shape="circle" @click="delSave" :item="item.name" class="del-btn"><span class="times-line">&times;</span></a-button>
			</a-menu-item>
		</a-menu>
	</a-modal>

	<a-modal title="存储存档" centered v-model="write" cancelText="取消" okText="存储" :confirmLoading="writeLoading" :maskClosable="false" :z-index="10001" @cancel="writeCancel" @ok="writeSave">
		<a-input-search placeholder="存档名称" @search="setNewName" v-model="saveName" @change="inputChange">
			<a-icon slot="prefix" theme="filled" type="book" />
			<a-button slot="enterButton">
				<a-icon type="reload" />
			</a-button>
		</a-input-search>
		<a-menu mode="vertical" @click="saveListClick" v-model="keyList">
			<a-menu-item v-for="item in saveList" :key="item.name">
				<a-icon type="file-text" />
				{{item.name}}（{{item.timeText}}）
				<a-button type="danger" shape="circle" @click="delSave" :item="item.name" class="del-btn"><span class="times-line">&times;</span></a-button>
			</a-menu-item>
		</a-menu>
	</a-modal>
</div>
</template>

<script>
import {
	HOBDB
} from '../assets/inDB.js'
export default {
	name: "Menu",
	data() {
		return {
			read: false,
			readLoading: false,
			write: false,
			writeLoading: false,
			saveName: '',
			keyList: [],
			saveList: []
		}
	},
	methods: {
		newSaveName() {
			let day = new Date();
			let ret = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate() + '#' + day.getHours() + ':' + day.getMinutes() + ":" + day.getSeconds() + '.hob';
			this.saveName = ret;
		},
		setNewName(e, a) {
			if (a.constructor.name == "MouseEvent") {
				this.newSaveName();
				this.inputChange();
				this.refreshList();
			}
		},
		toggleRead() {
			this.read = !this.read;
			this.newSaveName();
			this.inputChange();
			this.refreshList();
		},
		toggleWrite() {
			this.write = !this.write;
			this.newSaveName();
			this.inputChange();
			this.refreshList();
		},
		toggleEsc() {
			this.$root.runData.esc = false;
		},
		readSave() {
			this.readLoading = true;
			let that = this;
			if (this.existName(this.saveName)) {
				window.alertM('这将覆盖当前内存，且无法恢复！确定覆盖吗？', '警告', 'confirm', {
					zIndex: 10100,
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
				window.alertM('这将覆盖一个存档，且无法恢复！确认覆盖存档吗？', '警告', 'confirm', {
					zIndex: 10100,
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
			this.saveName = item.key;
		},
		inputChange() {
			this.keyList[0] = this.saveName;
		},
		delSave(e) {
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
		}
	}
}
</script>

<style scoped>
.menu-btn {
	margin: 5px;
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
