// Validate email input
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('emailInput');
    const errorMsg = document.getElementById('error-msg');
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        errorMsg.textContent = 'Please enter a valid email address.';
    } else {
        errorMsg.textContent = '';
        // Proceed with form submission or other actions
        alert('Subscribed successfully!');
    }
});
