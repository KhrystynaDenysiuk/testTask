<script setup lang="ts">
import "@/reset.scss";
import SectionHeader from "./pages/SectionHeader/SectionHeader.vue";
import SectionInfo from "./pages/SectionInfo/SectionInfo.vue";
import Users from "./pages/Users/Users.vue";
import FormSignUp from "./pages/FormSignUp/FormSignUp.vue";
</script>

<template>
  <div id="app">
    <SectionHeader />
    <SectionInfo />
    <Users />
    <FormSignUp />
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: "Nunito-Regular";
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

#app {
  height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
