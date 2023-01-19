
import Header from './Header';

export default { 
  title: 'Components/Header',
  component: Header,
};

const Template = () => (
    <Header
      title="home"
      href="/"
      text="Top tweets"  
    />
);

export const Default = Template.bind({});


