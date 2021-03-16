
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCa9OiKQdnuh5aofj_enVBiP1GWxbmYArA",
      authDomain: "switter-dff58.firebaseapp.com",
      projectId: "switter-dff58",
      storageBucket: "switter-dff58.appspot.com",
      messagingSenderId: "30141062735",
      appId: "1:30141062735:web:263b90a89cdf29cd14143a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout()
{
      window.location = "index.html"
}