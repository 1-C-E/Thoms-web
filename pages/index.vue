<script setup lang="ts">
import PageLayout from "~/layouts/AppHeader.vue";
import AppBanner from "~/layouts/AppBanner.vue";
import AppArticles from "~/layouts/AppArticles.vue";
import AppProduct from "~/layouts/AppProduct.vue";
</script>

<template>
  <PageLayout>

    <AppBanner/>
    <AppArticles/>
    <AppProduct/>

  </PageLayout>
</template>
