<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
import { createPinia } from 'pinia';
import { useNuxtApp } from '#app';

const nuxtApp = useNuxtApp();
const pinia = createPinia();
nuxtApp.vueApp.use(pinia);
</script>

<style scoped>
</style>