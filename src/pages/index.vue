<template>
  <div class="p-4 flex flex-col">
    <button @click="consentForNotify" class="bg-blue-400 p-4 mb-2 text-lg text-white">Notify consent</button>
    <EasyDataTable :headers="headers" :items="links" alternating  :fixed-header="true" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useLocalStorage } from "@vueuse/core";
import type { Header } from "vue3-easy-data-table";

const links = ref(useLocalStorage("links", []));
const headers: Header[] = [{
  text: "url",
  value: "url",
  sortable: true,
},
{
  text: "actions",
  value: "actions",
  fixed: true,
}]

const consentForNotify = () => {
  Notification.requestPermission().then((result) => {
    console.log(result);
  }).catch(alert);
};
onMounted(() => {
  // links.value = [{ url: "https://google.com" }, { url: "https://amazon.nl" }];
  console.log(links)
});
</script>
