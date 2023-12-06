<script lang="ts" setup>
import { useStore } from "vuex";
import { type ComputedRef, type Ref, computed, ref } from "vue";

import Button from "@/components/Button.vue";
import Link from "@/components/Link.vue";
import UsersCards from "./UsersCards/UsersCards.vue";

const store = useStore();

const totalPages: ComputedRef<number> = computed(
  () => store.state.users.totalPages
);

let page: Ref<number> = ref(1);

const showMoreUsers = () => {
  store.dispatch("users/getUsers", { page: ++page.value });
};
</script>

<template>
  <div id="users" class="main-wrapper">
    <div class="container">
      <Link :title="'Working with GET request'" />
      <UsersCards />
      <Button
        v-if="totalPages !== page"
        :title="'Show more'"
        :variant="'showMore'"
        @click="showMoreUsers"
      />
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
  }
}
</style>
