import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

const Template = () => (
  <Avatar
    src="https://pbs.twimg.com/profile_images/1489998205236527108/q2REh8nW_400x400.jpg"
    alt="Roy Quilor"
    initials="RQ"
  />
);

export const Default = Template.bind({});
