  $("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    name: $("#name").val().trim(),
    email: $("#email").val().trim(),
    username: $("#username").val().trim(),
    password: $("#password").val().trim(),
    designation: $("#designation").val()
  };

  $.post("/api/user/new", newUser)
    .done(function(data) {
      token.set(data.token);
      id.set(data.id)
      username.set(newUser.username)
      formatedName.set(data.name)
      window.location = "/";
    });

  $("#name").val("");
  $("#email").val("");
  $("#username").val("");
  $("#password").val("");
  $("#designation").val("");

  });
