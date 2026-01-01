module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    rules: {
      camelcase: ["error", { properties: "always" }]
    }
  }
];
