import { createWebHistory, createRouter } from "vue-router";

// 연결할 각 컴포넌트 import
import Vue_Home from "../views/Home";
import Vue_About from "../views/About";

// 라우터 설계
const routes = [
    { path: '/', component:Vue_Home},
    { path: '/about', component:Vue_About}
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router