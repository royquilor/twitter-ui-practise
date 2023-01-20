import Panel from './Panel';

export default {
	title: 'Components/Panel',
	component: Panel,
};

const Template = () => (
	<Panel title="title" href="/">
		Example
	</Panel>
);

export const Default = Template.bind({});
