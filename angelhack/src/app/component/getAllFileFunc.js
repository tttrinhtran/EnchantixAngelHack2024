import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc, addDoc } from 'firebase/firestore';
import firebase_app from '../../util/firebase';


const storage = getStorage(firebase_app);
const firestore = getFirestore(firebase_app);
const getUserFiles = async (userId) => {
    try {
      const filesCollectionRef = collection(firestore, 'ownership', userId, 'files');
      const filesSnapshot = await getDocs(filesCollectionRef);
      const files = filesSnapshot.docs.map(doc => doc.data());
      console.log('User files:', files);
      return files;
    } catch (error) {
      console.error('Error retrieving user files:', error);
      return [];
    }
  };
  
  export default getUserFiles;