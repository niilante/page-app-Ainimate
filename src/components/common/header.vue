<template>
  <div class="header">
	    <div class="container">
	    	<div class="logo">后台管理系统</div>
		    <div class="user-info">
		    	<el-dropdown @command='logout'>
				  <span class="el-dropdown-link">
				    <img class="user-logo" src="../../static/img/img.jpg">
				    <font>{{username}}</font>
				    <i class="el-icon-caret-bottom el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item command='/login'>退出</el-dropdown-item>
				   </el-dropdown-menu>
				</el-dropdown>
		    </div>
	    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      username: 'header'
    }
  },
  methods:{
  	logout(command){
  		window.localStorage.removeItem('ms_username');
  		this.$router.push({path:'/login'})
  	}
  }
}
</script>

<style scoped>
.header{
	position: fixed;
	top: 0px;
	color: #fff;
	height: 50px;
	line-height: 50px;
	width: 100%;
	overflow: hidden;
	z-index: 2;
}
.container{
	display: flex;
	display: -webkit-flex;
	width: 1170px;
	margin: 0 auto;
}
.logo{
	flex: 1;
	-webkit-flex: 1;
}
.user-info img{
	position: absolute;
	top: 4px;
	left: 0px;
	height: 40px;
	width: 40px;
	border-radius: 50%;
}
.el-dropdown-link{
	
	position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;

}
</style>








