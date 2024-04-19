import type { Preview } from "@storybook/react";
import "@joao-ui/react/theme"
import { background, themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: themes.dark,
    },
  },
};

export default preview;