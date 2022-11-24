// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKsheEk8y6q31MKxc2vh6FfWkCmcu0LV8",
  authDomain: "nft-metamask.firebaseapp.com",
  projectId: "nft-metamask",
  storageBucket: "nft-metamask.appspot.com",
  messagingSenderId: "650900400690",
  appId: "1:650900400690:web:d84b90e5a3530d896faa2b",
  measurementId: "G-HRQBPME9QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getNfts(db) {
  try {
    const nftsCol = collection(db, "nfts");
    const nftSnapshot = await getDocs(nftsCol);
    const nftList = nftSnapshot.docs.map((doc) => doc.data());
    console.log("nftList", nftList);
    return nftList;
  } catch (error) {
    console.log(error);
    return [];
  }
}
