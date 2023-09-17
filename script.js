document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  console.log(email)
  var mainContainer = document.getElementById("mainContainer");
  var verifiedCard = document.getElementById("verifiedCard");
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
  var validEmailRequired = document.getElementById("verification");
  var emailID = document.getElementById("emailID");
  if (emailRegex.test(email)) {
    mainContainer.style.display = "none";
    verifiedCard.style.display = "block";
    validEmailRequired.style.display = "none";
    emailID.innerHTML = email;
  } else {
    validEmailRequired.style.display = "block";
    validEmailRequired.classList.add("error");
    // Add a timeout to remove the shake effect after a short delay
    setTimeout(() => {
      validEmailRequired.classList.remove("error");
      validEmailRequired.style.display = "none"
      
    }, 2000); // Remove the error class after 1 second
  }
});

document.getElementById('exit').addEventListener('click', function (e) {
  e.preventDefault();
  var email = document.getElementById("email");
  var mainContainer = document.getElementById("mainContainer");
  var verifiedCard = document.getElementById("verifiedCard")
  mainContainer.style.display = "flex";
  verifiedCard.style.display = "none";
  email.value = "";
  console.log("exit clicked")
})

