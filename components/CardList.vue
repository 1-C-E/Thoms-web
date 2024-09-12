<script setup lang="ts">
const onClickAdd = () => {
  alert('Добалено')
}
</script>


<template>
  <div>
    <p class="mt-[100px] text-[32px] font-[500] text-[#000000]">
      Товары
    </p>

    <section class="flex justify-between">
      <Card
          title="Стол письменный комп"
          :price="3349"
          :is-added="true"
          :onClickAdd="onClickAdd"/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </section>
  </div>
</template>
