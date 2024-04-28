const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || { email: "", message: "" };

const form = document.getElementById('feedback-form');

form.elements.email.addEventListener('change', updateFormData);
form.elements.message.addEventListener('change', updateFormData);

function updateFormData() {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener("submit", evt => {
    evt.preventDefault();
    const submitFormData = {
        email: evt.target.elements.email.value.trim(),
        message: evt.target.elements.message.value.trim()
    };
    
    if (submitFormData.email === "" || submitFormData.message === "") {
        return alert("All form fields must be filled in");
    }
    
    console.log(submitFormData);
    localStorage.removeItem("feedback-form-state");
    form.reset();
});
