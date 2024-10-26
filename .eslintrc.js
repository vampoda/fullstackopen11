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
    ecmaVersion: 2023, // Use the latest ECMAScript version
    sourceType: "module", // Enable ES modules
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  
  },


  plugins: [
    "react", // Enable React plugin
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Disable if using React 17+
    "no-unused-vars": ["off", { vars: "all", args: "after-used", ignoreRestSiblings: true }] // Change to "off" to ignore completely

 
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
};
