document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".feedback-form");
    const emailInput = form.querySelector("input[name='email']");

    emailInput.addEventListener('change', updateFormData);

    function updateFormData() {
        const formData = {
            email: emailInput.value.trim(),
            message: form.querySelector("textarea[name='message']").value.trim()
        };
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }

    form.addEventListener("submit", function(evt) {
        evt.preventDefault();
        const submitFormData = {
            email: emailInput.value.trim(),
            message: form.querySelector("textarea[name='message']").value.trim()
        };
        
        if (submitFormData.email === "" || submitFormData.message === "") {
            return alert("All form fields must be filled in");
        }
        
        console.log(submitFormData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    });
});

