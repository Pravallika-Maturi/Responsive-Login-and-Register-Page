$(document).ready(function () {
    $("#RightToLeft").on("click", function () {
        $("#slide").animate({
            marginLeft: "0",
        });
        $(".top").animate({
            marginLeft: "100%",
        });
    });

    $("#LeftToRight").on("click", function () {
        $("#slide").animate({
            marginLeft: "50%",
        });
        $(".top").animate({
            marginLeft: "0",
        });
    });

    $("#signup-button").on("click", function () {
        let email = $("#signup-email").val().trim();
        let password = $("#signup-password").val().trim();
        
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Sign Up successful!");
            // You can add your form submission logic here
        }
    });

    $("#login-button").on("click", function () {
        let email = $("#login-email").val().trim();
        let password = $("#login-password").val().trim();
        
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Login successful!");
            // You can add your form submission logic here
        }
    });
});
