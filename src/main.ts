import { createApp } from "vue";

import App from "./App.vue";
import "./style.css";
import { router } from "./router";
import { createPinia } from "pinia";import { Icon } from '@iconify/vue';

import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

const app = createApp(App);
const pinia = createPinia();

// Plugins
app.use(pinia);
app.use(router);
app.component("Icon", Icon);

// Components
app.component("EasyDataTable", Vue3EasyDataTable);

app.mount("#app");
