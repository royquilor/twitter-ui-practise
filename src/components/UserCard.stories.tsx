import UserCard from './UserCard';

export default {
	title: 'Components/UserCard',
	component: UserCard,
};

const Template = () => (
	<UserCard
		name="Roy Quilor"
		username="royquilor"
		description="Improve your design skills by making projects. 1 every week, practice with me on Youtube. I use Figma, Tailwind CSS and Webflow."
		following="249"
		followers="663"
	/>
);

export const Default = Template.bind({});
