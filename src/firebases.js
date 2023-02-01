import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyDY0PYfXTInT4Geo_Hw71wnNqatsB4P8y8",
        authDomain: "unichat-1367d.firebaseapp.com",
        projectId: "unichat-1367d",
        storageBucket: "unichat-1367d.appspot.com",
        messagingSenderId: "370580381707",
        appId: "1:370580381707:web:4992d653cf9a54da2b270e"
      };
    
      const app=initializeApp(firebaseConfig);
      export const auth = getAuth(app);