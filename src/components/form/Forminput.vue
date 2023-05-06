<template>
  <input
    :value="modelValue"
    type="email"
    class="login-input"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
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
</style>
