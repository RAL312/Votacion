import { doc, onSnapshot } from '@firebase/firestore';
import { db } from './Firebase/firebaseConfig';

export const subscribeToTextChanges = (callback) => {
  const textoDocRef = doc(db, 'textos', '1');

  return onSnapshot(textoDocRef, (docSnap) => {
    const data = docSnap.data();
    callback(data.texto);
  });
};
