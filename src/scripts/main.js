'use strict';

// write code here
function correctionOfForm() {
  const inputCollections = document.querySelectorAll('input');

  inputCollections.forEach((inp) => {
    const textLabel = inp.getAttribute('name');

    inp.insertAdjacentHTML(
      'beforebegin',
      `<label for="${inp.id}" class="field-label"></label>`,
    );

    const label = inp.previousElementSibling;

    label.textContent = textLabel;

    inp.setAttribute('placeholder', `${inp.name}`);
  });
}
correctionOfForm();
