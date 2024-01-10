const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
	entry: {
		popup: path.resolve("./src/popup/index.tsx"),
		options: path.resolve("./src/options/options.tsx"),
		background: path.resolve("./src/background/background.ts"),
		sidepanel: path.resolve("./src/sidepanel/index.tsx"),
		onboarding: path.resolve("./src/onboarding/index.tsx"),
		contentScript: path.resolve("./src/content-script/content-script.ts"),
		dashboard: path.resolve("./src/dashboard/index.tsx"),
		newTab: path.resolve("./src/newTab/index.tsx")
	},
	module: {
		rules: [
			{
				use: "ts-loader",
				test: /\.tsx/,
				exclude: /node_modules/
			},
			{
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								ident: "postcss",
								plugins: [tailwindcss, autoprefixer]
							}
						}
					}
				],
				test: /\.css$/i
			},
			{
				type: "asset/resource",
				test: /\.(png|svg|jpg|jpeg|gif)$/i
			}
		]
	},
	plugins: [
		// Copy things around
		new CopyPlugin({
			patterns: [
				// Manifest.json
				{ from: path.resolve("src/manifest.json"), to: path.resolve("dist") },
				// Assets
				{
					from: path.resolve("src/assets"),
					globOptions: {
						dot: true,
						gitignore: true,
						ignore: ["**/assets/css/input.css"]
					},
					to: path.resolve("dist/assets")
				},
				// Static
				{
					from: path.resolve("src/static"),
					to: path.resolve("dist/static")
				},
				// Locales
				{ from: path.resolve("src/_locales"), to: path.resolve("dist/_locales") }
			]
		}),
		...getHtmlPlugins(["popup", "options", "sidepanel", "dashboard", "newTab", "onboarding"])
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "[name].js"
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	}
};

function getHtmlPlugins(chunks) {
	return chunks.map(
		chunk =>
			new HtmlWebpackPlugin({
				title: "WebDev HQ",
				filename: `${chunk}.html`,
				chunks: [chunk]
			})
	);
}
