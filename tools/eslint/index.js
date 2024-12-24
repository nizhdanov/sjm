import antfu from '@antfu/eslint-config';
import pluginNext from '@next/eslint-plugin-next';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

/** @type {import('@sjm/eslint').Eslint} */
export const eslint = ({ next = false, jsxA11y = false, ...options }, ...configs) => {
  if (next) {
    configs.unshift({
      name: 'next',
      plugins: {
        next: pluginNext
      },
      rules: {
        ...Object.entries({ ...pluginNext.configs.recommended.rules }).reduce(
          (acc, [key, value]) => {
            acc[key.replace('@next/next', 'next')] = value;
            return acc;
          },
          {}
        ),
        ...Object.entries({ ...pluginNext.configs['core-web-vitals'].rules }).reduce(
          (acc, [key, value]) => {
            acc[key.replace('@next/next', 'next')] = value;
            return acc;
          },
          {}
        )
      }
    });
  }

  if (jsxA11y) {
    configs.unshift({
      name: 'jsx-a11y',
      plugins: {
        'jsx-a11y': pluginJsxA11y
      },
      rules: {
        ...pluginJsxA11y.flatConfigs.recommended.rules
      }
    });
  }

  return antfu(
    {
      ...options,
      stylistic: false
    },
    {
      name: 'rewrite',
      rules: {
        'antfu/curly': 'off',
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
        'no-console': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'test/prefer-lowercase-title': 'off'
      }
    },
    {
      name: 'sort',
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
    },
    ...configs
  );
};
