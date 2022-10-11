module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{png,html,js,json}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};