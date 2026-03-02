import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCe8t-wMNrf8vf1S5hYH1fnphjKiK0p2io",
  authDomain: "mrsrappedspecialist.firebaseapp.com",
  projectId: "mrsrappedspecialist",
  storageBucket: "mrsrappedspecialist.firebasestorage.app",
  messagingSenderId: "994757207680",
  appId: "1:994757207680:web:0c87278cecf386d48da865"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// This function runs automatically on every page that links to brain.js
onAuthStateChanged(auth, (user) => {
  const loginSection = document.getElementById('login-section');
  const studentContent = document.getElementById('student-content');
  const welcomeMsg = document.getElementById('welcome-msg');

  if (user) {
    if (loginSection) loginSection.style.display = 'none';
    if (studentContent) studentContent.style.display = 'block';
    if (welcomeMsg) welcomeMsg.innerText = "Welcome, " + user.displayName + "!";
    console.log("Logged in as:", user.email);
  } else {
    if (loginSection) loginSection.style.display = 'block';
    if (studentContent) studentContent.style.display = 'none';
    // If they aren't logged in and try to view an assignment, 
    // you could even redirect them back to the homepage here!
  }
});

// Make buttons work if they exist on the page
if (document.getElementById('login-btn')) {
    document.getElementById('login-btn').onclick = () => signInWithPopup(auth, provider);
}
if (document.getElementById('logout-btn')) {
    document.getElementById('logout-btn').onclick = () => signOut(auth);
}