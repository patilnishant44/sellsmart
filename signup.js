window.addEventListener("DOMContentLoaded", function() {
    const sendbtn = document.getElementById("sendbtn");

    sendbtn.addEventListener("click", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value;

        if (!email || !password || !confirmpassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmpassword) {
            alert("Passwords do not match.");
            return;
        }

        // Save email and password to localStorage
        localStorage.setItem("signupEmail", email);
        localStorage.setItem("signupPassword", password);

        alert("Sign up successful! Now please log in.");
       
        // window.location.href = "login.html";
    });
});