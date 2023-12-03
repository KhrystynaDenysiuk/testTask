<script lang="ts" setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="sectionInfo-wrapper">
    <div class="content">
      <div class="container">
        <h1 class="title">Test assignment for front-end developer</h1>
        <p class="subtitle">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
      </div>
      <Button :title="'Sign up'" />
    </div>
    <img
      class="background-img"
      src="@/assets/icons/BackgroundColorForMainBlock.png"
      alt="Background color"
    />
  </div>
</template>

<style lang="scss" scoped>
.sectionInfo-wrapper {
  height: 650px;
  position: relative;
  background-color: #f8f8f8;
  .content {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 380px;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    color: #fff;
    z-index: 1;
    @media screen and (max-width: 360px) {
      width: 328px;
    }
    .container {
      text-align: center;
      z-index: 1;
      .title {
        font-size: 40px;
        font-weight: 400;
        line-height: 40px;
        padding-bottom: 21px;
      }
      .subtitle {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        padding-bottom: 32px;
      }
    }
  }
  .background-img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
}
</style>
