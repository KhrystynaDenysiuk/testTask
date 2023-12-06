<script lang="ts" setup>
const props = defineProps([
  "type",
  "name",
  "title",
  "value",
  "validation",
  "disabled",
  "placeholder",
  "help",
  "class",
]);
</script>

<template>
  <FormKit
    :classes="{
      input: 'customInput',
      inner: 'customInputInner',
    }"
    :type="type"
    :name="name"
    :label="title"
    :value="value"
    :disabled="disabled"
    :validation="validation"
    :help="help"
  />
</template>

<style lang="scss">
.formkit-outer {
  width: 380px;
  height: 54px;
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    width: 328px;
  }
  .formkit-wrapper {
    position: relative;
    height: 100%;
    vertical-align: top;
    &:has(~ .formkit-messages) {
      .formkit-label {
        color: #cb3d40;
      }
      .formkit-inner {
        &.customInputInner {
          border-color: #cb3d40;
        }
      }
    }
    &:has(.formkit-input:focus),
    &:has(.formkit-input:valid) {
      .formkit-label {
        top: 0;
        padding: 0 4px;
        background-color: #f8f8f8;
        z-index: 2;
      }
    }
    .formkit-label {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      color: #7e7e7e;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      padding: 0;
      margin-left: 16px;
      pointer-events: none;
      white-space: nowrap;
      overflow: hidden;
      line-height: 40px;
      transition: 0.3s;
    }
    .formkit-inner {
      height: 100%;
      &.customInputInner {
        border: 1px solid #d0cfcf;
      }
      .customInput {
        &:focus {
          color: #000000de;
          height: 54px;
        }
      }
      .formkit-no-files {
        display: none;
      }
    }
  }
  .formkit-messages {
    .formkit-message {
      color: #cb3d40;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      padding: 0;
      margin-left: 16px;
    }
  }
}
</style>
