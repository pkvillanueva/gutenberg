// module.exports = function( api ) {
// 	api.cache( true );

// 	return {
// 		presets: [ '@wordpress/babel-preset-default' ],
// 		plugins: [ 'babel-plugin-inline-json-import' ],
// 	};
// };
// module.exports = function( api ) {
// 	api.cache( true );

// 	return {
//         overrides: [
//             {
//                 exclude: './packages/**/test/*.native.[jt]s?(x)',
//                 presets: [ '@wordpress/babel-preset-default' ],
//                 plugins: [ 'babel-plugin-inline-json-import' ],
//             },
//             {
//                 include: './packages/**/test/*.native.[jt]s?(x)',
//                 presets: [
//                     'module:metro-react-native-babel-preset',
//                 ],
//                 plugins: [
//                     '@babel/plugin-proposal-async-generator-functions',
//                     '@babel/plugin-transform-runtime',
//                     [
//                         'react-native-platform-specific-extensions',
//                         {
//                             extensions: [
//                                 'css',
//                                 'scss',
//                                 'sass',
//                             ],
//                         },
//                     ],
//                 ],
//                 env: {
//                     development: {
//                         plugins: [
//                             '@babel/transform-react-jsx-source',
//                         ],
//                     },
//                 },
//             },
//             { // Transforms JSX into JS function calls and use `createElement` instead of the default `React.createElement`
//                 exclude: /node_modules\/react-native/,
//                 plugins: [
//                     [
//                         '@babel/plugin-transform-react-jsx',
//                         {
//                             pragma: 'createElement',
//                             pragmaFrag: 'Fragment',
//                         },
//                     ],da
//                 ],
//             },
//             { // Auto-add `import { createElement } from '@wordpress/element';` when JSX is found
//                 exclude: /node_modules\/react-native/,
//                 plugins: [
//                     [
//                         './packages/babel-plugin-import-jsx-pragma',
//                         {
//                             scopeVariable: 'createElement',
//                             scopeVariableFrag: 'Fragment',
//                             source: '@wordpress/element',
//                             isDefault: false,
//                         },
//                     ],
//                 ],
//             },
//         ]
// 	};
// };

module.exports = function( api ) {
	api.cache( true );
	return {
		presets: [
			'module:metro-react-native-babel-preset',
		],
		plugins: [
			'@babel/plugin-proposal-async-generator-functions',
			'@babel/plugin-transform-runtime',
			[
				'react-native-platform-specific-extensions',
				{
					extensions: [
						'css',
						'scss',
						'sass',
					],
				},
			],
		],
		overrides: [
			{ // Transforms JSX into JS function calls and use `createElement` instead of the default `React.createElement`
				plugins: [
					[
						'@babel/plugin-transform-react-jsx',
						{
							pragma: 'createElement',
							pragmaFrag: 'Fragment',
						},
					],
				],
				exclude: /node_modules\/react-native/,
			},
			{ // Auto-add `import { createElement } from '@wordpress/element';` when JSX is found
				plugins: [
					[
						'./packages/babel-plugin-import-jsx-pragma',
						{
							scopeVariable: 'createElement',
							scopeVariableFrag: 'Fragment',
							source: '@wordpress/element',
							isDefault: false,
						},
					],
				],
				exclude: /node_modules\/react-native/,
			},
		],
		env: {
			development: {
				plugins: [
					'@babel/transform-react-jsx-source',
				],
			},
		},
	};
};
