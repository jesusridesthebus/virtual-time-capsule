var firebaseConfig = {
  apiKey: "AIzaSyDNwXooTh0URLihSpXCaJKG52riq3PYwqo",
  authDomain: "time-capsule-12424.firebaseapp.com",
  databaseURL: "https://time-capsule-12424.firebaseio.com",
  projectId: "time-capsule-12424",
  storageBucket: "time-capsule-12424.appspot.com",
  messagingSenderId: "914523788031"
};

var timeCapsule = firebase.initializeApp(firebaseConfig);

var db = firebase.firestore(timeCapsule);

db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})

var docRef = db.collection("cities").doc("LA");


docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    }
});

function Capsule(name, timeCreated, duration) {
  this.name = name;
  this.media = ["fart", "poop", "pee"];
  this.timeCreated = timeCreated;
  this.duration = duration;
}

var firstCapsule = new Capsule("First Capsule", 0, 0);
db.collection("capsules").doc(firstCapsule.name).set({
  name: firstCapsule.name,
  timeCreated: firstCapsule.timeCreated,
  duration: firstCapsule.duration,
  media: firstCapsule.media
});
