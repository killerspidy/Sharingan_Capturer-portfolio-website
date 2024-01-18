//to send email
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Fetch the form data
    const formData = new FormData(event.target);

    // Send a POST request to the server
    fetch('/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});