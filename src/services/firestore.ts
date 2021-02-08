
// @ts-nocheck
import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDiSx2g1kzwaqy4PZDPL0PxpD3yYGLzxUg",
  authDomain: "coffee-grinder-settings.firebaseapp.com",
  projectId: "coffee-grinder-settings"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getCoffeeList = ( observer) => {
  return db.collection('coffee')
      .onSnapshot(observer);
};

export const updateCoffee = (name: string, fields: any) => {
  db.collection("coffee").doc(name).update({...fields})
}

export const updateTastingNotes = (name: string, tasting_notes: string) => {
  db.collection("coffee").doc(name).update({tasting_notes: tasting_notes})
}

export const removeCoffee = (name: string, cb: Dispatch<void>) => {
  db.collection("coffee").doc(name).delete().then(() => cb(null))
}

export const createCoffee = (name:  string) =>  {
  db.collection("coffee").doc(name).set({
    value: name,
    label: name,
    v60_setting: 1,
    aeropress_setting: 1,
    available_at_home: true,
    tasting_notes: "",
  })
}