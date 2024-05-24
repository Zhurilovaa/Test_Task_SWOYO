import stylistic from '@stylistic/eslint-plugin';

export default [
	{
		'languageOptions': { 'ecmaVersion': 'latest' }
	},
	{
		'plugins': {
			'@stylistic': stylistic
		},
		'rules': {
			'capitalized-comments': ['error'],
			'multiline-comment-style': ['error', 'separate-lines'],
			'spaced-comment': ['error', 'always'],
			'max-len': ['error', { 'code': 120, 'tabWidth': 4 }],
			'quotes': ['error', 'single'],
			'curly': ['error'],
			'brace-style': 'error',
			'indent': [
				'error',
				'tab',
				{
					'FunctionDeclaration': { 'body': 1, 'parameters': 1 },
					'ArrayExpression': 1,
					'ObjectExpression': 1,
					'SwitchCase': 1,
					'flatTernaryExpressions': false,
					'ignoredNodes': ['ConditionalExpression']
				}
			],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'comma-dangle': ['error', 'never'],
			'object-curly-spacing': ['error', 'always'],
			'arrow-spacing': 'error',
			'array-bracket-spacing': ['error', 'never'],
			'switch-colon-spacing': 'error',
			'no-trailing-spaces': 'error',
			'keyword-spacing': 'error',
			'space-before-blocks': 'error',
			'eqeqeq': 'error',
			'semi': ['error', 'always'],
			'comma-spacing': ['error', { 'before': false, 'after': true }],
			'linebreak-style': ['error', 'unix'],
			'no-var': 'error',
			'prefer-const': 'error',
			'default-param-last': ['error'],
			'dot-notation': 'error'
		}
	}
];
