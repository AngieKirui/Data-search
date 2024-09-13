document.addEventListener("DOMContentLoaded", function () {
  // Handle login button click
  document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login check for demonstration
    if (username === "user" && password === "password") {
      // Set login status in localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to the dashboard page
      window.location.href = "index.html";
    } else {
      document.getElementById("loginMessage").textContent =
        "Invalid username or password";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    // If not logged in, redirect to login page
    window.location.href = "login.html";
  } else {
    // CSV File Upload Handling
    const uploadForm = document.getElementById("uploadForm");
    if (uploadForm) {
      uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const csvFileInput = document.getElementById("csvFileInput");
        if (csvFileInput) {
          const file = csvFileInput.files[0];

          if (file && file.name.endsWith(".csv")) {
            alert(`File "${file.name}" uploaded successfully!`);
            document.getElementById(
              "uploadCsvMessage"
            ).textContent = `File "${file.name}" uploaded successfully!`;
            // Add your server upload logic here
          } else {
            alert("Please upload a valid CSV file.");
            document.getElementById("uploadCsvMessage").textContent =
              "Please upload a valid CSV file.";
          }
        }
      });
    }

    // Search Postcode Handling
    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
      searchButton.addEventListener("click", function () {
        const postcode = document.getElementById("postcodeInput").value;

        if (postcode) {
          alert(`Searching for postcode: ${postcode}`);
          document.getElementById(
            "searchMessage"
          ).textContent = `Searching for postcode: ${postcode}`;
          // Add your search logic here
        } else {
          alert("Please enter a valid UK postcode.");
          document.getElementById("searchMessage").textContent =
            "Please enter a valid UK postcode.";
        }
      });
    }
  }
});
