// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import { collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyAQXFIA51c_8Ju285AlReEIIHN09pO-MUs",
//     authDomain: "the-tour-8fc32.firebaseapp.com",
//     projectId: "the-tour-8fc32",
//     storageBucket: "the-tour-8fc32.appspot.com",
//     messagingSenderId: "549030164610",
//     appId: "1:549030164610:web:10602e77ff8efca6a9dc9b",
//     measurementId: "G-8KGT89XJXP"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const querySnapshot = await getDocs(collection(db, "creator"));
// let contactsData = []

// querySnapshot.forEach((doc) => document.getElementById("name").innerHTML = doc.data()['name']);

const total = 10;
const loop = document.getElementById("loop");
console.log(loop)

var result = "";

for (i = 0; i < total; i++) {
    result += `<div class="card">

    <div class="content">

        <h2 class="title">Angkor Wat</h2>


        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            et
            velit
            interdum, ac
            aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur
            neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
    </div>
    <div class="location">
        <div class="location_name">Seam Reap</div>
        <div class="location_type">Temple</div>
    </div>
</div> `;
}

loop.innerHTML = result;