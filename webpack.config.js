const path = require('path');

module.exports = {
	mode: 'development',
	entry: './lab3/source/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './lab3/public/dist/js'),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 5050,
	},
	stats: 'errors-only',
	watch: true,
};
