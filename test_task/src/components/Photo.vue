<script lang="ts" setup></script>

<template>
  <FormKit
    :classes="{
      outer: 'photoInputOuter',
      input: 'photoInput',
      inner: 'photoInputInner',
    }"
    :name="'photo'"
    type="file"
    accept=".jpg,.jpeg"
    validation="required"
  />
</template>

<style lang="scss">
.formkit-wrapper {
  .formkit-inner {
    border: none;
    &.photoInputInner {
      position: relative;
      .photoInput {
        opacity: 0;
      }
      &:has(.formkit-file-list) {
        &::after {
          display: none;
        }
      }
      &::before {
        position: absolute;
        content: "Upload";
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 54px;
        border: 1px solid #000;
        border-radius: 4px 0px 0px 4px;
      }
      &::after {
        position: absolute;
        content: "Upload your photo";
        top: 0;
        left: 83px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 297px;
        height: 54px;
        padding-left: 16px;
        color: #7e7e7e;
        border: 1px solid #d0cfcf;
        border-radius: 0 4px 4px 0;
        border-left: none;

        @media screen and (max-width: 500px) {
          width: 245px;
        }
      }
      .formkit-file-list {
        height: 54px;
        margin-left: 83px;
        border: 1px solid #d0cfcf;
        border-radius: 0 4px 4px 0;
        border-left: none;
        color: #000000de;
        .formkit-file-item {
          .formkit-file-item-icon {
            &.formkit-icon {
              display: none;
            }
          }
          .formkit-file-remove {
            .formkit-file-remove-icon {
              &.formkit-icon {
                color: #000000de;
              }
            }
          }
        }
      }
    }
  }
  &:has(~ .formkit-messages) {
    .photoInputInner::before {
      border: 1px solid #cb3d40;
      border-right: none;
    }
    .photoInputInner::after {
      border: 1px solid #cb3d40;
    }
  }
}
</style>
