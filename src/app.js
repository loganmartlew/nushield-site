import Glide, { Controls, Swipe } from '@glidejs/glide/dist/glide.modular.esm';
import './styles/styles.scss';

const options = {
  type: 'carousel',
};

new Glide('.glide', options).mount({ Controls, Swipe });
