<template>
  <header>
    <div class="menu-container">
      <sidebar></sidebar>
      <div class="login">
        <modal-window ref="modal" :form="form" @user-updated="updateUserInfo"></modal-window>

        <div class="login-container">
          <div class="profile-img">
            <img src="@/assets/img/default.jpg" class="profile-img" alt="" />
          </div>
          <div class="login-title">{{ user.user_name }}</div>
          <div class="user-info">
            <div class="user-info__item" v-if="user.user.user_type === 'Child'">
              <p>Класс обучения:</p>
              <p>7</p>
            </div>
            <div class="user-info__teacher-item" v-else-if="user.user.user_type === 'Teacher'">
              <div>
                <p>Классы преподавания:</p>
                <p>5</p>
              </div>
              <div>
                <p>Предметы преподавания:</p>
                <p>История</p>
              </div>
            </div>
            <div class="user-info__item">
            </div>
          </div>
          <div class="inputs">
            <div class="email-text">Email</div>
            <form-input v-model="form.email" placeholder="Email"></form-input>
            <div class="email-text">Номер телефона</div>
            <form-input v-model="form.phone" placeholder="Телефон"></form-input>
          </div>
          <SaveBtn @click="changEmail">Сохранить</SaveBtn>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import SaveBtn from "@/components/Buttons/SaveBtn.vue";
import FormInput from "@/components/form/Forminput.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useAuthStore } from "@/stores/auth/AuthStore";
import ModalWindow from "@/components/modals/ConfirmModal.vue";
import { useProfileStore } from "@/stores/profile/ProfileStore.js";
import { mapState } from "pinia";
import { apiClient } from '@/plugins/apiClient';

export default {
  setup() {
    const profileStore = useProfileStore()
    const authStore = useAuthStore()
    return {
      profileStore,
      authStore,
    }
  },
  data() {
    return {
      form: {
        email: "",
        phone: "",
      },
    };
  },

  components: {
    FormInput,
    SaveBtn,
    ModalWindow,
  },
  computed: {
    ...mapState(useAuthStore, ["user"]),
  },

  methods: {
    async changEmail() {
      try {
        if (this.user.email !== this.form.email || this.user.phone !== this.form.phone) {
          apiClient.get('/self/confirm/send?thru=email',  {},
              {
                headers: {
                  Authorization: "Bearer " + this.authStore.token,
                },
              })
          this.$refs.modal.show = true;
        }

      } catch (error) {
        console.log("Login submitHandler error :>> ", error);
      }
    },
    init() {
      this.form.email = this.user.email
      this.form.phone = this.user.phone
    },
    updateUserInfo() {
      this.form.email = this.user.email
      this.form.phone = this.user.phone
      toast.success('Изменения успешно сохранены!', {
        autoClose: 1000,
        theme: "dark",
      });
    }
  },
  beforeMount() {
    this.init()
  }
};
</script>
<style lang="scss" scoped>
body {
  background: rgb(17, 15, 22);
  height: 100vh;
}

.login {
  background: rgb(17, 15, 22);
  margin: auto;
  width: 70%;
}

.menu-container {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: auto;
}

.login-title {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #fff;
  margin-top: 20px;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: center;
  margin-top: 15px;
}

.login-input {
  margin-top: 15px;
  padding: 10px 1px;
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  background-color: rgb(36, 34, 40);
  width: 90%;
  transition: width 0.3s ease-in;
  color: #fff;
}



.login-input[type="email"] {
  font-weight: 700;
}

.login-input[type="tel"] {
  font-weight: 700;
}

.profile-img {
  border-radius: 50%;
  width: 220px;
  height: 220px;
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

.email-text {
  color: #e2e2e2;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
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

.user-info {
  text-align: center;
  color: #fff;
  font-size: 20px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  &__teacher-item {
    margin: 5px 0;

    div {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
      gap: 10px;
    }
  }
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

@media (max-width: 1200px) {
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

  .menu-container {}

  .nav-link span {
    display: none;
  }

  .nav-link {
    margin-left: 25px;
  }

  .profile-img {
    width: 150px;
    height: 150px;
  }

  .logo-img {
    margin-left: 0;
    width: 80px;
    height: 120px;
  }

  .nav {
    align-items: center;
  }

  .w3-sidebar {
    background-color: rgb(24, 23, 28);
    padding-right: 15px;
  }

  .work-container {
    margin-top: 40px;
  }
}

@media (max-width: 600px) {
  .inputs {
    width: 65%;
  }

  .enter {
    width: 45%;
    font-size: 12px;
  }

  .login-input {
    font-size: 14px;
  }

  .menu-container {}

  .logo-img {
    margin-left: 8px;
    width: 60px;
    height: 90px;
  }

  .work-title {
    font-size: 25px;
  }

  .card-container {
    width: 300px;
  }

  .card-title {
    font-size: 20px;
  }

  .card-quest {
    font-size: 12px;
  }

  .card-subject-title {
    font-size: 16px;
  }

  .card-subject-text {
    font-size: 16px;
  }

  .accept {
    font-size: 16px;
  }

  .decline {
    font-size: 16px;
  }

  .cards {
    justify-content: center;
  }
}

@media (max-width: 400px) {
  .work-title {
    font-size: 20px;
  }

  .card-container {
    width: 260px;
  }

  .card-title {
    font-size: 20px;
  }

  .card-quest {
    font-size: 12px;
  }

  .card-subject-title {
    font-size: 16px;
  }

  .card-subject-text {
    font-size: 16px;
  }
}
</style>
