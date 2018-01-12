$(document).ready(function()
 {
    // Inicializar la base de datos
   

    var config = {
        apiKey: "AIzaSyBrzy_DeH15B9jdEQBD40kFAo1Egw1tVNk",
    authDomain: "veigapp-e9b22.firebaseapp.com",
    databaseURL: "https://veigapp-e9b22.firebaseio.com",
    projectId: "veigapp-e9b22",
    storageBucket: "veigapp-e9b22.appspot.com",
    messagingSenderId: "465534514371"
      };
      firebase.initializeApp(config);



      var provider = new firebase.auth.GoogleAuthProvider();
        $('.btn-google').click(function(){
          
            
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        })
   



    
    
    

});