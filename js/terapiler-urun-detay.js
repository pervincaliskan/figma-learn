const urunId = new URLSearchParams(window.location.search).get('urunId');

window.document.addEventListener('DOMContentLoaded', async () => {
  const tabset = document.querySelector('.tabset');
  const header = document.querySelector('#header');


  const response = await fetch(`http://localhost:3000/product-get-${urunId}`);
  const json = await response.json();
  
  header.innerHTML = json.data.name;


  const productSpecs = json.data.productSpecs;

  const tabs = productSpecs.filter((productSpec) => productSpec.type === 'Tab').sort((a, b) => a.priority - b.priority)

  console.log({ tabs })

  const formChecksWrapper = tabset.querySelector('#formcheckWrapper')
  const tabPanelsEl = tabset.querySelector('#tabPanels')
  const terapiProductImage = document.querySelector('#terapiProductImage');
  terapiProductImage.setAttribute('src', json.data.mediaDetails[0].mediaUrlFull)


  tabs.forEach((tab, index) => {
    let inputEl = `<input class="form-check-input" type="radio" name="tabset" value="${tab.id}" id="${tab.id}" aria-controls="${tab.id}">`

    if (index === 0) {
      inputEl = `<input class="form-check-input" type="radio" name="tabset" value="${tab.id}" id="${tab.id}" aria-controls="${tab.id}" checked>`
    };

    formChecksWrapper.innerHTML += `<div class="form-check">
      ${inputEl}
      <label class="form-check-label" for="${tab.id}">
      ${tab.name}
      </label>
    </div>`;
  });
  
  

  
  tabs.forEach((tab) => {
    tabPanelsEl.innerHTML += `<section id="${tab.id}" class="tab-panel">${tab.value}</section>`
  });

  if (!tabs.length) {
    tabPanelsEl.innerHTML += `<section  class="tab-panel">${json.data.description}</section>`
  }
  

  const tabsetInputs = tabset.querySelectorAll('input');
  const tabPanels = document.querySelectorAll('.tab-panel');

  for (const radioEl of tabsetInputs) {
    if (radioEl.checked) {
      tabPanels.forEach((tabPanel) => {
        if (radioEl.value === tabPanel.id) {
          tabPanel.classList.add('d-flex', 'flex-column');
          tabPanel.classList.remove('d-none');
        } else {
          tabPanel.classList.add('d-none');
          tabPanel.classList.remove('d-flex', 'flex-column');
        }

      })
    }
  }

  tabsetInputs.forEach((el) => {
    el.addEventListener('input', (e) => {
      const item = e.target.value;

      tabPanels.forEach((tabPanel) => {
        if (tabPanel.id === item) {
          tabPanel.classList.add('d-flex', 'flex-column');
          tabPanel.classList.remove('d-none');
        } else {
          tabPanel.classList.add('d-none');
          tabPanel.classList.remove('d-flex', 'flex-column');
        }
      });
    })
  })

})





