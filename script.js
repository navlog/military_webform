document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account created successfully!');
    window.location.href = 'index.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
    window.location.href = 'dashboard.html';
});

document.getElementById('logisticsForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});


.container {
    display: flex;
    flex-wrap: wrap; /* Allows content to wrap */
    justify-content: center;
}

img {
    max-width: 100%; /* Ensures images don’t overflow */
    height: auto;
}

/* Mobile screens (up to 768px) */
@media screen and (max-width: 768px) {
    .nav-links {
        display: block; /* Make nav links stack vertically */
        text-align: center;
    }

    .form-container {
        width: 90%; /* Make form take full width */
    }
}
.logo-container img {
    width: 80px; /* Adjust width as needed */
    height: auto; /* Maintain aspect ratio */
}

.logo-container img {
    max-width: 100px; /* Set max size */
    height: auto;
}

@media screen and (max-width: 768px) {
    .logo-container img {
        width: 60px; /* Smaller size on mobile */
    }
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from reloading

    const formData = new FormData(this);

    fetch("save_form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error("Error:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("Logos loaded successfully!");
});
