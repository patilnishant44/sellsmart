
let sendbtn = document.getElementById("sendbtn");

  sendbtn.addEventListener("click", function() {
   
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    
    let contact = {
      name: name,
      email: email,
      message: message
    };

    
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    // Add the new contact to the array
    contacts.push(contact);

    // Save the updated array back to localStorage
    localStorage.setItem("contacts", JSON.stringify(contacts));

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Show a success message
    alert("Your message has been saved! Thank you.");

    
   
    // window.location.href = "./homepage.html";
  });