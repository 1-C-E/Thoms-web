<script setup>
const email = ref();
const password = ref();

const signup = async () => {
  console.log('test')
}
</script>

<template>
  <div>
    <h1>Sign Up</h1>
    <form>
      <h2>email</h2>
      <input type="email" placeholder="email" v-model="email"/>

      <h2>password</h2>
      <div>
        <input type="password" placeholder="password" v-model="password"/>
      </div>
      <button @click="signup">signup</button>
    </form>
  </div>
</template>
