<script>
const client = useSupabaseAuthClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref(null);

async function SignIn() {
  try {
    const {error} = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if (error) throw error;
    router.push("/messages");
  } catch (error) {
    errorMsg.value = error.message
  }
}
</script>