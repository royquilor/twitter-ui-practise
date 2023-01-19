import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = () => (
  <Button intent="primary" size="default">
    Submit
  </Button>
);

export const Default = Template.bind({});
