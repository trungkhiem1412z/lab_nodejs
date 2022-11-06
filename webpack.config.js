const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: './lab4/source/js/app.js',
		admin: './lab4/source/js/admin.js',
	},
	devtool: 'inline-source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './lab4/public/dist/js'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: () => [require('autoprefixer')],
							},
						},
					},
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
	// watch: true,
};
