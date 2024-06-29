import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../util/firebase"; // Adjust the path if necessary

const getFileMetadata = async (userId) => {
  try {
    const docRef = doc(firestore, 'ownership', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

const downloadFile = async (userId) => {
  const metadata = await getFileMetadata(userId);

  if (metadata && metadata.fileURL) {
    const link = document.createElement('a');
    link.href = metadata.fileURL;
    link.download = metadata.fileName; // The name to save the file as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('File downloaded successfully.');
  } else {
    console.log('No file URL found in metadata.');
  }
};

// Usage
downloadFile('user-id'); // Replace 'user-id' with the actual user ID
