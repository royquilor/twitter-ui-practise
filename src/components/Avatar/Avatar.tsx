import * as Avatar from '@radix-ui/react-avatar';

const AvatarDemo = ({
	src,
	alt,
	initials,
}: {
	src: string;
	alt: string;
	initials: string;
}) => (
	<Avatar.Root className="AvatarRoot inline-flex items-center justify-center overflow-hidden w-12 h-12 rounded-full bg-slate-900">
		<Avatar.Image
			className="AvatarImage w-100 h-100 object-cover"
			src={src}
			alt={alt}
		/>
		<Avatar.Fallback
			className="AvatarFallback w-100 h-100 flex items-center justify-center text-base text-white leading-none font-semibold"
			delayMs={600}
		>
			{initials}
		</Avatar.Fallback>
	</Avatar.Root>
);

export default AvatarDemo;
