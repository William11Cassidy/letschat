const firebaseConfig = {
    apiKey: "AIzaSyCTzZ-aNSVVyzxzHxwMwaxvU7mGjeSYn3A",
    authDomain: "kwitter-2d24b.firebaseapp.com",
    databaseURL: "https://kwitter-2d24b-default-rtdb.firebaseio.com",
    projectId: "kwitter-2d24b",
    storageBucket: "kwitter-2d24b.appspot.com",
    messagingSenderId: "239552456996",
    appId: "1:239552456996:web:611907d478b380e604ebb1",
    measurementId: "G-ES8KNV1HSF"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username")
room_name=localStorage.getItem("roomname")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
        window.location = "index.html";
    }
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value=""
    }