<template>
  <div class="login">
    <div class="login-container">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/img/logo.png" class="logo-img" alt="" />
        </div>
      </router-link>
      <div class="login-title">Cоздайте аккаунт</div>

      <div class="inputs">
      
        <form-input v-model="form.userName" placeholder="ВВЕДИТЕ USERNAME" type="text"></form-input>
        <div class="red-alert" v-if="form.userName.length < 4">
          * Юзернейм не менее 4 символов!
        </div>
        <form-input v-model="form.name" placeholder="ВВЕДИТЕ ИМЯ" type="text"></form-input>
        <form-input v-model="form.email" placeholder="ВВЕДИТЕ EMAIL" type="email"></form-input>
        <form-input v-model="form.password" placeholder="ВВЕДИТЕ ПАРОЛЬ" type="password"></form-input>
        <div class="red-alert" v-if="form.password.length < 7">
          * Пароль не менее 7 символов!
        </div>
      </div>
      <save-btn @click="submitHandler">Создать</save-btn>

      <router-link to="/login">
        <div href="#" class="have-account">Уже есть аккаунт?</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import FormInput from "@/components/form/Forminput.vue";
import SaveBtn from "@/components/Buttons/SaveBtn.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useAuthStore } from "@/stores/auth/AuthStore";
export default {
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
    };
  },
  data() {
    return {
      form: {
        userName: "",
        name: "",
        password: "",
        email: "",
      },
    };
  },
  components: {
    FormInput,
    SaveBtn,
  },
  methods: {
    async submitHandler() {
      console.log("in");

      try {
        console.log("authStore :>> ", this.authStore);
        await this.authStore.register(this.form);
        const user = await this.authStore.getSelfInfo()
        if (user.user_type === 'Admin') {
          return this.$router.push({ name: 'Role' })
        }
        this.$router.push({ name: "Profile" })
      } catch (error) {
        console.log("Register submitHandler error :>> ", error);
        return toast.error("Ошибка", {
            autoClose: 1000,
            theme: "dark",
          });
      }
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.red-alert {
  color: #9b3e3e;
  font-size: 14px;  
  display: flex;
  justify-content: start;
  margin-top: 8px;
}

.login {
  background: rgb(17, 15, 22);
  height: 100vh;
  margin: auto;
  position: relative;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.login-title {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin-top: 20px;
  line-height: 36px;
  color: #fff;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 45%;
}

.login-input {
  margin-top: 23px;
  padding: 10px 1px;
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(36, 34, 40);
  width: 100%;
  transition: width 0.3s ease-in;
  color: #fff;
}

.login-input[type="text"] {
  font-weight: 700;
}

.login-input[type="email"] {
  font-weight: 700;
}

.login-input[type="password"] {
  font-weight: 700;
}

.enter {
  align-items: center;
  padding: 0px 24px;
  background: inherit;
  border-radius: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffffff;
  border: #e1d4d4 solid 1px;
  margin-top: 37px;
  width: 20%;
  padding: 10px 1px;
  transition: 0.2s linear;
  cursor: pointer;
}

router-link a {
  text-decoration: none !important;
}

.enter:hover {
  background-color: rgb(36, 34, 40);
}

.have-account {
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: rgb(111, 186, 154);
  text-decoration: none;

  margin-top: 30px;
  transition: 0.1s linear;
}

.have-account:hover {
  color: #b2b8bd;
}

@media (max-width: 2560px) {
  .inputs {
    width: 25%;
  }
}

@media (max-width: 1500px) {
  .inputs {
    width: 35%;
  }
}

@media (max-width: 900px) {
  .inputs {
    width: 45%;
  }

  .enter {
    width: 35%;
  }
}

@media (max-width: 600px) {
  .inputs {
    width: 65%;
  }

  .enter {
    width: 45%;
  }
}
</style>
