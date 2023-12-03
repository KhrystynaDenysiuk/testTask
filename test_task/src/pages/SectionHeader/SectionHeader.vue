<script lang="ts" setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="logo">
        <img alt="Logo" class="logo__img" src="@/assets/icons/Logo.svg" />
        <span class="logo__title">TESTTASK</span>
      </div>
      <div class="buttons">
        <Button :title="'Users'" />
        <Button :title="'Sign up'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  height: 60px;
  width: 100vw;
  background-color: #fff;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    height: 100%;
    @media screen and (max-width: 1024px) {
      margin: 0 60px;
    }
    @media screen and (max-width: 450px) {
      margin: 0 16px;
    }
    @media screen and (max-width: 360px) {
      margin: 0 10px;
    }
    .logo {
      display: flex;
      align-items: center;
    }
  }
}
</style>
