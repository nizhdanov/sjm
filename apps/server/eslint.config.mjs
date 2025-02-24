import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/**']
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true
      }
    }
  },
  {
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  },
  {
    plugins: {
      perfectionist
    },
    rules: {
      'perfectionist/sort-array-includes': [
        'error',
        {
          order: 'asc',
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            ['internal'],
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'style',
            'side-effect-style',
            'unknown'
          ],
          internalPattern: ['^~/.*', '^@/.*'],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural'
        }
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          groups: ['unknown', 'method', 'multiline'],
          order: 'asc',
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: {
            callback: 'on*',
            reserved: ['key', 'ref']
          },
          groups: ['shorthand', 'reserved', 'multiline', 'unknown', 'callback'],
          order: 'asc',
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'nullish'
          ],
          order: 'asc',
          specialCharacters: 'keep',
          type: 'alphabetical'
        }
      ]
    }
  }
);
