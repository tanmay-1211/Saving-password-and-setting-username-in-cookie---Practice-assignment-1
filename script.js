document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/'; // Path '/' ensures it is accessible across all pages
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2. If the cookie exists, increment the value and update the cookie
  if (count) {
    count = parseInt(count);
    count++; // Increment count
  } 
  // 3. If the cookie does not exist, create it and set the value to 1
  else {
    count = 1; // Initialize count if it doesn't exist
  }

  // 4. Update the 'count' cookie with the new value
  setCookie('count', count, 7); // Cookie expires in 7 days

  // 5. Display the updated count on the webpage (if it exists on the page)
  const countDisplay = document.getElementById('countDisplay');
  if (countDisplay) {
    countDisplay.textContent = `Count: ${count}`;
  }
});