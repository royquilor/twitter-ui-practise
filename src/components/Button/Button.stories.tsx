
import { Button } from "./Button";

export default { 
  title: 'Components/Button',
  component: Button,
};

const Template = () => (
  <Button
    text="text"
    intent="default"
    href="/"
  />
);

export const Default = Template.bind({});


