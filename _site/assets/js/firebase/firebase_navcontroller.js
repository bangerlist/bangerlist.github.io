
    //called from firebase when user logs in
    // var curUrl = window.location.href;
    // var curUrl = document.domain.split('.').reverse().splice(0,2).reverse().join('.')
    // console.log(urlCode);
    function sessionRedirect(user) {

      if (user) {
        var urlCodeExists = (typeof urlCode !== 'undefined')

        if (urlCodeExists && urlCode == 'signin') {
          window.location.href = 'https://somiibo.com'
        } else if (urlCodeExists && urlCode == 'signup') {
          window.location.href = 'https://somiibo.com/confirmation/'
        } else {
          console.log('User is logged in and on an non-redirect page ');
        }

      } else {

      }
    };

    //open navebar
    // $(document).ready(function() {
    //   $.get("navigation.html?v=2", function(data){
    //     $('#nav-bar-desktop').replaceWith(data);
    //   });
    // });

    // $(document).ready(function() {
    //     $('#nav-bar-desktop').load("http://192.168.1.6:8080//navigation.html?v=3w3");
    //
    // });
    //
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

        // document.getElementById('btn-signup').setAttribute("hidden", "false");
        // $('#btn-signup').text('asdasdasd');

        // document.getElementById('hide-2').setAttribute("hidden", "");
        // document.getElementById('hide-2').style.display = 'none';
        // document.getElementById('btn-signup').style.display = 'none';
        // console.log(document.getElementById('hide-2'));
        // console.log(document.getElementById('btn-signup'));
        // console.log(document.getElementById('btn-signup'));
        // console.log(document.getElementById('btn-signup'));
        // console.log(document.getElementById('btn-signup'));
        // $('#btn-profile').removeClass('hide');

        //console.log("SESSION2:" +user);
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
    // $('.user-login-buttons').hide();
