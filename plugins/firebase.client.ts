import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyD6g56j4FKoBFWnRtfJQXegQi9GpeFXUas",
        authDomain: "thoms-6fcb4.firebaseapp.com",
        projectId: "thoms-6fcb4",
        storageBucket: "thoms-6fcb4.appspot.com",
        messagingSenderId: "554867078671",
        appId: "1:554867078671:web:ad2baa334fa302a7fb557a"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    return {
        provide: {
            auth,
        },
    };
});
