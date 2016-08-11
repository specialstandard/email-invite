var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/app/app.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel'},
			{ test: /\.scss$/, loaders: ["style", "css", "sass"] },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
		 	{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }	 
		]
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ]
    }
};
