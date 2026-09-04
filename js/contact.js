const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Remove previous error messages

    document.querySelectorAll(".error-message").forEach(function (error) {

        error.textContent = "";

    });


    // Remove previous error styles

    document.querySelectorAll("input, textarea").forEach(function (field) {

        field.classList.remove("error");

    });


    let isValid = true;


    // Name validation

    if (nameInput.value.trim() === "") {

        showError(
            nameInput,
            "Please enter your full name."
        );

        isValid = false;

    }


    // Email validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        showError(
            emailInput,
            "Please enter your email address."
        );

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        showError(
            emailInput,
            "Please enter a valid email address."
        );

        isValid = false;

    }


    // Subject validation

    if (subjectInput.value.trim() === "") {

        showError(
            subjectInput,
            "Please enter a subject."
        );

        isValid = false;

    }


    // Message validation

    if (messageInput.value.trim() === "") {

        showError(
            messageInput,
            "Please enter your message."
        );

        isValid = false;

    }


    // If all fields are valid

    if (isValid) {

        alert("Your message has been sent successfully!");

        contactForm.reset();

    }

});


/* Function to display error */

function showError(input, message) {

    const formGroup = input.parentElement;

    const errorMessage =
        formGroup.querySelector(".error-message");


    input.classList.add("error");

    errorMessage.textContent = message;

}