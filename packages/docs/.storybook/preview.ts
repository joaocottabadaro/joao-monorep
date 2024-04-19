import type { Preview } from "@storybook/react";
import "../src/index.css"
import '@joao-ui/react/dist/index.css'

// Replace your-framework with the framework you are using (e.g., react, vue3)

import { background, themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: themes.dark,
    },
  },
};

export default preview;