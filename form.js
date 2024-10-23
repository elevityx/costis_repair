// form.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('quoteForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMsgBox = document.getElementById('formMsgBox');

    // Enable submit button only if all fields are valid
    contactForm.addEventListener('input', function () {
        const isFormValid = contactForm.checkValidity();
        submitBtn.disabled = !isFormValid;
        submitBtn.classList.toggle('form-button-disabled', !isFormValid);
    });

    // Handle form submission
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        if (contactForm.checkValidity()) {
            // Prepare the payload in the structure needed
            const formData = {
                domainName: "costisappliancerepair.com",
                resellerId: 1,
                websiteId: "00000000-0000-0000-0000-000652800987",
                elementId: "692985213",
                subject: "costisappliancerepair.com Contact: Form Submission",
                formFields: [
                    {
                        label: "Full Name:",
                        value: contactForm.name.value,
                        type: "input"
                    },
                    {
                        label: "Email Address:",
                        value: contactForm.email.value,
                        type: "email"
                    },
                    {
                        label: "Appliance to be Serviced:",
                        value: contactForm.appliance.value,
                        type: "input"
                    },
                    {
                        label: "Additional Details:",
                        value: contactForm.message.value,
                        type: "paragraph"
                    }
                ],
                hostPageUrl: window.location.href
            };

            // Send the payload to the backend using fetch()
            fetch('https://sitesupport-v7.websitetonight.com/api/CustomFormMailer/Submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                // Show success message
                formMsgBox.style.display = 'block';
                formMsgBox.textContent = 'Thank you for contacting us! We will get back to you as soon as possible.';
                contactForm.reset();
                submitBtn.disabled = true;
                submitBtn.classList.add('form-button-disabled');
            })
            .catch(error => {
                // Show error message
                formMsgBox.style.display = 'block';
                formMsgBox.textContent = 'An error occurred while submitting the form. Please try again later.';
            });
        }
    });
});
