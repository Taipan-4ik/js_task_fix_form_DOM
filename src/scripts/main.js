'use strict';

// write code here
function correctionOfForm() {
  const inputCollections = document.querySelectorAll('input');

  inputCollections.forEach((inp) => {
    inp.insertAdjacentHTML(
      'beforebegin',
      `<label for="${inp.id}" class="field-label">${inp.name}</label>`,
    );
    inp.setAttribute('placeholder', `${inp.name}`);
  });
}
correctionOfForm();
