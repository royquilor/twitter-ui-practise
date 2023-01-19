import * as HoverCard from '@radix-ui/react-hover-card';
import cx from 'classnames';
import { Button } from '../Button/Button';
import Avatar from '../Avatar/Avatar';

interface Props {
	src: string;
	alt: string;
	initials: string;
}

const HoverCardDemo = ({ src, alt, initials }: Props) => (
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			<a
				className="ImageTrigger inline-flex h-12 w-12 items-center justify-center rounded-full overflow-hidden bg-white dark:bg-gray-90"
				href="https://twitter.com/royquilor"
				target="_blank"
				rel="noreferrer noopener"
			>
				<Avatar src={src} alt={alt} initials={initials} />
			</a>
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content
				align="center"
				sideOffset={4}
				className={cx(
					'HoverCardContent radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
					'w-72 rounded-lg p-4 xmd:w-full',
					'bg-white dark:bg-gray-800 border border-slate-200 shadow-xl',
					'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
				)}
			>
				<div className="w-full flex flex-col gap-y-3">
					<div className="flex justify-between items-start">
						<Avatar src={src} alt={alt} initials={initials} />
						<div>
							<Button intent="outline" size="default">
								Following
							</Button>
						</div>
					</div>
					<div>
						<div className="text-base font-semibold leading-none">
							Roy Quilor
						</div>
						<div className="text-sm text-slate-500">@royquilor</div>
					</div>
					<div className="text-sm">
						Improve your design skills by making projects. 1 every week,
						practice with me on Youtube. I use Figma, Tailwind CSS and Webflow.
					</div>
					<div className="flex gap-x-4">
						<div className="flex gap-x-1">
							<div className="text-sm font-bold leading-none">249</div>
							<div className="text-sm text-slate-500 leading-none">
								Following
							</div>
						</div>
						<div className="flex gap-x-1">
							<div className="text-sm font-bold leading-none">663</div>
							<div className="text-sm text-slate-500 leading-none">
								Followers
							</div>
						</div>
					</div>
				</div>
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);

export default HoverCardDemo;
