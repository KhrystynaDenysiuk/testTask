<script lang="ts" setup>
const props = defineProps(["options", "value", "label", "validation"]);
</script>

<template>
  <FormKit
    :value="value"
    :classes="{
      inner: 'radioInputInner',
      wrapper: 'radioInputWrapper',
      label: '$reset radioInputLabel',
    }"
    type="radio"
    :options="options"
    :label="label"
    :validation="validation"
  />
</template>

<style lang="scss">
[data-type="radio"] {
  height: 184px;
  margin-bottom: 50px;
  .formkit-fieldset {
    border: none;
    .formkit-legend {
      color: #000000de;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
    .formkit-options {
      .formkit-option {
        .radioInputWrapper {
          .radioInputInner {
            border-radius: 11px;
            border: 1px solid #03bdd3;
          }
          .radioInputLabel {
            margin-left: 12px;
          }
          .formkit-decorator {
            outline: none;
            background: none;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
