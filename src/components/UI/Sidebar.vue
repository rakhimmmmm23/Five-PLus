<template>
  <div class="w3-sidebar w3-bar-block">
    <div class="nav">
      <div class="minuts">
        <div v-if="authStore.user.user_type === 'Child'" class="child-info">Моя квота</div>
        <span v-if="authStore.user.user_type === 'General'">Баланс: {{ balance }}</span>
      </div>
      
      <router-link :to="routePath()">
        <div class="logo-flex">
          <img src="@/assets/img/logo.png" class="logo-img" alt="" />
        </div>
      </router-link>

      <template v-for="link in NAVIGATION_LINKS" :key="link.path">
        <router-link v-if="link.permissions.includes(authStore.user.user_type)" :to="link.path" class="nav-link">
          <img :src="link.imgSrc.default" alt="" />
          <span>{{ link.title }}</span>
        </router-link>
      </template>

      <router-link to="#" @click="logout" class="nav-link"><img src="@/assets/img/exit.png"
          alt="" /><span>Выйти</span></router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from "@/stores/auth/AuthStore.js";
import { NAVIGATION_LINKS } from '@/common/constants'

const authStore = useAuthStore();

const balance = ref(505)

async function logout() {
  await authStore.logout()
  this.$router.push({ path: '/login' })
}

function routePath() {
  if (authStore.user.user_type === 'Admin') {
    return '/role'
  } else {
    return '/'
  }
}

</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
}
.child-info{
  border: 1px solid #5f5f5f;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.nav-link {
  color: #e2e2e2;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  white-space: nowrap;
  line-height: 36px;
  margin-top: 20px;
}

.nav-link span {
  margin-left: 15px;
}

.minuts {
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  background-color: rgb(46 45 54);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  left: 0;
  right: 0;
  height: 50px;
}

.nav-link img {
  width: 30px;
  height: 30px;
}

.w3-sidebar {
  background-color: rgb(24, 23, 28);
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  min-width: 15%;
  padding: 50px 25px;
  height: 100vh;
}

router-link a {
  text-decoration: none !important;
}

@media (max-width: 2560px) {}

@media (max-width: 1500px) {
  .nav-link {
    font-size: 16px;
  }
}

@media (max-width: 1200px) {
  .nav-link span {
    display: none;
  }

  .nav {
    align-items: center;
  }

  .w3-sidebar {
    background-color: rgb(24, 23, 28);
  }
}

@media (max-width: 900px) {
  .teach {
    display: none;
  }
}

@media (max-width: 600px) {
  .logo-img {
    width: 60px;
    height: 90px;
  }

  .w3-sidebar {
    padding: 20px;
  }
}
</style>
