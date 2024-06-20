document.addEventListener('DOMContentLoaded', () => {
    // Dropdown menu
    const menuButton = document.getElementById('menuButton');
    const navUl = document.querySelector('nav ul');

    menuButton.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Form validation (you already have this part)
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const name = document.getElementById('name').value;
        const nameError = document.getElementById('nameError');
        if (name.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.visibility = 'visible';
            valid = false;
        } else {
            nameError.style.visibility = 'hidden';
        }

        const favoriteCar = document.getElementById('favorite-car').value;
        const favoriteCarError = document.getElementById('favoriteCarError');
        if (favoriteCar.trim() === '') {
            favoriteCarError.textContent = 'Favorite car is required';
            favoriteCarError.style.visibility = 'visible';
            valid = false;
        } else {
            favoriteCarError.style.visibility = 'hidden';
        }

        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Invalid email format';
            emailError.style.visibility = 'visible';
            valid = false;
        } else {
            emailError.style.visibility = 'hidden';
        }

        const message = document.getElementById('message').value;
        const messageError = document.getElementById('messageError');
        if (message.trim() === '') {
            messageError.textContent = 'Message is required';
            messageError.style.visibility = 'visible';
            valid = false;
        } else {
            messageError.style.visibility = 'hidden';
        }

        if (valid) {
            // Redirect to form_validation.html with success parameter
            window.location.href = '/form_validation.html?success=true';
        } else {
            // Redirect to form_validation.html with error parameter
            window.location.href = '/form_validation.html?success=false';
        }
    });
});
