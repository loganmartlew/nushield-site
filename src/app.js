import Glide, { Controls, Swipe } from '@glidejs/glide/dist/glide.modular.esm';
import './styles/styles.scss';

import manufacturers from './quickOrder';

const options = {
  type: 'carousel',
};

new Glide('.glide', options).mount({ Controls, Swipe });

new manufacturers();

const date = new Date();
document.getElementById('year').textContent = date.getFullYear();
