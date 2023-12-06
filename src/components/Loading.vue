<script lang="ts" setup></script>

<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  top: 0;
  left: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: #00000080;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  span {
    display: block;
    background-color: #0000;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 3px solid transparent;
    border-top-color: #03bdd3;
    border-bottom-color: #03bdd3;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}
</style>
