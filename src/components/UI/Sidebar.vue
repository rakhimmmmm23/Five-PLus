<template>
  <div class="w3-sidebar w3-bar-block">
    <div class="nav">
        <div class="minuts">
          <span v-if="user.user_type === 'Child'"
          >Остаток Минут: {{ minuts }}</span
        >
        <span v-if="user.user_type === 'General'"
          >Остаток Баланса: {{ balance }}</span
        >
        </div>
      <router-link to="/">
        <div class="logo-flex">
          <img src="@/assets/img/logo.png" class="logo-img" alt="" />
        </div>
      </router-link>
      <router-link v-if="user.user_type === 'General'" to="/" class="nav-link" 
        ><img src="@/assets/img/profileimg.png" alt="" /><span
          >Профиль</span
        ></router-link
      >
      <router-link to="/mychilds" class="nav-link" v-if="user.user_type === 'General'" 
        ><img src="@/assets/img/motherandchild.png" alt="" /><span
          >Мои дети</span
        ></router-link
      >
      <router-link to="/balance" class="nav-link" v-if="user.user_type === 'General'" 
        ><img src="@/assets/img/wallet.png" alt="" /><span
          >Баланс</span
        ></router-link
      >
      <router-link to="/history" class="nav-link" v-if="user.user_type === 'Child' || user.user_type === 'Teacher'" 
        ><img src="@/assets/img/time.png" alt="" /><span
          >История
        </span></router-link
      >
      <router-link to="/support" class="nav-link"
        ><img src="@/assets/img/support.png" alt="" /><span
          >Поддержка</span
        ></router-link
      >
  
      <router-link to="/chat" class="nav-link" v-if="user.user_type === 'Child' || user.user_type ===  'Teacher'|| user.user_type ===  'General'"
              ><img src="@/assets/img/support.png" alt="" /><span
          >Чат</span
        ></router-link
      >
      <router-link to="/settings" class="nav-link" v-if="user.user_type === 'Teacher'"
        ><img src="@/assets/img/support.png" alt="" /><span
          >Настройки</span
        ></router-link
      >
  
      <router-link to="/work" class="nav-link" v-if="user.user_type === 'Teacher'"
        ><img src="@/assets/img/support.png" alt="" /><span
          >Работа</span
        ></router-link
      >
      <router-link to="#" @click="logout" class="nav-link" v-if="user.user_type === 'Child' || user.user_type === 'Teacher'|| user.user_type === 'General'"
        ><img src="@/assets/img/exit.png" alt="" /><span
          >Выйти</span
        ></router-link
      >
      <router-link to="/teacher" class="nav-link" v-if="user.user_type === 'General'" 
        ><img src="@/assets/img/teacher.png" alt="" /><span
          >Стать учителем
        </span></router-link
      >
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth/AuthStore";
import { mapState } from "pinia";

export default {
  name: "sidebar",
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
    };
  },
  data() {
    return {
      minuts:20,
      balance:20,
    };
  },
  methods:{
    async logout(){
       await this.authStore.logout()
       this.$router.push({ path: '/login' })
    }
  },
  computed: {
    ...mapState(useAuthStore, ["user"]),

  },
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
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

.minuts{
  color:#fff;
  font-size: 18px;
  margin-bottom: 20px;
  background-color: rgb(24, 23, 28);

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

@media (max-width: 2560px) {
}

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
