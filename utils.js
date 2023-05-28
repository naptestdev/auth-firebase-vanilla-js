import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

export const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then(() => {
      location.hash = "/";
    })
    .catch((error) => {
      alert(error.code);
    });
};
