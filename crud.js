
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyB7pnguZ5y014L2Wt3HCBKmsghvu3V65f0",
    authDomain: "baybiz-76901.firebaseapp.com",
    databaseURL: "https://baybiz-76901.firebaseio.com",
    projectId: "baybiz-76901",
    storageBucket: "baybiz-76901.appspot.com",
    messagingSenderId: "594632379986"
})


const db = firebase.firestore();

// const settings = {timestampsInSnapshots: true};

// db.settings(settings);


const biz = [
    {
        'name': 'Ebis Hotel',
        'address': {
            'street': 'No 10 Isaac Boro Express Way',
            'city': 'Yenagoa',
            'LGA': 'Yenagoa',
            'state': 'Bayelsa',
            'zipcode': '560213',
            'country': 'Nigeria'
        },
        'phoneNo': '08138151195',
        'manager': {
            'firstname': 'Queen',
            'lastname': 'Ebikon',
            'phoneNo': '08138591185',
            'email': 'rubyqueen@gmail.com'
        },
        'email': 'ebishotel@gmail.com',
        'website': 'www.ebishotel.com',
        'gpslocation': {
            'latitude': '12123476',
            'longitude': '32456527'
        },
        'iconUrl': '',
        'photos': ['', ''],
        'categories':['HOTELS', 'NIGHTLIFE'],
        'id': 1
},
{
    'name': 'Collins Restaurant',
    'address': {
        'street': 'No 10 Isaac Boro Express Way',
        'city': 'Yenagoa',
        'LGA': 'Yenagoa',
        'state': 'Bayelsa',
        'zipcode': '560213',
        'country': 'Nigeria'
    },
    'phoneNo': '08138151195',
    'manager': {
        'firstname': 'Queen',
        'lastname': 'Ebikon',
        'phoneNo': '08138591185',
        'email': 'rubyqueen@gmail.com'
    },
    'email': 'ebishotel@gmail.com',
    'website': 'www.ebishotel.com',
    'gpslocation': {
        'latitude': '12123476',
        'longitude': '32456527'
    },
    'iconUrl': '',
    'photos': ['', ''],
    'categories':['RESTAURANT', 'FOOD'],
    'id': 2
},
{
    'name': 'Alabo Cinema',
    'address': {
        'street': 'No 10 Isaac Boro Express Way',
        'city': 'Yenagoa',
        'LGA': 'Yenagoa',
        'state': 'Bayelsa',
        'zipcode': '560213',
        'country': 'Nigeria'
    },
    'phoneNo': '08138151195',
    'manager': {
        'firstname': 'Queen',
        'lastname': 'Ebikon',
        'phoneNo': '08138591185',
        'email': 'rubyqueen@gmail.com'
    },
    'email': 'ebishotel@gmail.com',
    'website': 'www.ebishotel.com',
    'gpslocation': {
        'latitude': '12123476',
        'longitude': '32456527'
    },
    'iconUrl': '',
    'photos': ['', ''],
    'categories':['CINEMA', 'NIGHTLIFE'],
    'id': 3
},
{
    'name': 'Torama Technology Hub',
    'address': {
        'street': 'No 10 Isaac Boro Express Way',
        'city': 'Yenagoa',
        'LGA': 'Yenagoa',
        'state': 'Bayelsa',
        'zipcode': '560213',
        'country': 'Nigeria'
    },
    'phoneNo': '08138151195',
    'manager': {
        'firstname': 'Queen',
        'lastname': 'Ebikon',
        'phoneNo': '08138591185',
        'email': 'rubyqueen@gmail.com'
    },
    'email': 'ebishotel@gmail.com',
    'website': 'www.ebishotel.com',
    'gpslocation': {
        'latitude': '12123476',
        'longitude': '32456527'
    },
    'iconUrl': '',
    'photos': ['', ''],
    'categories':['HOTELS', 'NIGHTLIFE'],
    'id': 4
},
{
    'name': 'Ebis Hotel',
    'address': {
        'street': 'No 10 Isaac Boro Express Way',
        'city': 'Yenagoa',
        'LGA': 'Yenagoa',
        'state': 'Bayelsa',
        'zipcode': '560213',
        'country': 'Nigeria'
    },
    'phoneNo': '08138151195',
    'manager': {
        'firstname': 'Queen',
        'lastname': 'Ebikon',
        'phoneNo': '08138591185',
        'email': 'rubyqueen@gmail.com'
    },
    'email': 'ebishotel@gmail.com',
    'website': 'www.ebishotel.com',
    'gpslocation': {
        'latitude': '12123476',
        'longitude': '32456527'
    },
    'iconUrl': '',
    'photos': ['', ''],
    'categories':['HOTELS', 'NIGHTLIFE'],
    'id': 5
}]

