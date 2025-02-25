function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://9ak6srunpe.execute-api.us-east-1.amazonaws.com/prod";

    var data = {
		"phonenum": $('#phonenum').val(),
        "lastname": $('#lastname').val(),
        "firstname": $('#firstname').val(),
        "email": $('#email').val(),
        "role": $('#role').val()
    };

    $.ajax({
        type: "PUT",
        url: URL,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function () {
            alert("Form submitted successfully!");
            document.getElementById("contact-form").reset();
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
            console.error("Response:", xhr.responseText);

            if (xhr.status === 405) {
                alert("Error: Method not allowed. Check API Gateway configuration.");
            } else if (xhr.status === 403) {
                alert("Error: Forbidden. Check API permissions.");
            } else if (xhr.status === 0) {
                alert("Network error. Verify your API Gateway URL.");
            } else {
                alert("Form submission failed. Please try again.");
            }
        }
    });
}