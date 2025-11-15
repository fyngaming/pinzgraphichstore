// --- Import Firebase ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Konfigurasi Firebase
const firebaseConfig = { 
  apiKey: "AIzaSyCw76aI_vHuLlDgsWUVZrweLds5rfQmbJ0",
  authDomain: "pinzgraphichsstore-6a0fc.firebaseapp.com",
  projectId: "pinzgraphichsstore-6a0fc",
  storageBucket: "pinzgraphichsstore-6a0fc.firebasestorage.app",
  messagingSenderId: "155848022513",
  appId: "1:155848022513:web:d855d68e474760df5a4c50",
  measurementId: "G-R1GJ42LXXB"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- Login Email & Password ---
const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('isLoggedIn', 'true'); // Set login status
      alert("Login berhasil: " + user.email);
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login gagal: " + error.message);
    });
});

// --- Login dengan Google ---
const googleBtn = document.querySelector(".btn-social.google");

googleBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem('isLoggedIn', 'true'); // Set login status
      localStorage.setItem('userProfilePic', user.photoURL); // Store profile picture
      alert("Login Google berhasil: " + user.email);
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login Google gagal: " + error.message);
    });
});


