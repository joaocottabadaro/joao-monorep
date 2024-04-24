
import "@joao-ui/react/theme"
import "../src/globals.css"

import {  withThemeByClassName} from '@storybook/addon-themes';
import {  ReactRenderer } from '@storybook/react';



const preview = {
  parameters: { },
 decorators: [
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
 ]
};

export default preview;