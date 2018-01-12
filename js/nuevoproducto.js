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




        $('.btn-google').click(function(){
            event.preventDefault();
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            firebase.auth().signInWithRedirect(provider).then(function(result) {
             // This gives you a Google Access Token.
             var token = result.credential.accessToken;
             // The signed-in user info.
             var user = result.user;
            });
        })
   



    
    
    

});