import Panel from '@ui/Panel';
import PanelItem from '@ui/PanelItem';

export default {
	title: 'Components/Panel',
	component: Panel,
};

const Template = () => (
	<Panel title="title" href="/">
		<PanelItem name="John Doe" username="johndoe" src="" initials="JD" />
	</Panel>
);

export const Default = Template.bind({});
