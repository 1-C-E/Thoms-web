// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  modules: ['@nuxt/ui', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',  '~/assets/globals.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


})

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6g56j4FKoBFWnRtfJQXegQi9GpeFXUas",
  authDomain: "thoms-6fcb4.firebaseapp.com",
  projectId: "thoms-6fcb4",
  storageBucket: "thoms-6fcb4.appspot.com",
  messagingSenderId: "554867078671",
  appId: "1:554867078671:web:ad2baa334fa302a7fb557a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
