module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended' // or 'plugin:vue/base'
  ],
  rules: {
    // override/add rules' settings here
    'vue/valid-v-if': 'error',
    "semi": ["error", "always"],
    "arrow-body-style": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
  },
  env: {
    node: true
  }
};
