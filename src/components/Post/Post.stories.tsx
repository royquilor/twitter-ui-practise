
import { Post } from './Post';

export default { 
  title: 'Components/Post',
  component: Post,
};

const Template = () => (
    <Post
        content="Yo"
        name="Roy Quilor"
        username="royquilor"
        date="10h">
        Example
    </Post>
);

export const Default = Template.bind({});


