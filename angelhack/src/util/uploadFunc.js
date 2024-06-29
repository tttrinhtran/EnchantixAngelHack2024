import firebase_app from "../util/firebase";
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Initialize Firestore and Storage
const db = getFirestore(firebase_app);
const storage = getStorage(firebase_app);

// Function to add data to Firestore with file upload
export default async function addData(collection, id, data, file) {
    let result = null;
    let error = null;

    try {
        // Upload file to Firebase Storage if file is provided
        let downloadURL = '';
        if (file) {
            const storageRef = ref(storage, `files/${file.name}`);
            await uploadBytes(storageRef, file);
            downloadURL = await getDownloadURL(storageRef);
            data = { ...data, fileURL: downloadURL }; // Include download URL in Firestore data
        }

        // Set Firestore document with data and merge option
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}
