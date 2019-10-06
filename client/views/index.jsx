import React from 'react';
import { render } from 'react-dom';
import SecuritySPA from './components/SecuritySPA.jsx';
import App from './components/App.jsx'
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

import jssExtend from 'jss-plugin-extend';

const jss = create({
  plugins: [jssExtend(), ...jssPreset().plugins]
});

render(
  <StylesProvider jss={jss}>
    <App />
  </StylesProvider>
  , document.getElementById('security'));
