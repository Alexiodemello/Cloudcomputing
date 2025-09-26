// Simple form validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Example demo login (you’ll connect to backend later)
  if (email === "test@bizdesk.com" && password === "123456") {
    alert("Login successful");
    window.location.href = "home.html"; // redirect to homepage
  } else {
    alert("Invalid email or password");
  }
});
