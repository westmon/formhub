$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    var user = {
      username: $("#username").val().trim(),
      password: $("#password").val().trim()
    };
  
    $.post("/api/user/login", user)
      .done(function(data) {
        // console.log("hi")
        token.set(data.token);
        formatedName.set(data.name)
        id.set(data.id)
        username.set(user.username)
        
        location.reload();
      });
  
    $("#username").val("");
    $("#password").val("");
  
    });
  