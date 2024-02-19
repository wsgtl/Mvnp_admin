import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import RoutesConfig from "./config"
import Store from "../store/index"

const routes = [
 {
   path:"/login",
   name:"login",
   component:Login
 },
 {
   path:"/mainBox",
   name:"mainBox",
   component:MainBox
 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 每次路由跳转之前都会拦截
router.beforeEach((to,from,next)=>{
  if(to.name=="login"){
    next();
  }else{
    //如果授权（已经登陆过了）next()
    //未授权，重定向到login
    if(!localStorage.getItem("token")){
      next({
        path:"/login"
      })
    }else{
      if(!Store.state.isGetterRouter){//第一次登陆判断isGetterRouter存的值
        ConfigRouter();
        next({
          path:to.fullPath
        })
      }else{
        next(); 
      }
     
    }
  }
})
/**mainbox路由添加 */
const ConfigRouter = ()=>{
  RoutesConfig.forEach(item=>{
    router.addRoute("mainBox",item);
  })
  //改变isGetterRouter = true;
  Store.commit("changeGetterRouter",true);
}
export default router
