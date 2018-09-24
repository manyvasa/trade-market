module.exports = {
  root: true,
  env:  {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: [
    'vue',
    'eslint-comments',
    'compat',
  ],
  rules: {
    'import/extensions': [ 'error', 'always', {
      js:  'never',
      vue: 'never',  // don't require .vue extension when importing
    } ],
    'no-param-reassign': [ 'error', {
      props:                          true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc',   // for reduce accumulators
        'e',     // for e.returnvalue
      ],
    } ],
    'class-methods-use-this':               'off',
    'object-curly-spacing':                 [ 'error', 'always' ],
    'space-in-parens':                      [ 'error', 'never' ],
    'import/newline-after-import':          'error',
    'import/no-named-as-default-member':    'off',
    'no-plusplus':                          'off',
    'max-params':                           [ 'error', 3 ],
    'comma-style':                          [ 'error', 'last' ],
    'comma-dangle':                         [ 'error', 'always-multiline' ],
    'no-bitwise':                           [ 'error', { int32Hint: true } ],
    quotes:                                 [ 'error', 'single' ],
    semi:                                   [ 'error', 'always' ],
    'dot-location':                         [ 'error', 'property' ],
    'object-property-newline':              'error',
    'no-shadow':                            'off',
    'eslint-comments/disable-enable-pair':  'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable':    'warn',
    'eslint-comments/no-unused-enable':     'warn',
    'compat/compat':                        'error',  // browser compatibility error
    'no-console':                           process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger':                          process.env.NODE_ENV === 'production' ? 'error' : 'off', // allow debugger during development
    'array-bracket-spacing':                [ 'error', 'always', { singleValue: false } ],
    'no-underscore-dangle':                 'off',
    'spaced-comment':                       [ 'error', 'always', { exceptions: [ '-', '+', '=', '*' ] } ],
    'key-spacing':                          [ 'error', { align: 'value' } ],
    'no-multi-spaces':                      [ 'off', {
      exceptions: {
        Property:          true,
        ImportDeclaration: true,
      },
    } ],
    'max-len': [ 'error',
      {
        code:                   80,
        ignoreComments:         true,
        ignoreTrailingComments: true,
        ignoreUrls:             true,
        ignoreStrings:          true,
        ignoreTemplateLiterals: true,
        ignorePattern:          'stylelint.*',
      },
    ],
    // 'require-jsdoc': [ 'error', {
    //   require: {
    //     FunctionDeclaration:     true,
    //     ArrowFunctionExpression: true,
    //     FunctionExpression:      true,
    //   },
    // } ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev:      [ 'const', 'let', 'var' ],
        next:      '*',
      },
      {
        blankLine: 'always',
        prev:      '*',
        next:      [ 'const', 'let', 'var' ],
      },
      {
        blankLine: 'any',
        prev:      [ 'const', 'let', 'var' ],
        next:      [ 'const', 'let', 'var' ],
      },
      {
        blankLine: 'always',
        prev:      '*',
        next:      [ 'case', 'default' ],
      },
      {
        blankLine: 'always',
        prev:      [ 'const', 'let', 'var', 'block', 'block-like' ],
        next:      [ 'block', 'block-like' ],
      },
      {
        blankLine: 'always',
        prev:      'directive',
        next:      '*',
      },
      {
        blankLine: 'any',
        prev:      'directive',
        next:      'directive',
      },
      {
        blankLine: 'always',
        prev:      '*',
        next:      'return',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [ 'error', {
      optionalDependencies: ['test/unit/index.js'],
    } ],
    // vuejs
    'vue/max-attributes-per-line': [ 2,
      {
        singleline: 1,
        multiline:  {
          max:            1,
          allowFirstLine: true,
        },
      },
    ],
  },
  parserOptions: {
    parser:       'babel-eslint',
    ecmaVersion:  6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx:                          true,
    },
  },
};
