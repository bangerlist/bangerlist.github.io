(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCf865M75QLYzGczbBeHbrX6_BEDV8pDic",
    authDomain: "bangerlist-d8359.firebaseapp.com",
    databaseURL: "https://bangerlist-d8359.firebaseio.com",
    storageBucket: "bangerlist-d8359.appspot.com",
    messagingSenderId: "990833137246"
  };
  firebase.initializeApp(config);
  
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  
  //login event
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    const promise = auth.signInWithEmailAndPassword(email, pass);
    
    promise.catch(e => console.log(e.message));
  });
}());
