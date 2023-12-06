<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { ComputedRef, computed, onMounted } from "vue";

import Link from "@/components/Link.vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Radio from "@/components/Radio.vue";
import Photo from "@/components/Photo.vue";
import Loading from "@/components/Loading.vue";

import { Positions } from "@/store/modules/positions/types";

import { XMarkIcon } from "@heroicons/vue/24/outline";

const store = useStore();

const form = ref();
const loading = ref(false);
const isAdd = ref(false);

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
  loading.value = true;
  store.dispatch("users/addUser", data);
  resetForm();
  loading.value = false;
  isAdd.value = true;
};

onMounted(() => {
  store.dispatch("positions/getPositions");
});

const closeUserRegistered = () => {
  loading.value = true;
  isAdd.value = false;
  loading.value = false;
};
</script>

<template>
  <div id="signIn" class="main-wrapper">
    <Loading v-if="loading" />
    <div class="container">
      <Link
        :title="
          isAdd ? 'User successfully registered' : 'Working with POST request'
        "
      />
      <FormKit
        v-if="!isAdd"
        type="form"
        ref="form"
        :actions="false"
        #default="{ state: { valid } }"
        @submit="submitHandler"
      >
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
        <div class="button">
          <Button
            v-if="!isAdd"
            :title="'Sign up'"
            :variant="!valid ? 'disabled' : 'showMore'"
            :disabled="!valid"
            @click="signUp"
          />
        </div>
      </FormKit>
      <div v-if="isAdd" class="add-user">
        <div class="closeUserRegistered" @click="closeUserRegistered">
          <XMarkIcon class="closeUserRegistered-img" />
        </div>
        <img src="@/assets/icons/UserRegistered.png" alt="" />
      </div>
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
    margin-top: 140px;
    padding-bottom: 100px;
    .formkit-form {
      .button {
        text-align: center;
      }
    }
    .add-user {
      img {
        margin-top: 50px;
      }
      .closeUserRegistered {
        position: relative;
        display: flex;
        justify-content: flex-end;
        height: 20px;
        width: 100%;
        .closeUserRegistered-img {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
