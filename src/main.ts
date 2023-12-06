import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { plugin, defaultConfig } from "@formkit/vue";

import "./style.scss";

createApp(App).use(store).use(plugin, defaultConfig).mount("#app");
