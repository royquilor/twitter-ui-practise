
import HeaderBlock from './HeaderBlock';

export default { 
  title: 'Components/HeaderBlock',
  component: HeaderBlock,
};

const Template = () => (
    <HeaderBlock
      title="home"
      href="/"
      text="Top tweets"  
    />
);

export const Default = Template.bind({});


