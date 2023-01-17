
import { NavItem } from './NavItem';

export default { 
  title: 'Components/NavItem',
  component: NavItem,
};

const Template = () => (
    <NavItem
      text="text"
      href="/"
      width=""
      size=""
    >Example</NavItem>
);

export const Default = Template.bind({});


