/**
// Simulated API call function that returns a Promise
function fetchGuests() {
    // ... (same as before)
  }
  
  // Handle the guest addition form submission
  const addGuestForm = document.getElementById("add-guest-form");
  addGuestForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const guestNameInput = document.getElementById("guest-name");
    const attendingCheckbox = document.getElementById("attending");
    
    const guestList = document.getElementById("guest-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${guestNameInput.value} (${attendingCheckbox.checked ? 'Attending' : 'Not Attending'})`;
    guestList.appendChild(listItem);
    
    guestNameInput.value = "";
    attendingCheckbox.checked = true;
  });
  
  // Fetch guests and handle the result
  fetchGuests()
    .then(guests => {
      const guestList = document.getElementById("guest-list");
      guests.forEach(guest => {
        const listItem = document.createElement("li");
        listItem.textContent = `${guest.name} (${guest.attending ? 'Attending' : 'Not Attending'})`;
        guestList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error:", error);
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "An error occurred while fetching the guest list.";
      document.body.appendChild(errorMessage);
    });
    **/


    document.addEventListener("DOMContentLoaded", function () {
        const counselingContent = document.querySelector(".counseling-content");
      
        const counselingText = `
          We deal in a world full of transformation and logic. We remove self-doubt and help evaluate why you should be motivated to be. The world might tend to push you to the ground, but don't forget that there is nothing greater than believing in yourself.
        `;
      
        counselingContent.innerHTML = `
          <p class="text-center"><em>${counselingText}</em></p>
        `;
      });
      
  