window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '338084522912937',                        // App ID from the app dashboard
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

     FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
    console.log('hellow'+ response.name);
  } else if (response.status === 'not_authorized') {
      $('#signedin').hide();
      $('#notsignedin').show();
  } else {
    window.location = 'https://www.facebook.com/index.php';
  }
 });
  };


    // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
  
  function doLogin(){
  FB.login(function(response) {
      console.log(response.name);
      $('#signedin').show();
      $('#notsignedin').hide();
         }, {scope: 'email,user_likes'});  
  }
  