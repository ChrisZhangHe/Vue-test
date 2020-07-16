module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-param-reassign": "off",
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "prettier/prettier": "off"
  }
};
