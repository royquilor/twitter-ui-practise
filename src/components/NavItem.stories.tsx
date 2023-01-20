import NavItem from '@ui/NavItem';

export default {
	title: 'Components/NavItem',
	component: NavItem,
};

const Template = () => (
	<NavItem href="/" width="full" size="default">
		Example
	</NavItem>
);

export const Default = Template.bind({});
