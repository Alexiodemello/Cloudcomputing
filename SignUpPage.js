document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userType = document.getElementById("userType").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (!userType || !name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match ❌");
    return;
  }

  // Demo action (later connect with backend)
  alert(`Account created successfully 🎉\nWelcome ${name} as a ${userType}!`);

  // Redirect back to login
  window.location.href = "index.html";
});