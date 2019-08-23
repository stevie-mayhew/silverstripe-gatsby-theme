import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';

storiesOf('Image', module)
  .add('basic image', () => (
    <Image
      src="https://via.placeholder.com/600x400/FF2255"
      width="600"
      height="400"
      alt="Here is my image"
    />
  ))
  .add('force load image', () => (
    <Image
      src="https://via.placeholder.com/600x400/007777"
      width="600"
      height="400"
      alt="Here is my image"
      forceLoad
    />
  ))
  .add('responsive image', () => (
    <Image
      src="https://via.placeholder.com/600x400/0000FF"
      width="600"
      height="400"
      alt="Here is my image"
      sizes={{
        sm: 'https://via.placeholder.com/600x400/0000FF',
        md: 'https://via.placeholder.com/600x400/FF9922',
        lg: 'https://via.placeholder.com/600x400/00FF00',
      }}
    />
  ));
