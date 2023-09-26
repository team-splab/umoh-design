import { BASE_URL } from './../src/constants/baseUrl';
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: 'Pretendard',

  brandTitle: 'Umoh',
  brandImage: `${BASE_URL.STORAGE}/images/logos/umoh_logo_black.png`,
  brandUrl: BASE_URL.LANDING,
  brandTarget: '_self',
});
