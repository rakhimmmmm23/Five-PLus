<template>
  <header>
    <div class="title">404</div>
    <div class="not-found">Страница не найдена</div>
    <router-link to="/"> <GradientBtn>На главную</GradientBtn></router-link>
  </header>
</template>

<script>
import GradientBtn from "@/components/Buttons/GradientBtn.vue";
export default {
  data() {
    return {};
  },
  components: {
    GradientBtn,
  },
};
</script>
<style scoped>
header {
  padding-top: 200px;
  width: 50%;
margin:auto;
text-align: center;
}

.title {
  font-size: 100px;
  color: #fff;
  font-weight: 700;
}

.not-found {
  font-size: 50px;
  margin:20px 40px;
  color: #fff;
}


</style>
