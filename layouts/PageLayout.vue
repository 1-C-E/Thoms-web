<template>
  <div class="ml-[100px] mr-[100px]">
    <AppHeader/>
    <slot/>
  </div>
</template>
<script setup lang="ts">
import AppHeader from "~/layouts/AppHeader.vue";
</script>