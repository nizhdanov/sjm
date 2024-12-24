import { eslint } from '@sjm/eslint';

export default eslint({
  typescript: {
    overrides: {
      'ts/interface-name-prefix': 'off',
      'ts/explicit-function-return-type': 'off',
      'ts/explicit-module-boundary-types': 'off',
      'ts/no-explicit-any': 'off',
      'ts/consistent-type-imports': 'off'
    }
  }
});
