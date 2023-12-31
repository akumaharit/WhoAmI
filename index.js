import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAByJnmkHFiY3u7LgSrKNijk345sCmjZBQ",
    authDomain: "whoami-d2445.firebaseapp.com",
    projectId: "whoami-d2445",
    storageBucket: "whoami-d2445.appspot.com",
    messagingSenderId: "481385015102",
    appId: "1:481385015102:web:2eb0d2ff3d1d0c1ce7ae6f"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const theme = doc(firestore, 'main/theme');

// let themename = 'Music';
// let themearray = ['Test1','Test2'];
// let docData = {themename: themearray}
// setDoc(theme, docData, {merge: true});

async function readDocument(){
    const mySnapshot = await getDoc(theme);
    if (mySnapshot.exists()){
        const docData = mySnapshot.data();
        const docData_JSON = JSON.stringify(docData);
        const docData_obj = JSON.parse(docData_JSON);
        const docData_obj_keys = Object.keys(docData_obj);
        return docData_obj_keys;
    }
}
let keys = readDocument();
console.log(keys)


