const submitBtn = document.getElementById('submit-button');
const inpText = document.querySelector("#input-field")

function handleButtonClick() {
  submitBtn.classList.add('custom-loading');
  submitBtn.disabled = true;

  setTimeout(function() {
    submitBtn.classList.remove('custom-loading');
    submitBtn.disabled = false;
    inpText.value = ""
  }, 2000);
}

submitBtn.addEventListener('click', handleButtonClick);
