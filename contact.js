document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Get form input values
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        // Validate form inputs
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.'); // Show an alert if any field is empty
            return;
        }

        // Validate email format using regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.'); // Show an alert for invalid email format
            return;
        }

        // If all validations pass, prepare data for submission (e.g., send data to server or display a success message)
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // You can add further code here to handle form submission, such as sending data to a server using fetch or XMLHttpRequest
        console.log('Form data:', formData);
        alert('Your message has been successfully submitted!'); // Display a success message (you can replace this with your preferred action)
        form.reset(); // Reset the form after successful submission
    });
});
