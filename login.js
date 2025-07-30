window.addEventListener("DOMContentLoaded", function() {
    const loginbtn = document.getElementById("sendbtn");

    loginbtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }

        let storedEmail = localStorage.getItem("signupEmail");
        let storedPassword = localStorage.getItem("signupPassword");

        if (!storedEmail || !storedPassword) {
            alert("No user found. Please sign up first.");
            return;
        }

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            // Redirect to homepage
            window.location.href = "./homepage.html";
        } else {
            alert("Invalid email or password.");
        }
    });
});