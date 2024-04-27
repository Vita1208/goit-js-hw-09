const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('form');
const userEmail = feedbackForm.elements.email;
const userMessage = feedbackForm.elements.message;

function inputHandler(e) {
  formData.email = userEmail.value.trim();
  formData.message = userMessage.value.trim();

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function submitHandler(e) {
  e.preventDefault();

  if (!userEmail.value || !userMessage.value) {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  feedbackForm.reset();
}

feedbackForm.addEventListener('input', inputHandler);
feedbackForm.addEventListener('submit', submitHandler);

if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
  const parsedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  userEmail.value = parsedData.email;
  userMessage.value = parsedData.message;

  formData.email = parsedData.email;
  formData.message = parsedData.message;
}

console.log(userEmail.value.trim());
console.log(userMessage.value.trim());