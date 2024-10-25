module.exports = {
  env: {
    browser: true, // Browser globals
    node: true,    // Node.js globals
    jest: true,    // Jest globals for testing
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Recommended rules for React
  ],
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ECMAScript version
    sourceType: "module", // Enable ES modules
  },
  plugins: [
    "react", // Enable React plugin
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Disable if using React 17+
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
};