// was just playing
// function goi() {
//   biz.forEach((ot)=> {
//     console.log(ot.name, ot.manager.firstname)
//     console.log(ot)
//   });
// }


function loadBiz() {
    biz.forEach( (obj) => {
        console.log(obj.name)
        db.collection('businesses').add({
            'name': obj.name,
            'address': obj.address,
            'phoneNo': obj.phoneNo,
            'manager': obj.manager,
            'email': obj.email,
            'website': obj.website,
            'gpslocation': obj.gpslocation,
            'iconUrl': obj.iconUrl,
            'photos': obj.photos,
            'categories':obj.categories,
            'id': obj.id
        })
        .then((docRef) => {
            console.log('successful document add', docRef.id)
        })
        .catch((err) => {
            console.log('error adding documents', err)
        })
    })
}


function getAllBiz(){
    // Read All Data From Database
    db.collection('businesses').get()
    .then((snaps) => {
        snaps.docs.map((snap) => {
          console.log(snap.id, '=>', snap.data())
            console.log(snap)
        })
    })
}

function getBizByName(name){
   var query = db.collection('businesses').where('name', '==', name);
   query.get()
   .then((snaps)=>{
       if (snaps.docs.length == 0){
           console.log('no matching document')
           return
       }
        snaps.docs.map((snap) => {
            console.log(snap.id, '=>', snap.data())

        })
    })
    .catch((err) => {
        console.log('error fetching documents by name', err)
    })
}


function removeDoc(name){
    var query = db.collection('businesses').where('name', '==', name);
    query.get()
    .then((snaps)=>{
        if (snaps.docs.length == 0){
            console.log('no matching document')
            return
        }
         snaps.docs.forEach((snap) => {
             console.log('deleting' , '=>', snap.data().name)
            snap.ref.delete()
         })
     })
     .catch((err) => {
         console.log('error deleting documents by name', err)
     })
}



function getBizPhoneNo(phoneNo){
    var query = db.collection('businesses').where('phoneNo', '==', phoneNo);
    query.get()
    .then((snaps)=>{
        if (snaps.docs.length == 0){
            console.log('no matching document')
            return
        }
         snaps.docs.map((snap) => {
             console.log(snap.id, '=>', snap.data())

         })
     })
     .catch((err) => {
         console.log('error fetching documents by phone number', err)
     })
 }




//  function getBizByManagerName(manager){
//      var query = db.collection('businesses').where('items', 'array-contains', 'Queen')
//      query.get()
//      .then((snaps)=>{
//         if (snaps.docs.length == 5){
//              console.log('no matching document')
//              return
//          }
//           snaps.docs.map((snap) => {
//               console.log(snap.id, '=>', snap.data())

//           })
//       })
//       .catch((err) => {
//          console.log('error fetching documents by manager', err)
//      })
//  }

 function getBizByManagerName(firstname){
    var query = db.collection('businesses').where('manager.firstname', '==', firstname)
    query.get()
    .then((snaps)=>{
       snaps.docs.forEach(doc=>{
           console.log(doc.id, doc.data())
       })
     })
     .catch((err) => {
        console.log('error fetching documents by manager', err)
    })
}

var resFromgetByCat = []
function getBizByCat(category){
   // Get Business By Categories

    var query = db.collection('businesses').where('categories', 'array-contains', category )
    query.get()
    .then(snaps => {
        if (snaps.docs.length == 0){
            console.log('no matching field')
            return
        }

       snaps.docs.forEach(doc=> {
           let docObj = {id:doc.id, ...doc.data()}
            resFromgetByCat.push(docObj);
            //console.log(docObj)
       })
     })
     .catch((err) => {
        console.log('error fetching documents by manager', err)
    })
}

function updateField(update){
    // Add a new document in collection "businesses"
    var updateWebsite = db.collection("businesses").doc("Hb5VnON085FqSV9VQtjs");

    // Set the "website" field to 'www.tortech.com'
    return updateWebsite.update({
        website: 'www.baybiz.com'
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}
// updateField('website')
//  getBizByManagerName('Asoft')
 getBizByCat('NIGHTLIFE');
 setTimeout(() => {
     resFromgetByCat.forEach((category) => {
         console.log(category.id, category.name, category.manager.firstname, category.categories)
     })
    // console.log(resFromgetByCat[0].id,
    //  resFromgetByCat[0].name)
 }, 10000);

//getBizPhoneNo('08138151195')
//removeDoc('Ebis Hotel')
// getBizByName('Ayalla Hotel')
//getAllBiz();
// loadBiz();


