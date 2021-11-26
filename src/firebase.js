import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'test-XXXX.firebaseapp.com',
  databaseURL: 'https://test-XXXXXX.firebaseio.com',
  projectId: 'test-XXXX',
  storageBucket: 'test-XXXX.appspot.com',
  messagingSenderId: 'XXXXXXX',
  appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
