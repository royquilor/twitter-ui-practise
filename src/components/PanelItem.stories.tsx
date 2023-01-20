import PanelItem from '@ui/PanelItem';

export default {
	title: 'Components/PanelItem',
	component: PanelItem,
};

const Template = () => (
	<PanelItem name="John Doe" username="johndoe" src="" initials="JD" />
);

export const Default = Template.bind({});
