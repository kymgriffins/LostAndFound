import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
// import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCTjE-V9XhLS_yNHNizwXasyRez2_Bw9OY",
    authDomain: "lost-and-found-2a3c2.firebaseapp.com",
    projectId: "lost-and-found-2a3c2",
    storageBucket: "lost-and-found-2a3c2.appspot.com",
    messagingSenderId: "910330678252",
    appId: "1:910330678252:web:fa4e1c461693020444cec9",
    measurementId: "G-GDVVRVSZXE"
  };
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;

// const actionCodeSettings = {
//     url: 'https://www.example.com/finishSignUp?cartId=1234',
   
//     handleCodeInApp: true,

//     dynamicLinkDomain: 'example.page.link'
//   };

// const auth = getAuth();
// sendSignInLinkToEmail(auth, email, actionCodeSettings)
//   .then(() => {
    
//     window.localStorage.setItem('emailForSignIn', email);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
    
//   });

//   import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

//     const auth = getAuth();

//         if (isSignInWithEmailLink(auth, window.location.href)) {
//             let email = window.localStorage.getItem('emailForSignIn');
//             if (!email) 
//             {
//                     email = window.prompt('Please provide your email for confirmation');
//             }
//     signInWithEmailLink(auth, email, window.location.href)
//         .then((result) => {
//       window.localStorage.removeItem('emailForSignIn');
//       })
//     .catch((error) => {});
// }