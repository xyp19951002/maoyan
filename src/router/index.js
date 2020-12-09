import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/movie"
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/movie",
        component: () => import("../views/Movie.vue"),
        children: [
          {
            path: "/movie",
            redirect: "/hot"
          },
          {
            path: "/hot",
            meta: { requireAlive: true },
            component: () => import("../views/movie/Hot.vue")
          },
          {
            path: "/cinema",
            meta: { requireAlive: true },
            component: () => import("../views/movie/Cinema.vue")
          },
          {
            path: "/wait",
            component: () => import("../views/movie/Wait.vue")
          },
          {
            path: "/classical",
            component: () => import("../views/movie/Classical.vue")
          }
        ]
      },
      {
        path: "/video",
        component: () => import("../views/Video.vue"),
        meta: { isLogin: true, titleName: "猫眼视频" }
      },
      {
        path: "/minivideo",
        component: () => import("../views/MiniVideo.vue"),
        meta: { isLogin: true, titleName: "猫眼小视频" }
      },
      {
        path: "/show",
        name: "show",
        component: () => import("../views/Show.vue"),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
          if (!localStorage.token) {
            next("/login");
          } else {
            next();
          }
        }
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue"),
        meta: { titleName: "我的" }
      }
    ]
  },
  {
    path: "*",
    component: () => import("../views/Not404.vue")
  },
  {
    path: "/detail/:movieId",
    name: "detail",
    props: true,
    component: () => import("../views/Detail.vue")
  },
  {
    path: "/login",
    component: () => import("../views/login.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to);
  // 身份验证
  // 通过meta一次性的设置多个身份验证
  if (to.meta.isLogin) {
    if (!localStorage.getItem("token")) {
      next("/login");
    } else {
      if (to.meta.titleName) {
        document.title = to.meta.titleName;
      } else {
        document.title = "猫眼电影";
      }
      next();
    }
  } else {
    if (to.meta.titleName) {
      document.title = to.meta.titleName;
    } else {
      document.title = "猫眼电影";
    }
    next();
  }
});

// 解决某些vue版本重复点击不跳转的路由问题 或者一些路由跳转问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
