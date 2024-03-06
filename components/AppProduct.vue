<template>
  <div>
    <p class="mt-[30px] text-[32px] font-[500]">
      Товары
    </p>

    <nuxt-link to="/product" class="rounded-[20px]">
      <div class="mt-[16px] mb-[100px] p-[4px] w-[200px] h-[250px] bg-white border-[3px] border-[#0493FA] rounded-[20px]">
        <NuxtImg src="/table_comp.png" class="w-[198px] rounded-[14px]"/>
          <h2 class="mt-[16px] text-[15px]"> Стол письменный комп</h2>
          <h2 class="mt-[20px] text-[15px]"> 3 349 руб.</h2>
      </div>
    </nuxt-link>

  </div>
</template>

<script setup lang="ts">
</script>