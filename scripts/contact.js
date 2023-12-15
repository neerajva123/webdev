// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the submit button
    const submitButton = document.getElementById('submit-button');

    // Attach a click event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get a reference to the main section of the contact page
        const contactMain = document.getElementById('contact-page');

        // Create a new <p> element
        const thankYouMessage = document.createElement('p');

        // Set the text content of the <p> element
        thankYouMessage.textContent = 'Thank you for your message!';

        // Set the font size of the <p> element to 24px
        thankYouMessage.style.fontSize = '24px';

        // Clear the existing content of the contact page
        contactMain.innerHTML = '';

        // Append the new <p> element to the contact page
        contactMain.appendChild(thankYouMessage);
    });
});
