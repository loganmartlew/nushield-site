import manufacturers from './manufacturers.json';
import models from './models.json';

// const loadModels = () => {
//   console.log('change');

//   const select = document.getElementById('quick-models');

//   models.forEach((item, i) => {
//     const option = document.createElement('option');
//     option.value = i + 1;
//     option.appendChild(document.createTextNode(item));

//     select.appendChild(option);
//   });
// };

// const loadManufacturers = () => {
//   const select = document.getElementById('quick-manufacturers');

//   manufacturers.forEach((item, i) => {
//     const option = document.createElement('option');
//     option.value = i;
//     option.appendChild(document.createTextNode(item));

//     select.appendChild(option);
//   });

//   select.addEventListener('onChange', loadModels);
// };

// export default loadManufacturers;

class QuickOrder {
  constructor() {
    this.manuSelect = document.getElementById('quick-manufacturers');
    this.modelSelect = document.getElementById('quick-models');
    this.submitBtn = document.getElementById('quick-submit');

    this.loadManufacturers();

    this.manuSelect.onchange = this.loadModels.bind(this);
    this.submitBtn.onclick = this.submit.bind(this);
  }

  loadManufacturers() {
    manufacturers.forEach((item, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.appendChild(document.createTextNode(item));

      this.manuSelect.appendChild(option);
    });
  }

  loadModels() {
    models.forEach((item, i) => {
      const option = document.createElement('option');
      option.value = i + 1;
      option.appendChild(document.createTextNode(item));

      this.modelSelect.appendChild(option);
    });
  }

  submit() {
    const manuId = this.manuSelect.value;
    const modelId = this.modelSelect.value;

    const baseUrl = window.location.origin;

    const url = `${baseUrl}/order.html?manu=${manuId}&model=${modelId}`;

    window.location.href = url;
  }
}

export default QuickOrder;
