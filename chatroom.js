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


firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username")
console.log(username);
document.getElementById("username").innerHTML = "Welcome " + username + "!"
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)' >#" + Room_names + "</div><hr>"
                document.getElementById("output").innerHTML += row


          });
    });
}

function addroom() {
    roomname = document.getElementById("roomname").value
    document.getElementById("roomname").value = ""
    firebase.database().ref("/").child(roomname).update({
          purpose: "adding new room"
    })
    localStorage.setItem("roomname",roomname)
    window.location="chatpage.html"
}
getData();

function redirectToRoom(id){
   localStorage.setItem("roomname",id)
    window.location="chatpage.html"
}