<template>
	 <div class="index">
	 	<v-header></v-header>
	 	<div class="wrap">
	 		<div class="side">
	 			<v-side></v-side>
	 		</div>
			<div class="main">
				<transition name='transitionName' keep-alive>
					<router-view></router-view>
				</transition>
			</div>
	 	</div>
	</div>
</template>

<script>
import vHeader from './header.vue'
import vSide from './side.vue'
export default {
  	name: 'home',
    data () {
      return {
      }
    },
    components:{
    	vHeader,
    	vSide
    },
    beforeRouteUpdate(to,from,next){
	    let isBack = this.$router.isBack;
	    if( isBack ){
	        this.transitionName = 'slide-right'
	    }else{
	        this.transitionName = 'slide-left'
	    }
	    this.$router.isBack = false;
	}
}
</script>

<style scoped>
.wrap{
	display: flex;
	display: -webkit-flex;
}
.wrap .side{
	width: 180px;
	z-index: 2;
}
.wrap .main{
	margin-top: 50px;
	padding: 20px 20px;
	flex: 1;
	-webkit-flex: 1;
	z-index: 0;
}
.opacity-enter-active,.opacity-leave-active{
  transition:opacity .4s;
  backface-visibility: hidden;
}

.opacity-enter,
.opacity-leave-active{
  opacity: 0;
}
.child-view {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
