<script setup>
const email = ref();
const password = ref();

const signup = async () => {
  console.log('test')
}
</script>

<template>
  <div class="mb-[50px]">
    <h1 class="text-[#000000]">Sign Up</h1>
    <form>
      <h2 class="text-[#000000]">email</h2>
      <input type="email" placeholder="email" v-model="email"/>

      <h2 class="text-[#000000]">password</h2>
      <div>
        <input type="password" placeholder="password" v-model="password"/>
      </div>
      <button @click="signup" class="text-[#000000]">signup</button>
    </form>
  </div>
</template>
