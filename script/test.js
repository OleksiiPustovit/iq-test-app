const formButton = document.querySelector('.form__button');
const form = document.querySelector('.test__form');
const formInput = document.querySelector('.form__input'); 
const progressBar = document.querySelector('.progress-bar');
const progressBarItem = document.querySelector('.progress-bar__item');
const formItem = document.querySelector('.test__form').children;
const result = [];
const loadSection = document.querySelector('.load__section');

form.addEventListener('change', () => {
    const formItem = form.querySelector('.test__question--visible');
    const formItemInput = formItem.querySelectorAll(
      'input[type="radio"]:checked'
    );
    if (formItemInput.length) {
      formButton.removeAttribute('disabled');
      formButton.classList.remove('form__button');
      formButton.classList.add('primary-button');

    }
})

const fillProgressBar = progressBar.clientWidth -
progressBar.clientWidth / formItem.length;

progressBarItem.style.width = `${Math.round(fillProgressBar / formItem.length)}px`;

formButton.addEventListener('click', () => {
  const currentFormItem = form.querySelector('.test__question--visible');
  const index = Array.from(formItem).indexOf(currentFormItem);
  currentFormItem.classList.remove('test__question--visible');
  currentFormItem.classList.add('test__question--invisible');


  const nextFormItem = formItem[index + 1];
  progressBarItem.style.width = `${Math.round(((index + 2) * fillProgressBar) / formItem.length)}px`

  if (nextFormItem) {
    nextFormItem.classList.remove('test__question--invisible');
    nextFormItem.classList.add('test__question--visible');
    formButton.setAttribute('disabled', 'disabled');
  } else {
    form.classList.add('invisible');
    formButton.classList.add('invisible');
    loadSection.classList.remove('load__section--invisible');

    setTimeout(function() {
      location.replace("./final-page.html");
    }, 5000);
  }


  const formItemInput = currentFormItem.querySelectorAll(
    'input[type="radio"]:checked'
  );

    formItemInput.forEach(el => {
      const { name, value } = el;
      result.push({ [name]: value });
    });
});
