//login

 function loginUser() {     
   FB.login(function(response) {
     if (response.authResponse) {
       alert("hello!");
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
       $('.facebook').append('<p>Connected with FB</p>'); 
     });
     } else {
       console.log('User cancelled login or did not fully authorize.');
       $('.facebook').append('<p>Not connected with FB</p>');  
     }
   }, {scope:'email'});
 }

 function logoutUser(){
   FB.logout();
 }

 function getStatusUser() {
   // determine if a user has authenticated the app:
   // verify the status of the user in order to be able for do comments, share, invite friends
  
   FB.getLoginStatus(function(response) {
  
     if (response.status === 'connected') {
       // the user is logged in and has authenticated your
       // app, and response.authResponse supplies
       // the user's ID, a valid access token, a signed
       // request, and the time the access token 
       // and signed request each expire
       // make further calls to the Facebook APIs
          
       var uid = response.authResponse.userID;
       var accessToken = response.authResponse.accessToken;
          
     } else if (response.status === 'not_authorized') {
       // the user is logged in to Facebook, 
       // but has not authenticated your app ?
   
      alert("Not authorized user! ");
         
     } else {
       alert("not logged in to fb! ");  
       // the user isn't logged in to Facebook.
     }
   }, true);   
 } 

 function testFBAPI() {
   console.log('Welcome!  Fetching your information.... ');
   FB.api('/me', function(response) {
     console.log('Good to see you, ' + response.name + '.');
   });
}
