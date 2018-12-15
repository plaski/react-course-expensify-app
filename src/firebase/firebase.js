import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((error) => {
//     console.log(error)
//   });
  
//   database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'expense one',
//   note: 'note one',
//   amount: 12345,
//   createdAt: 987654321
// });



// database.ref().set({
//   name: 'maciek',
//   stressLevel: 6,
//   age: 32,
//   job: {
//     title: 'frontend dev',
//     company: 'google'
//   },
//   location: {
//     city: 'krakow',
//     country: 'poland'
//   }
// }).then(() => {
//   console.log('data saved');
// }).catch((error) => {
//   console.log('error', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'warszawa'
// });

// database.ref().remove().then(() => {
//   console.log('removed')
// }).catch((error) => {
//   console.log('error', error)
// }) 

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });

// const onDataChange = database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} in ${val.job.company}, working in ${val.location.city}`);
//   })