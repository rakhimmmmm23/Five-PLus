<template>
  <div class="login">
    <div class="login-container">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/img/logo.png" class="logo-img" alt="" />
        </div>
      </router-link>
      <div class="login-title">Авторизация</div>
      <div class="inputs">
        <form-input v-model="v$.form.username.$model" placeholder="Введите электронную почту или логин"
          type="email"></form-input>
        <div v-for="(error, index) of v$.form.username.$errors" :key="index" class="red-alert">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
        <form-input v-model="v$.form.password.$model" placeholder="Введите пароль" type="password"></form-input>
        <div v-for="(error, index) of v$.form.password.$errors" :key="index" class="red-alert">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <SaveBtn @click="submitHandler">Продолжить</SaveBtn>
      <router-link to="/register">
        <div href="#" class="have-account">Еще нету аккаунта?</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import SaveBtn from "@/components/Buttons/SaveBtn.vue";
import FormInput from "@/components/form/Forminput.vue";
import { useAuthStore } from "@/stores/auth/AuthStore";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { helpers, required, email } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

export default {
  validations: {
    email: {
      required,
      email,
    },
  },
  setup() {
    const authStore = useAuthStore()
    return {
      authStore,
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      form: {
        login_by: 'username',
        username: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      form: {
        username: {
          required: helpers.withMessage('Пожалуйста, введите ваше имя пользователя или почту', required),
        },
        password: {
          required: helpers.withMessage('Пожалуйста, введите ваш пароль', required),
        },
      }
    }
  },
  components: {
    SaveBtn,
    FormInput,
  },
  methods: {

    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // регулярное выражение для проверки email
      if (regex.test(this.form.username)) {
        this.form.login_by = 'email';
      } else {
        this.form.login_by = 'username';
      }
    },
    async submitHandler() {
      this.v$.$validate()
      this.validateEmail()
      try {
        console.log(this.form)
        if (!this.v$.$invalid) {
          await this.authStore.login(this.form)
          await this.authStore.getSelfInfo()
        }
        if (this.authStore.user.user_type === 'Admin') {
          return this.$router.push({ name: 'Role' })
        }
        toast.success('Успешная регистрация'
          , {
            autoClose: 1000,
            theme: "dark",
          });
        this.$router.push({ name: "Profile" })
      } catch (error) {
        console.log('Login submitHandler error :>> ');
        return toast.error(error.response.data.message
          , {
            autoClose: 1000,
            theme: "dark",
          });
      }
    }
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
  line-height: 36px;
  margin-top: 20px;
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
  text-align: center;
  line-height: 24px;
  background-color: rgb(36, 34, 40);
  width: 100%;
  transition: width 0.3s ease-in;
  color: #fff;
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
