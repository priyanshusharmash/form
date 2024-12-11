// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGPCx12XmGsNUwSbYXsbsnTYcIAeEDVj0",
  authDomain: "html-form-7c715.firebaseapp.com",
  databaseURL: "https://html-form-7c715-default-rtdb.firebaseio.com",
  projectId: "html-form-7c715",
  storageBucket: "html-form-7c715.firebasestorage.app",
  messagingSenderId: "995606021827",
  appId: "1:995606021827:web:9cd57066f76e3a52720476",
  measurementId: "G-9R0XFBZH8Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
// Reference the form
const form = document.getElementById('dataForm');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save form data to Realtime Database
    const newEntryKey = database.ref().child('formData').push().key;
    database.ref('formData/' + newEntryKey).set({
        name: name,
        email: email
    }).then(() => {
        alert('Data submitted successfully!');
        form.reset(); // Reset the form after submission
    }).catch((error) => {
        alert('Error submitting data: ' + error.message);
    });
});
