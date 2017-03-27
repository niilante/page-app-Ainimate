

因为需要实现类似APP页面切换的动画效果，百度google搜索比较少资料，所以自己写文档，希望对您有用

## 运行方法

#### 安装依赖
	npm install

#### 浏览器打开localhost:8080
	npm run dev

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3029162-a4c61948f2f8e016.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在router/index.js
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition', 
      component: PageTransition, // 引入页面切换组件
      children: [{
        path: '',
        component: Index  // 父路由访问页面，例如，访问www.aaa.com/ 显示的是Index组件
      }, {
        path: '/pageA',
        component: PageA  // 子路由组件  例如，访问www.aaa.com/pageA 显示为PageA
      }, {
        path: '/pageB',
        component: PageB // 子路由组件  例如，访问www.aaa.com/pageB 显示为PageB
      }]
    }
  ]
})
```

## 监听路由变化
在放置 <router-view>的vue文件中
```
//templete    
<transition name='transitionName' keep-alive>
	    <router-view></router-view>
    </transition>

//script
    beforeRouteUpdate(to,from,next){
	    let isBack = this.$router.isBack;
	    if( isBack ){
	        this.transitionName = 'slide-right'
	    }else{
	        this.transitionName = 'slide-left'
	    }
	    this.$router.isBack = false;
	}
//style
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
```

在需要点击返回的按钮中设置 goback
```
<div class="left" @click="goback"><</div>

methods: {
    goback () {
      this.$router.goBack()
    }
  }
```

大牛的github地址<https://github.com/zhengguorong/pageAinimate>
