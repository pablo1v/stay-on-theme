const { resolve } = require('path');

/**
 * @type {import('eslint').Linter.Config}
 * */
module.exports = {
  root: true,
  plugins: ['import', 'prettier'],
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    tsconfigRootDir: resolve(__dirname),
    project: 'tsconfig.eslint.json',
  },
  rules: {
    'prettier/prettier': 'error',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: resolve(__dirname, 'tsconfig.json'),
          },
        },
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
          },
        ],

        '@typescript-eslint/no-floating-promises': [
          'error',
          {
            ignoreIIFE: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            variables: false,
            functions: false,
            ignoreTypeReferences: true,
          },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      },
    },
  ],
};
