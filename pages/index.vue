<script setup lang="ts">
import PageLayout from "~/layouts/AppHeader.vue";
import AppBanner from "~/components/AppBanner.vue";
import AppArticles from "~/components/AppArticles.vue";
import AppProduct from "~/components/AppProduct.vue";
</script>

<template>
  <PageLayout>

    <AppBanner/>
    <AppArticles/>
    <AppProduct/>

  </PageLayout>
</template>
