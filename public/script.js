

$(document).ready(function(){
    registerEvents();
    
    jQuery(".submit").click(function(){
        event.preventDefault();
    var request = {};
    var url  = "/users"
     if(valid(request)){
        $(".result").show();
         console.log("Posting to mongo db .... ")
      $.ajax({
          url : url ,
          type : "post",
          async : false,
          contentType : "application/json",
          dataType: 'json',
          data :JSON.stringify(request),
          success : success,
          error : error
      });
      console.log("done posting .")
     }
   });
});
function success (data) {
    debugger;
    $(".login-wrapper").show();
    $(".register_wrapper").hide();
    $(".message").text("Account has been successfully created ."); 
    if(data.token){
        localStorage.setItem('shoppyToken', data.token);
    }
    if(data._id) {
        localStorage.setItem('userId', data._id);
    }
     
}
function error (error) {
    debugger;
    const err = error.responseJSON && error.responseJSON.error ? error.responseJSON.error.message : error; 
    //$(".login-wrapper").hide();
   // $(".register_wrapper").show();  
    $(".message").text(err); 
}
function valid(object) {
    if("" == $("#fN").val()){
        console.log("first name is required .")
        return false;
    }
    if("" == $("#lN").val()){
        console.log("last name is required .")
        return false;
    }
    if("" == $("#email").val()){
        console.log("email is required .")
        return false;
    }
    object.firstName = $("#fN").val();
    object.lastName = $("#lN").val();
    object.email = $("#email").val();
    object.password = $("#pass").val();
    return true;
}
function registerEvents() {
   $(".register_wrapper").hide();
   $(".result").hide();
   $('.login').click(function(){
       let request = {
           email : $("#loginEmail").val(),
           password : $("#loginPass").val()
       };
       $.ajax({
           url : "/users/login",
           type: "post",
           contentType : "application/json",
           dataType : "json",
           data : JSON.stringify(request),
           success : success,
           error : error
       })
   });

   $('.getprofile').click(getProfile);
}
function getProfile() {
    const url =  '/users/getProfile';
    const token = localStorage.getItem('shoppyToken');
    debugger;
    return $.ajax({
      type: 'GET',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success : success,
      error : error
    });
  }