	function myCall() {
		var request = $.ajax({
			url: "/php/ajax.php",
			type: "GET",			
			dataType: "html"
		});

		request.success(function(msg) {
			$("#myBox").html(msg);			
		});

		request.fail(function(jqXHR, textStatus) {
			alert( "Request failed: " + textStatus );
		});
	}