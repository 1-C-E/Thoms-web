<template>
  <PageLayout>
    <!--    <NuxtImg src="/article_1.png"/>-->
    <div class="text-[32px]">
      Рекомендации
    </div>

      <UCarousel v-slot="{ item }" :items="items">

        <img :src="item" width="200" height="300" draggable="false"
             class=" mr-[80px] p-[3px] border-[3px] border-[#0493FA] rounded-[20px]">

      </UCarousel>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "~/layouts/PageLayout.vue";

const items = [
  '/articles/article_1.png',
  '/articles/article_2.png',
  '/articles/article_3.png',
  '/articles/article_4.png',
  '/articles/article_5.png',

]

</script>