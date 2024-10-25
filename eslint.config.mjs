import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      'react/prop-types': 'off', // Disable prop-types validation
    },
  },
  pluginReact.configs.flat.recommended,
];
