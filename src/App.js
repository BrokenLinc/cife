import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Generate from './Generate';

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Generate />
    </ThemeProvider>
  );
};

export default App;
