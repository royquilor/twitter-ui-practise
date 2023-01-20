module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
		'storybook-addon-next',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	staticDirs: ['../fonts'],
};
