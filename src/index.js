import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import App from './App';

ReactDOM.render((
  <>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </>
), document.getElementById('root'));
