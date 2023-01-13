
import Post from './Post';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Post',
  component: Post,
  argTypes: {
        content: {
            control: 'text',
        },
        date: {
            control: 'text',
        },
    },
} as ComponentMeta<typeof Post>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Post> = () => (
//   <Post
//     content="Yoyo"
//     date="15/1/2023"
//   />
// ); 

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Default = Template.bind({});

Default.args = {
    content: 'Hello there',
    date: '14/1/2023',
};

