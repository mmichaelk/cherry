// Make airbnb errors to warnings
//
// Dir.glob("node_modules/eslint-config*/**/*.js").select{|l| l.match('rules')}.map{|l| "require('./#{l.gsub('.js', '')}').rules"}.join(', ')
// eslint-config-airbnb-base first
const rules = Object.assign(
  {},
  require('./node_modules/eslint-config-airbnb/rules/react-a11y').rules,
  require('./node_modules/eslint-config-airbnb/rules/react').rules,
  require('./node_modules/eslint-config-airbnb-base/rules/best-practices')
    .rules,
  require('./node_modules/eslint-config-airbnb-base/rules/errors').rules,
  require('./node_modules/eslint-config-airbnb-base/rules/es6').rules,
  require('./node_modules/eslint-config-airbnb-base/rules/imports').rules,
  require('./node_modules/eslint-config-airbnb-base/rules/node').rules,
  require('./node_modules/eslint-config-airbnb-base/rules/strict').rules,
  require('./node_modules/eslint-config-airbnb-base/rules/style').rules,
  require('./node_modules/eslint-config-airbnb-base/rules/variables').rules
);

const config = {
  extends: 'airbnb',
  plugins: ['react'],
  env: {
    browser: true,
  },
  settings: {
    'import/external-module-folders': ['node_moduless', 'components', 'app'],
  },

  // convert all rules into warnings
  rules: Object.keys(rules).reduce((last, curr) => {
    let rule = rules[curr];
    if (Array.isArray(rule) && (rule[0] === 2 || rule[0] === 'error')) {
      rule[0] = 1;
    } else if (rule === 2 || rule === 'error') {
      rule = 1;
    }

    last[curr] = rule;
    return last;
  }, {}),
};

const overrides = {
  'react/prefer-stateless-function': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',
  'import/extensions': 'off',
  'react/require-default-props': 'off',
  'no-shadow': 'off',
  radix: 'off',
  'react/forbid-prop-types': 'off',
  'no-param-reassign': [1, { props: false }],
  'jsx-a11y/media-has-caption': 'off',
};

Object.assign(config.rules, overrides);
module.exports = config;
