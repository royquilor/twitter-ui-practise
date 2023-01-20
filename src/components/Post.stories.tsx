import Post from '@ui/Post';
import Image from 'next/image';

export default {
	title: 'Components/Post',
	component: Post,
};

const Template = () => (
	<Post
		content="Yo"
		name="Roy Quilor"
		username="royquilor"
		date="10h"
		initials="JD"
		following="10"
		followers="10"
		description="I love CSS for real"
		src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
	>
		<div className="w-full relative -z-10 h-80 mb-4">
			<Image
				fill={true}
				style={{ objectFit: 'cover' }}
				className="rounded-3xl"
				src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
				alt="Gradient"
			/>
		</div>
	</Post>
);

export const Default = Template.bind({});
