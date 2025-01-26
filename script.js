document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        clearErrors();

        let isValid = true;

        // Validate First Name
        const firstName = document.getElementById("firstName").value;
        const firstNameError = document.getElementById("firstNameError");
        const firstNamePattern = /^[A-Za-z]+$/;
        if (!firstName.trim()) {
            firstNameError.textContent = "This Field is required.";
            firstNameError.style.display = "block";
            isValid = false;
        } else if (!firstNamePattern.test(firstName)) {
            firstNameError.textContent = "Please enter a valid first name (letters only).";
            firstNameError.style.display = "block";
            isValid = false;
        }

        // Validate Last Name
        const lastName = document.getElementById("lastName").value;
        const lastNameError = document.getElementById("lastNameError");
        const lastNamePattern = /^[A-Za-z]+$/;
        if (!lastName.trim()) {
            lastNameError.textContent = "This Field is required.";
            lastNameError.style.display = "block";
            isValid = false;
        } else if (!lastNamePattern.test(lastName)) {
            lastNameError.textContent = "Please enter a valid last name (letters only).";
            lastNameError.style.display = "block";
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById("email").value;
        const emailError = document.getElementById("emailError");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        } 

        // Validate Query Type (radio buttons)
        const queryType = document.querySelector('input[name="queryType"]:checked');
        const queryTypeError = document.getElementById("queryTypeError");
        if (!queryType) {
            queryTypeError.textContent = "Please select a query type.";
            queryTypeError.style.display = "block";
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById("message").value;
        const messageError = document.getElementById("messageError");
        if (!message.trim()) {
            messageError.textContent = "This Field is required.";
            messageError.style.display = "block";
            isValid = false;
        }

        // Validate Consent Checkbox
        const consent = document.getElementById("consent").checked;
        const consentError = document.getElementById("consentError");
        if (!consent) {
            consentError.textContent = "To submit this form,please consent to being contacted.";
            consentError.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            setTimeout(function () {
                alert("Form submitted successfully!");
                form.reset();
            }, 2000);
        }
    });

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach(error => {
            error.textContent = "";
            error.style.display = "none";
        });
    }
});
