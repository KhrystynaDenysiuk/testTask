<script lang="ts" setup>
import { ref } from "vue";

import Link from "@/components/Link.vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Radio from "@/components/Radio.vue";
import Photo from "@/components/Photo.vue";
import { useStore } from "vuex";
import { ComputedRef } from "vue";
import { Positions } from "@/store/modules/positions/types";
import { computed } from "vue";
import { onMounted } from "vue";

const store = useStore();
const form = ref();

const positions: ComputedRef<Positions[]> = computed(
  () => store.state.positions.positions
);

const infoFromUser = [
  {
    type: "text",
    name: "name",
    label: "Your name",
    validation: "required|length:2,60",
  },
  {
    type: "text",
    name: "email",
    label: "Email",
    validation: "required|email",
  },
  {
    type: "tel",
    name: "phone",
    label: "Phone",
    validation: [["required"], ["matches", /^\+380[0-9]{9}$/]],
    help: "+38(XXX)XXXXXXX",
  },
];

const optionsRadio = positions;

const signUp = () => {
  const node = form.value.node;
  node.submit();
};

const resetForm = () => {
  const node = form.value.node;
  node.reset();
};

const submitHandler = (data: any) => {
  store.dispatch("users/addUser", data);
  resetForm();
};

onMounted(() => {
  store.dispatch("positions/getPositions");
});
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <Link :title="'Working with POST request'" />
      <FormKit type="form" ref="form" :actions="false" @submit="submitHandler">
        <Input
          v-for="el in infoFromUser"
          :key="el.label"
          :type="el.type"
          :name="el.name"
          :label="el.label"
          :validation="el.validation"
          :help="el.help"
        />
        <Radio
          name="position_id"
          :label="'Select your position'"
          :options="optionsRadio"
          :validation="'required'"
        />
        <Photo />
      </FormKit>
      <Button :title="'Sign up'" :variant="'showMore'" @click="signUp" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 140px;
    padding-bottom: 100px;
    #addUser-form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 50px 0;
    }
  }
}
</style>
