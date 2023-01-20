import PanelItemTrends from '@ui/PanelItemTrends';

export default {
	title: 'Components/PanelItemTrends',
	component: PanelItemTrends,
};

const Template = () => (
	<PanelItemTrends category="Design" title="Design" stat="10k" />
);

export const Default = Template.bind({});
