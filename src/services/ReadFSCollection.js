import { db } from "../lib/init-firebase";
import { collection, getDocs } from "firebase/firestore";

export const getCollectionData = (collectionName) => {
  const collectionRef = collection(db, collectionName);

  const result = getDocs(collectionRef)
    .then((res) => {
      const docsData = res.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));

      return docsData;
    })
    .catch((error) => {
      console.log(error);
    });
};
