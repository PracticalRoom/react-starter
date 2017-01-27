import '../styles/app.scss';

import Application from '../src/components/application';
import React from 'react';
import {render} from 'react-dom';

render(
  <Application />,
  document.getElementById('app')
);
