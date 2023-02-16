import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbjyRWTrC1w4X7dAGNBMqSkz_YUh8mK0w',
  authDomain: 'todo-36098.firebaseapp.com',
  projectId: 'todo-36098',
  storageBucket: 'todo-36098.appspot.com',
  messagingSenderId: '331789891603',
  appId: '1:331789891603:web:9f002d4f2421b3fa32e7e6',
  measurementId: 'G-WTKEJGHXT3',
  databaseURL: 'https://todo-36098-default-rtdb.firebaseio.com/',
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firestore };
