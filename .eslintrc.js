/* eslint-disable max-len */
module.exports = {
  // Configuration for JavaScript files
  extends: ['airbnb-base', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 150,
        tabWidth: 2,
        semi: true,
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports', 'react-func'],
      extends: ['airbnb-typescript', 'next/core-web-vitals', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'no-restricted-syntax': ['off', 'FunctionExpression', 'WithStatement', "BinaryExpression[operator='in']"],
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 150,
            tabWidth: 2,
            semi: true,
            endOfLine: 'auto',
          },
        ],
        'import/prefer-default-export': 'off',
        'import/no-cycle': ['off'],
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-unused-vars': 'warn',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        '@typescript-eslint/default-param-last': 'warn',
        'max-lines': [
          2,
          {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
        'react-func/max-lines-per-function': [
          'error',
          {
            max: 200,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
          },
        ],
      },
    },
  ],
};
