module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/device-shop/'
		: '/',
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.pug$/,
					oneOf: [
						{
							resourceQuery: /^\?vue/,
							use: ['pug-plain-loader']
						},
						{
							use: ['raw-loader', 'pug-plain-loader']
						}
					]
				}
			]
		}
	}
}
