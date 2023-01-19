import Bio from './Bio';

export default {
	title: 'Components/Bio',
	component: Bio,
};

const Template = () => (
	<Bio
		avatar="https://pbs.twimg.com/profile_images/1489998205236527108/q2REh8nW_400x400.jpg"
		name="Roy Quilor"
		tagline="Helping beginners learn design"
		role="Designer @ awwesome"
	/>
);

export const Default = Template.bind({});
