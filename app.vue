<script setup lang='ts'>
import "@fontsource/inter";
import "@fontsource/poppins";
import "@fontsource/space-mono";
import { useRoute } from 'vue-router';
import { useThemeStore } from "./store/theme";

const route = useRoute();
const themeStore = useThemeStore();
</script>

<template>
  <div :data-theme="themeStore.theme.dark ? 'light' : 'dark' ">
    <!-- <div class="m-2">
      Current route: <code>{{ route.path }}</code>
    </div> -->
    <NuxtLayout name="custom" />
  </div>
</template>
