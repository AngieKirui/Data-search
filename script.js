document.getElementById("searchButton").addEventListener("click", function () {
  const postcode = document.getElementById("postcodeInput").value;
  if (postcode) {
    alert(`Searching for postcode: ${postcode}`);
    // Add your search logic here
  } else {
    alert("Please enter a postcode");
  }
});
