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
    <p class="mt-[30px] text-[32px] font-[500] text-[#000000]">
      Рекомендации
    </p>

    <section class="flex mt-[16px]">
      <div>
        <UCarousel v-slot="{ item }" :items="items" class="w-[520px]">
          <nuxt-link to="/article" class=" mr-[30px] p-[3px] border-[3px] border-[#0493FA] rounded-[20px]">
            <img :src="item" width="150" height="168" draggable="false" class="rounded-[16px]">
          </nuxt-link>
        </UCarousel>
      </div>

      <div class="ml-[60px]">
        <nuxt-link to="/banner_2" class="ml-[30px] rounded-[20px]">
          <NuxtImg src="/banner_2.svg" class="rounded-[20px] h-[204px] absolute" />
        </nuxt-link>
      </div>
    </section>

  </div>
</template>
