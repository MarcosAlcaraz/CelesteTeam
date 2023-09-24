import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

import app from '../firebase-config';

const algo = collection(db, "algoritmos");
getDocs(algo)
.then((resp) =>{
    console.log(resp.docs[0].data());
})
const titulo = document.getElementById("my-input");
const value = $(this).val();
//Create Item
export const UploadAlgo = (title,code) => {
    let pack = {
            title: input,
            code: code
    }
    //addDoc(input)
    console.log(value)
}

export const SendPreference = (itemId, uid, score) => {
    const lstRecord = app.database().ref(`All/${itemId}/lstRecord`);
    lstRecord.push({
        uid: uid,
        score: score
    });
}

export const UpdateBody = (id, newTitle, newCode) => {
    const itemRef = app.database().ref(`All/${id}/body`);
    itemRef.update({ 'title': newTitle, 'code': newCode })
}

export const DelateItem = (id) => {
    const itemRef = app.database().ref('All').child(id);
    itemRef.remove()
} 



