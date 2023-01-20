import NavItem from '@ui/NavItem';
import { HiOutlineHome } from 'react-icons/hi2';

export default {
	title: 'Components/NavItem',
	component: NavItem,
};

const Template = () => (
	<NavItem href="/" width="full" size="default">
		<HiOutlineHome className="w-6 h-6" />
		<div className="inline-flex flex-none text-lg font-medium">Example</div>
	</NavItem>
);

export const Default = Template.bind({});
