<script setup lang='ts'>
import { useThemeStore } from '../store/theme';

const themeStore = useThemeStore();
</script>
<template>
    <label class="swap swap-rotate">
    <input type="checkbox" @click="themeStore.toggle" />
    <moon />
    <sun />
    </label>
</template>