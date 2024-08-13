document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Create confirmation message
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const message = `Are you sure you want to submit the form?\n\n` +
                        `Name: ${name}\n` +
                        `Email: ${email}\n` +
                        `Phone Number: ${phone}\n` +
                        `Gender: ${gender}`;

        if (confirm(message)) {
            form.submit(); // Submit the form if confirmed
        }
    });
});
