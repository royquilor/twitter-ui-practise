import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import NavItem from './NavItem';
import Accordion from '@ui/Accordion';
import { ReactNode } from 'react';

import {
	HiOutlineEllipsisHorizontalCircle,
	HiOutlineChatBubbleBottomCenterText,
	HiListBullet,
	HiOutlineUserGroup,
} from 'react-icons/hi2';

interface NavLinkItem {
	href: string;
	text: string;
	icon?: ReactNode;
}

const items: NavLinkItem[] = [
	{
		href: '/topics',
		text: 'Topics',
		icon: <HiOutlineChatBubbleBottomCenterText className="w-6 h-6" />,
	},
	{
		href: '/lists',
		text: 'Lists',
		icon: <HiListBullet className="w-6 h-6" />,
	},
	{
		href: '/twitter-circle',
		text: 'Twitter Circle',
		icon: <HiOutlineUserGroup className="w-6 h-6" />,
	},
];

const PopoverDemo = () => (
	<PopoverPrimitive.Root>
		<PopoverPrimitive.Trigger asChild>
			<button
				className="focus:outline-none items-center gap-x-4 text-slate-900 my-1 inline-flex [&_div:first-child]:rounded-full"
				aria-label="Update dimensions"
			>
				<div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
					<HiOutlineEllipsisHorizontalCircle className="w-6 h-6" />
					<div className="hidden xl:inline-flex flex-none text-lg font-medium">
						More
					</div>
				</div>
			</button>
		</PopoverPrimitive.Trigger>
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align="start"
				side="top"
				sideOffset={-60}
				alignOffset={0}
				className="PopoverContent overflow-hidden w-80 rounded-xl shadow-xl border border-slate-200 bg-white dark:bg-gray-800"
			>
				<div className="flex flex-col">
					{items.map(({ href, text, icon }, i) => (
						<NavItem
							key={`header-${i}`}
							href={href}
							width="full"
							size="default"
						>
							{icon}
							<div className="inline-flex flex-none text-lg font-medium">
								{text}
							</div>
						</NavItem>
					))}
				</div>

				<SeparatorPrimitive.Root className="h-px bg-slate-200 border-0 dark:bg-slate-700" />

				<Accordion />
			</PopoverPrimitive.Content>
		</PopoverPrimitive.Portal>
	</PopoverPrimitive.Root>
);

export default PopoverDemo;
