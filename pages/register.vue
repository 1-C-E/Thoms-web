<script setup lang="ts">
import {createUserWithEmailAndPassword} from "firebase/auth";

const {$auth} = useNuxtApp()
const email = ref('');
const password = ref('');

const handeSubmit = async () => {
  try {
    const res = await createUserWithEmailAndPassword($auth, email.value, password.value)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <h1>Create an Account</h1>
    <form @submit.prevent="handeSubmit">
      <p><input type="email" placeholder="Email" v-model="email"/></p>
      <p><input type="password" placeholder="Password" v-model="password"/></p>
      <p>
        <button type="submit">Submit</button>
      </p>
      <p>
        <button>Sign In With Google</button>
      </p>
    </form>
  </div>
</template>
