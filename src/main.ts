import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { plugin, defaultConfig } from "@formkit/vue";

import "./style.scss";
console.log("test");
createApp(App).use(store).use(plugin, defaultConfig).mount("#app");
