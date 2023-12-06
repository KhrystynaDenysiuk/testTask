<script lang="ts" setup>
import { ComputedRef, computed, onMounted } from "vue";
import { useStore } from "vuex";

import { User } from "@/store/modules/users/types";

const store = useStore();

const users: ComputedRef<readonly User[]> = computed(
  () => store.state.users.users
);

const getAbbreviatedData = (data: string) => {
  return data?.length > 27 ? `${data.slice(0, 27)}...` : data;
};

onMounted(() => {
  store.dispatch("users/getUsers");
  store.dispatch("token/getToken");
});
</script>

<template>
  <div class="usersCards-wrapper">
    <div class="container" v-for="user of users">
      <div class="card">
        <div class="user-img">
          <img :src="user.photo" alt="" />
        </div>
        <div
          :class="{
            userName: true,
            showTooltip: user.name.length > 27,
          }"
        >
          <p>
            {{ getAbbreviatedData(user.name) }}
          </p>
          <span class="tooltiptext">
            {{ user.name }}
          </span>
        </div>
        <div class="userInfo">
          <div
            :class="{
              showTooltip: user.position.length > 27,
            }"
          >
            <p>
              {{ getAbbreviatedData(user.position) }}
            </p>
            <span class="tooltiptext">
              {{ user.position }}
            </span>
          </div>
          <div
            :class="{
              showTooltip: user.email.length > 27,
            }"
          >
            <p>
              {{ getAbbreviatedData(user.email) }}
            </p>
            <span class="tooltiptext">
              {{ user.email }}
            </span>
          </div>
          <p>{{ user.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.usersCards-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
  margin: 50px;

  @media screen and (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .container {
    width: 282px;
    height: 254px;
    border-radius: 10px;
    background: #fff;

    @media screen and (max-width: 940px) {
      width: 344px;
    }

    @media screen and (max-width: 740px) {
      width: 328px;
    }
    .card {
      height: calc(100% - 40px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      margin: 20px;
      .user-img {
        width: 70px;
        height: 70px;
        border-radius: 70px;
        img {
          border-radius: 70px;
        }
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
      }
      .showTooltip {
        position: relative;
        cursor: pointer;
        &:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
        }
      }
      .tooltiptext {
        display: inline-flex;
        position: absolute;
        width: max-content;
        height: 26px;
        bottom: -120%;
        left: 15%;
        padding: 3px 16px;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        background: #212121;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s;
      }
    }
  }
}
</style>
