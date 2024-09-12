<script setup lang="ts">
const city = ref(false)

const choice = [
  {id: 1, label: 'Балаково'},
  {id: 2, label: 'Ижевск'},
  {id: 3, label: 'Королев'},
  {id: 4, label: 'Москва'},
  {id: 5, label: 'Мытищи'},
  {id: 6, label: 'Фрязино'},
  {id: 7, label: 'Чебоксары'},
  {id: 8, label: 'Щелково'},
]

const selected = ref([])
</script>


<template>
  <div class="mb-[55px]">
    <section class="flex">
      <nav class="flex justify-end space-x-[30px]">

        <nuxt-link to="/messages" class="nav-component">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 ml-auto mr-auto">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
          </svg>
          <div> сообщения</div>
        </nuxt-link>

        <nuxt-link to="/basket" class="nav-component">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 ml-auto mr-auto">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
          </svg>
          <div> корзина</div>
        </nuxt-link>

        <nuxt-link to="/profile" class="nav-component">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 ml-auto mr-auto">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
          </svg>
          <div> профиль</div>
        </nuxt-link>

        <nuxt-link to="/selection" class="nav-component">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 ml-auto mr-auto">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
          </svg>
          <div> подбор</div>
        </nuxt-link>

      </nav>
    </section>

    <section>
      <UButton label="Укажите ваше местоположение" @click="city = true" color="white" class="float-right mt-[20px] mb-[20px] px-[15px] py-[8px] rounded-[15px] bg-gradient-to-r from-[#7875FF] to-[#00A3FF]" />
      <UModal v-model="city">
        <UCommandPalette
            v-model="selected"
            nullable
            :groups="[{ key:'choice',commands: choice}]"
        />
      </UModal>
    </section>

  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #7875FF;
}

</style>
