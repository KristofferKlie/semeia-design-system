import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "hsl(40, 33%, 95%)" }, // SemeIA light bg
        { name: "dark", value: "hsl(0, 0%, 4%)" }, // SemeIA dark bg
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // Toggle dark class based on background
      const isDark = context.globals?.backgrounds?.value === "hsl(0, 0%, 4%)";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", isDark);
      }
      return Story();
    },
  ],
};

export default preview;
