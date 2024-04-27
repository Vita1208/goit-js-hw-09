let formData = { email: "", message: "" };
const formRefs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};
const feedbackFormStateKey = 'feedback-form-state';
formRefs.form.addEventListener('input', handleFormInput);
formRefs.form.addEventListener('submit', handleSubmit);

function handleFormInput(event) {
    const { name, value } = event.target;
  formData = { ...formData, [name]: value };
  formDataToLocalStorage();
}
function formDataToLocalStorage() {
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
}
function loadFormDataFromLocalStorage() {
  const savedFormData = localStorage.getItem(feedbackFormStateKey);
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    updateFormInputs();
  }
}
function updateFormInputs() {
  formRefs.emailInput.value = formData.email;
  formRefs.messageInput.value = formData.message;
}
function handleSubmit(event) {
  event.preventDefault();
  const trimmedEmail = formData.email.trim();
  const trimmedMessage = formData.message.trim();
  if (!trimmedEmail || !trimmedMessage) {
    alert('Fill please all fields');
    return;
  }
  formData = { email: trimmedEmail, message: trimmedMessage };
  console.log('Form data:', formData);
  clearFormDataAndLocalStorage();
}
function clearFormDataAndLocalStorage() {
  formData = { email: "", message: "" };
  localStorage.removeItem(feedbackFormStateKey);
  updateFormInputs();
}
loadFormDataFromLocalStorage();
