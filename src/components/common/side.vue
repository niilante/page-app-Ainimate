<template>
  <div class="side">
		<el-menu theme='dark' default-active="2" class="el-menu-vertical-demo" unique-opened router>
	      <el-menu-item index="1"><i class="el-icon-menu"></i>自述</el-menu-item>
	      <el-submenu index="2">
			<template slot="title"><i class="el-icon-message"></i>表格</template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1">基础表格</el-menu-item>
	          <el-menu-item index="1-2">Vue表格格式</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-submenu index="3">
			<template slot="title"><i class="el-icon-message"></i>表单</template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1">基本表单</el-menu-item>
	          <el-menu-item index="1-2">编辑器</el-menu-item>
	          <el-menu-item index="1-2">markdown</el-menu-item>
	          <el-menu-item index="1-2">文件上传</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-submenu index="4">
			<template slot="title"><i class="el-icon-message"></i>图表</template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1">基础图标</el-menu-item>
	          <el-menu-item index="1-2">混合图表</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
    </el-menu>
   </div>
</template>

<script>
export default {
  name: 'side',
  data () {
    return {
      msg: 'side'
    }
  },
  methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
    }
}
</script>

<style scoped>
.side{
	position: fixed;
	height: 100%;
	top: 50px;
	background: #324157;
}
</style>





