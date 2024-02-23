<script setup lang="ts">
import PageLayout from "~/layouts/PageLayout.vue";
import Banner from "~/layouts/Banner.vue";
import Articles from "~/layouts/Articles.vue";
</script>

<template>
  <PageLayout>

    <Banner/>
    <Articles/>

    <section>
      <nuxt-link to="/article">
        <div></div>
      </nuxt-link>
    </section>

  </PageLayout>
</template>
