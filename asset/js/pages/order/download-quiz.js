/*=========================
  Disable download
===========================*/

const selectElement = document.querySelector('.select');
const downloadElement = document.querySelector('.download-file');

const downloadDisabledClass = 'download-file--disabled';

const updateSelectedService = (value, quizUrl) => {
  if (value === '') {
    downloadElement.classList.add(downloadDisabledClass);
    return;
  }

  downloadElement.classList.remove(downloadDisabledClass);

  if (quizUrl) {
    downloadElement.querySelector('a').href = quizUrl;
  }
};

updateSelectedService(selectElement.value);

selectElement.addEventListener('change', (evt) => {
  const { value } = evt.target;
  const { quiz } = evt.target.querySelector(`option[value="${value}"]`).dataset;

  updateSelectedService(value, quiz);
});

