Login Logic:

When the user clicks the login button, the JavaScript checks if the username is 'user' and the password is 'password'.
If the credentials match, it stores the login status in localStorage (localStorage.setItem('isLoggedIn', 'true')), simulating user authentication.
After successful login, the user is redirected to the search page (index.html).
Search Page Check:

When the search page (index.html) loads, the JavaScript checks if the user is logged in by looking for the value 'true' in localStorage under the key 'isLoggedIn'.
If the user isn't logged in, an alert is shown, and they are redirected back to the login page.
If the user is logged in, the search functionality works as described in the previous setup.
Search Functionality:

This is the same as before: when the search button is clicked, the script checks if a valid UK postcode has been entered. If so, it processes the search; otherwise, it prompts the user to enter a valid postcode.
Usage Flow:
Login Page (login.html):

The user enters their credentials and clicks the login button.
If successful, they are redirected to the search page.
Search Page (index.html):

If the user isn't logged in, they are redirected back to the login page.
If logged in, the user can enter a UK postcode and click the search button to perform a search.
