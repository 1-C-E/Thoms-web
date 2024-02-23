<script setup lang="ts">

const items = [
  '/articles/article_1.png',
  '/articles/article_2.png',
  '/articles/article_3.png',
  '/articles/article_4.png',
  '/articles/article_5.png',
]
</script>

<template>
  <div>

    <p class="mt-[30px] text-[32px] font-[500]">
      Рекомендации
    </p>

    <UCarousel v-slot="{ item }" :items="items" class="mt-[16px]">
      <nuxt-link to="/article">
        <img :src="item" width="200" height="300" draggable="false"
             class=" mr-[80px] p-[3px] border-[3px] border-[#0493FA] rounded-[20px]">
      </nuxt-link>
    </UCarousel>

  </div>
</template>
