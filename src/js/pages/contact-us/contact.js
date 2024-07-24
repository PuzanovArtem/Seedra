document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    nameError.textContent = '';
    emailError.textContent = '';

    if (name.value.trim() === '') {
        valid = false;
        name.classList.add('red-placeholder');
        name.placeholder = 'Typing...';
        nameError.textContent = 'Name is required.';
    } else {
        name.placeholder = 'Your name';
        name.classList.remove('red-placeholder');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        email.classList.add('red-placeholder');
        email.placeholder = 'Typing...';
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        email.placeholder = 'Your email';
        email.classList.remove('red-placeholder');
    }

    if (message.value.trim() === '') {
        message.classList.add('red-placeholder');
        message.placeholder = 'Typing...';
    } else {
        message.placeholder = 'Your message';
        message.classList.remove('red-placeholder');
    }

    if (valid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
        name.placeholder = 'Your name';
        email.placeholder = 'Your email';
        message.placeholder = 'Your message';
    }
});

const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
inputs.forEach(input => {
    const originalPlaceholder = input.placeholder;

    input.addEventListener('focus', function () {
        input.placeholder = 'Typing...';
        input.classList.remove('red-placeholder');
    });

    input.addEventListener('blur', function () {
        if (input.value.trim() === '') {
            input.placeholder = originalPlaceholder;
            input.classList.add('red-placeholder');
        } else {
            input.placeholder = originalPlaceholder;
            input.classList.remove('red-placeholder');
        }
    });

    input.addEventListener('input', function () {
        input.classList.remove('red-placeholder');
    });
});
