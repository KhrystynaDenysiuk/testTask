<script lang="ts" setup>
const props = defineProps(["title"]);
</script>

<template>
  <div class="link-component">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.link-component {
  text-align: center;

  @media screen and (max-width: 740px) {
    width: 328px;
  }
  h1 {
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
  }
}
</style>
