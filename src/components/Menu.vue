<template>
<div>
	<a-modal title="菜单" centered v-model="$root.runData.esc" :footer="null" :keyboard="false" :maskClosable="false" :closable="false" :z-index="10000">
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
			<a-menu-item v-for="item in saveList" :key="item">
				<a-icon type="file-text" />
				{{item}}
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
			<a-menu-item v-for="item in saveList" :key="item">
				<a-icon type="file-text" />
				{{item}}
			</a-menu-item>
		</a-menu>
	</a-modal>
</div>
</template>

<script>
import HOBDB from '../assets/inDB.js'
window.HOBDB = HOBDB;
export default {
	name: "Menu",
	data() {
		return {
			read: false,
			readLoading: false,
			write: false,
			writeLoading: false,
			saveName: '',
			keyList: []
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
			}
		},
		toggleRead() {
			this.read = !this.read;
			this.newSaveName();
			this.inputChange();
		},
		toggleWrite() {
			this.write = !this.write;
			this.newSaveName();
			this.inputChange();
		},
		readSave() {
			this.readLoading = true;
			let that = this;
			if (this.saveList.indexOf(this.saveName) >= 0) {
				window.alertM('这将覆盖当前内存，且无法恢复！确定覆盖吗？', '警告', 'confirm', {
					zIndex: 10100,
					onOk() {
						console.log('ok')
					},
					onCancel() {
						that.readLoading = false;
					}
				});
			} else {
				window.alertM('存档不存在', '错误', 'error', {
					zIndex: 10100
				});
				this.readLoading = false;
			}
		},
		writeSave() {
			this.readLoading = true;
			if (this.saveList.indexOf(this.saveName) >= 0) {
				let that = this;
				window.alertM('这将覆盖一个存档，且无法恢复！确认覆盖存档吗？', '警告', 'confirm', {
					zIndex: 10100,
					onOk() {
						console.log('ok')
					},
					onCancel() {
						that.readLoading = false;
					}
				})
			} else {

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
		}
	},
	computed: {
		saveList() {
			return ['aaa', 'bbb', 'ccc']
		}
	}
}
</script>

<style scoped>
.menu-btn {
	margin: 5px;
}
</style>
