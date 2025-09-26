// Function to load header and footer into any page
function includeHTML() {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Could not fetch ${file}: ${response.statusText}`);
          }
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          el.innerHTML = `<p style="color:red;">Include error: ${err.message}</p>`;
          console.error("Include error:", err);
        });
    }
  });
}

// Run function when page loads
document.addEventListener("DOMContentLoaded", includeHTML);
