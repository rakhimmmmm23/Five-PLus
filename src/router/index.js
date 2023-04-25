import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth/AuthStore";
import DefaultLayout from '@/layouts/Default.vue'

import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Work from "../views/Work.vue";
import MyChilds from "../views/MyChilds.vue";
import History from "../views/History.vue";
import Support from "../views/Support.vue";
import Teacher from "../views/Teacher.vue";
import Register from "../views/Register.vue";
import PageNotFound from '@/views/NotFound.vue'
const AuthGuard = (to, from, next) => {
  const authStore = useAuthStore();
  const role = authStore.role;
  const requiredRoles = to.meta.roles;

  if (!authStore.user) {
    next({ path: "/login" });
  } else if (!requiredRoles || requiredRoles.includes(role)) {
    next();
  } else {
    next({ path: "/403" });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default-layout",
      component: DefaultLayout,
      beforeEnter: async (_to, _from, next) => {
        const authStore = useAuthStore()

        if (!authStore.user) {
          try {
            await authStore.getSelfInfo()
          } catch (error) {
            next({ name: 'login' })
          }
        }

        next()
      },
      children: [
        {
          path: "/",
          name: "Profile",
          component: Profile,
          // meta: {
          //   requiresAuth: true,
          //   roles: ["parent", "teacher", "pupil",""],
          // },
          beforeEnter: [AuthGuard],
        },
        {
          path: "/balance",
          name: "Balance",
          component: import("@/views/Balance.vue"),
        },
        {
          path: "/role",
          name: "Role",
          component: import("@/views/Role.vue"),
        },
        {
          path: "/chat",
          name: "Chat",
          component: import("@/views/Chat.vue"),
        },
        {
          path: "/settings",
          name: "Setting",
          component: import('@/views/Settings.vue'),
        },
        {
          path: "/teacher",
          name: "Teacher",
          component: Teacher,
        },
        {
          path: "/work",
          name: "Work",
          component: Work,
          meta: {
            requiresAuth: true,
            // roles: ["teacher"],
          },
          beforeEnter: [AuthGuard],
        },
        {
          path: "/mychilds",
          name: "MyChilds",
          component: MyChilds,
          meta: {
            requiresAuth: true,
            // roles: ["parent"],
          },
          beforeEnter: [AuthGuard],
        },
        {
          path: "/history",
          name: "History",
          component: History,
          meta: {
            requiresAuth: true,
            // roles: ["parent", "pupil", "teacher"],
          },
          beforeEnter: [AuthGuard],
        },
        {
          path: "/support",
          name: "Support",
          component: Support,
        },
      ],
    },
    { path: "/:catchAll(.*)", component: PageNotFound },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ],
});

export default router;
