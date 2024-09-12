<script setup lang="ts">
import AppHeader from "~/layouts/AppHeader.vue";
import AppBanner from "~/components/Banner.vue";
import AppArticles from "~/components/Articles.vue";
import AppProduct from "~/components/CardList.vue";
import SignUp from "~/components/SignUp.vue";
</script>

<template>
  <AppHeader>
  
    <AppBanner/>
    <AppArticles/>
    <AppProduct/>
    
    <SignUp/>

  </AppHeader>
</template>
