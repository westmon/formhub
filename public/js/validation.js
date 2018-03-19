$(document).on("click", "submit", function(event) {

// $("#submit_form").on("click", function (event){
	event.preventDefault();
	// console.log("are u working?");

	var completed = false;

	// if ($("#FirstName").val().trim().length > 1 && $("#MiddleName").val().trim() && )
	var value = {
		vals: {
			fullname : $("#fullname").val().trim(),
			email : $("#email").val().trim(),
			website : $("#website").val().trim(),
			digits: $("#digits").val().trim(),
			number: $("#number").val().trim(),
			data-phone: $("#data-phone").val().trim()

		},
		completed: completed
	}
	setRoute("validation")
		// selectGender: $("select.ptGenderForm:checked").val().trim()
	

	$.post("/api/form/validation", valu).done(function(data){
		console.log(data);
	});
	$("#fullname").val("");
	$("#email").val("");
	$("#website").val("");
	$("#digits").val("");
	$("#number").val("");
	$("#data-phone").val("");


	function setRoute(route){
		var d = new Date();
		d.setTime(d.getTime() + (30*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
	}
});