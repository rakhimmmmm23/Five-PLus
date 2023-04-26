<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close" @click="closeModal">&#10006;</div>
      <slot name="title">
        <h3 class="modal-title">Код подтверждения</h3>
      </slot>
      <slot name="body" class="body">
        <div class="body-title">Чтобы внести изменения в профиль введите код подтверждения, который был выслан на ваш email</div>
        <FormInput v-model.number="code" placeholder="Код"></FormInput>
      </slot>
      <slot name="footer">
        <div class="modal-footer">
          <GradientBtn class="modal-footer__button" @click="confirmCode">Я подтверждаю</GradientBtn>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/form/Forminput.vue";
import GradientBtn from '@/components/Buttons/GradientBtn.vue'
import { apiClient } from '@/plugins/apiClient';
import { useAuthStore } from "@/stores/auth/AuthStore";
import { mapState } from 'pinia';


export default {
  setup() {
    const authStore = useAuthStore()

    return {
      authStore
    }
  },
  name: "ModalWindow",
  data: function () {
    return {
      show: false,
      code:'',
    };
  },
  computed: {
    ...mapState(useAuthStore, ["user"]),
  },
  methods: {
   async confirmCode () {
      try {
      const res = await apiClient.get(`/self/confirm/token?code=${this.code}&for=universal`)
      if(res.data.code !== 200) return
        const data = await this.authStore.getSelfInfo()
        this.user.email = data.email
        this.show = false
    
      } catch (error) {
        console.log("Login submitHandler error :>> ", error);
      }
    },
   closeModal () {
    this.show = false

    },

  },
  components: {
    FormInput,GradientBtn
  },
};
</script>

<style scoped lang="scss">
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.body-title{
    color: #fff;
    font-size: 18px;
    margin-bottom: 15px;
}


.modal {
  background: rgb(45, 44, 50);
  border-radius: 8px;
  padding: 15px;
  min-width: 15%;
  max-width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);

  &-close {
    border-radius: 50%;
    color: #fff;
    background: #565e7a;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  &-title {
    color: #fff;
    margin-bottom: 20px;
  }

  &-content {
    margin-bottom: 20px;
  }

  &-footer {
    text-align: center;
        &__button {

        min-width: 150px;
    }
  }
}
@media (max-width: 900px){
    .modal{
        max-width: 50%;
    }
} 
</style>
