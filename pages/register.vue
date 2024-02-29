<script setup>

const client = useSupabaseAuthClient();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null)

async function signUp() {
  try {
    const {data, errors} = await client.auth.SignUp({
      email: email.value,
      password: password.value
    });
    if (error) throw error;
    successMsg.value = "Проверьте свою почту, чтобы заверщить регистрацию";
  } catch (error) {}
  errorMsg.value = error.message;
}
</script>

<template>
  <div>
    <form
        @submit.prevent="signUp">
      <div>регистрация</div>
    </form>
  </div>
</template>