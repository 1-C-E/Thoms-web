<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRouter} from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Successfully registered!");
        router.push('/index')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error - message);
      });
};

const signInWithGoogle = () => {

}

</script>

<template>
  <h1>Create an Account</h1>
  <form>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p>
      <button @click="register">Submit</button>
    </p>
    <p>
      <button @click="signInWithGoogle">Sign In With Google</button>
    </p>
  </form>
</template>
