
  function signInRegular(){
    var email = document.getElementById('auth_email').value;
    var password = document.getElementById('auth_password').value;
    if (email.length < 4) {
      authSetErrorMsg('Please enter an email');
      return;
    }
    if (password.length < 6) {
      authSetErrorMsg('Please enter a password with 6 or more characters');
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      if (error.code) {
        authSetErrorMsg(error.message);
        console.log(error.message);
      } else {
        console.log('good signn');
      }
    });
  };

  function forgotPasswordRegular(){
    var email = document.getElementById('auth_email').value;
    if (email.length < 4) {
      authSetErrorMsg('Please enter an email');
      return;
    }

    /*firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      if (error.code) {
        authSetErrorMsg(error.message);
        console.log(error.message);
      } else {
        console.log('good signn');
      }
    });*/
    firebase.auth().sendPasswordResetEmail(email).then(function() {
    console.log('good forgot');
    $('#forgot-confirm').modal('show');
    }).catch(function(error) {
    authSetErrorMsg(error.message);
    });
  };







function signUpRegular() {
  var email = document.getElementById('auth_email').value;
  var password = document.getElementById('auth_password').value;
  if (email.length < 4) {
    authSetErrorMsg('Please enter an email');
    return;
  }
  if (password.length < 6) {
    authSetErrorMsg('Please enter a password with 6 or more characters');
    return;
  }
  // Sign up with email and pass.
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    if (error.code) {
      authSetErrorMsg(error.message);
      console.log(error.message);
    } else if (!error.code) {
      console.log('good signup');
    }
  });
  // [END createwithemail]
};

function authSetErrorMsg(errormsg) {
  $('#auth_errorText').removeAttr( "hidden" );
  $('#auth_errorText').text( errormsg );
};

$(document).ready(function() {
  firebase.auth().onAuthStateChanged(function (user) {
      // handle it
    user = firebase.auth().currentUser;
    console.log(user);
    if(user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // console.log('SESSION1: '+uid+" = "+email);
      sessionRedirect(user);
      // loginSessionRedirect(user);

    } else {
      // console.log('SESSION1: '+user);
    };
    console.log('SESSION : '+uid+" = "+email);
    navBarLoad();
    // writeUserData(user.uid, 'test', user.email );
  });
});


// function writeUserData(userId, name, email) {
  // console.log('writing data....');
  // firebase.database().ref('users/' + userId).set({
  //   username: name,
  //   email: email
  // });
  // // firebase.database().goOffline()
  // database.goOffline()
// }

// function writeUserData(userId, name, email) {
// var xhr = new XMLHttpRequest();
//
// var address = 'https://somiibo-91d13.firebaseio.com/users/'+userId+'/email'+'.json'
// console.log('getting it from '+address);
// xhr.open("GET", address, true);
// xhr.onload = function(){
//     console.log("Got data from my Firebase backend: "+xhr.response);
// };
// xhr.send();
// }

function writeUserData(userId, name, email) {
  // firebase.database().ref('users/').once('value', function(snap){
  //     console.log(JSON.stringify(snap.val()))
  // })
  // console.log('GETTING');
  // firebase.database().ref('/users').once('value', function(snap){
  //     console.log("@GETTING"+JSON.stringify(snap.val()))
  // })
  // firebase.database().ref('/users/').once('value', function(snap){
  //     console.log("2@GETTING"+JSON.stringify(snap.val()))
  // })

  //WORKING
  // firebase.database().ref('/users/'+userId).once('value', function(snap){
  //     console.log("5@GETTING"+JSON.stringify(snap.val()))
  //     firebase.database().goOffline()
  // })

  //###THE ONE
  // var userId = firebase.auth().currentUser.uid;
  // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //   console.log("7@GETTING"+JSON.stringify(snapshot.val()))
  // firebase.database().goOffline()
  //
  // });

  // ref.child('users').orderByChild('email').equalTo('kwest@gmail.com').once('value', callback);

  // firebase.database().ref('/users/'+userId).once('value', function(snap){
  //     console.log("7@GETTING"+JSON.stringify(snap.val()))
  //     // firebase.database().goOffline()
  // })
  // console.log("TRY THIS: "+firebase.database().ref('/users').once('value');
}

//read
// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });



function sessionRedirect() {
  var pageValEl = document.getElementById('page-id')
  var testExist = (pageValEl == null)

  if (!testExist) {
    console.log('EXISTS');
    var pageValKey = document.getElementById('page-id').dataset.pageval;
    if (pageValKey == 'signin') {
      window.location.href = 'https://somiibo.com'
    } else if (pageValKey == 'signup') {
      window.location.href = 'https://somiibo.com/confirmation/'
    }
  }

}

function navBarLoad() {
  user = firebase.auth().currentUser;
  if (user) {
    // $('#btn-login').addClass('hide');
    $('#btn-login').hide();
    $('.btn-login').hide();

    $('#btn-signup').hide();
    $('.btn-signup').hide();

    $('#btn-signup-block').hide();
    $('.btn-signup-block').hide();


    $('#btn-profile').show();
    $('#btn-profile #btn-profile-name').text(user.email);
    $('.btn-profile').show();
    $('.btn-profile .btn-profile-name').text(user.email);

  } else {
    // $('#btn-login').removeClass('hide');
    $('#btn-login').show();
    $('.btn-login').show();
    // $('#btn-signup').removeClass('hide');
    $('#btn-signup').show();
    $('.btn-signup').show();

    $('#btn-signup-block').show();
    $('.btn-signup-block').show();
    // $('#btn-profile').addClass('hide');
    $('#btn-profile').hide();
    $('.btn-profile').hide();
  }

};


$('body').on('click', "#btn-signin", function() {
  signInRegular();
});

$('body').on('click', "#btn-signup", function() {
  signUpRegular();
});
