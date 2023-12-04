<script lang="ts" setup>
const props = defineProps(["title", "variant"]);
</script>

<template>
  <button
    :class="{
      button: true,
      disabled: variant === 'disabled',
      longButton: variant === 'showMore',
    }"
    type="button"
  >
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 100px;
  height: 34px;
  border-radius: 80px;
  z-index: 1;
  font-family: "Nunito-Regular";
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  &.button {
    background-color: #f4e040;
    &:hover {
      background-color: #ffe305;
    }
  }
  &.disabled {
    color: #f5f5f5;
    background-color: #b4b4b4;
    cursor: default;
    &:hover {
      background-color: #b4b4b4;
    }
  }
  &.longButton {
    width: 120px;
  }
  &:nth-child(1) {
    margin-right: 10px;
  }
}
</style>
