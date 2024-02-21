import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from "../views/user-manage/UserAdd"
import UserList from "../views/user-manage/UserList"
import NewsAdd from "../views/news-manage/NewsAdd"
import NewsList from "../views/news-manage/NewsList"
import ProductAdd from "../views/product-manage/ProductAdd"
import ProductList from "../views/product-manage/ProductList"
import Notfound from "../views/notfound/Notfound"
const routers = [
    {
        path: "/center",
        component: Center
    },
    {
        path: "/index",
        component: Home
    },
    {
        path: "/user-manage/adduser",
        component: UserAdd
    },
    {
        path: "/user-manage/userlist",
        component: UserList
    },
    {
        path: "/news-manage/addnews",
        component: NewsAdd
    },
    {
        path: "/news-manage/newslist",
        component: NewsList
    },
    {
        path: "/product-manage/addnews",
        component: ProductAdd
    },
    {
        path: "/product-manage/newslist",
        component: ProductList
    },
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/:pathMatch(.*)",//错误路径重定向404
        name:"Notfound",
        component: Notfound
    },
]
export default routers;