const firebaseConfig = {
  apiKey: "AIzaSyBLD8AMhdP5JWDREXYvLL6UjsDYp6IlgUU",
  authDomain: "chat-31ec1.firebaseapp.com",
  databaseURL: "https://chat-31ec1-default-rtdb.firebaseio.com",
  projectId: "chat-31ec1",
  storageBucket: "chat-31ec1.appspot.com",
  messagingSenderId: "48002190365",
  appId: "1:48002190365:web:96e5093f48b4b17fdb4af4",
  measurementId: "G-QF7PYTEKEF"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var last_name = getElementVal("last_name");
  var age = getElementVal("age");
  var number = getElementVal("number");
  var number = getElementVal("social");

  saveMessages(name, emailid, msgContent,last_name,age,number,social);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent,last_name,age,number,social) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    last_name: last_name,
    age: age,
    number: number,
    social: social,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
