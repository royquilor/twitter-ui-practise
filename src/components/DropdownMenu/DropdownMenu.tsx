import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2';
import cx from 'classnames';
import { ReactNode } from 'react';
import Link from 'next/link';
import { NavItem } from '../NavItem/NavItem';

import { HiOutlineFaceFrown } from 'react-icons/hi2';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { HiOutlineSpeakerXMark } from 'react-icons/hi2';
import { HiOutlineNoSymbol } from 'react-icons/hi2';
import { HiCodeBracket } from 'react-icons/hi2';
import { HiOutlineFlag } from 'react-icons/hi2';

interface AccordionItem {
	href: string;
	text: string;
	width: string;
	size: string;
	icon?: ReactNode;
}

const username = 'royquilor';

const items: AccordionItem[] = [
	{
		href: '/',
		text: "This Tweet's not helpful",
		width: 'full',
		size: 'small',
		icon: <HiOutlineFaceFrown className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Follow @${username}`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineUserPlus className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Add/remove @${username} from Lists`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineQueueList className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Mute @${username}`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineSpeakerXMark className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Block @${username}`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineNoSymbol className="w-4 h-4" />,
	},
	{
		href: '/',
		text: 'Embed Tweet',
		width: 'full',
		size: 'small',
		icon: <HiCodeBracket className="w-4 h-4" />,
	},
	{
		href: '/',
		text: 'Report Tweet',
		width: 'full',
		size: 'small',
		icon: <HiOutlineFlag className="w-4 h-4" />,
	},
];

const DropdownMenuDemo = () => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					className="IconButton hover:bg-slate-200 rounded-full"
					aria-label="Customize options"
				>
					<HiOutlineEllipsisHorizontal className="h-6 w-6" />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					sideOffset={0}
					alignOffset={0}
					align="end"
					className={cx(
						'DropdownMenuContent radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
						'rounded-lg shadow-2xl w-72',
						'bg-white dark:bg-gray-800 border border-slate-200',
					)}
				>
					{items.map(({ href, text, width, size, icon }, i) => (
						<DropdownMenu.Item
							key={`header-${i}`}
							// value={`item-${i + 1}`}
							className="rounded-lg focus:outline-none overflow-hidden"
						>
							<NavItem href="{href}" width={width} size={size}>
								{icon}
								<div className="inline-flex flex-none text-lg font-medium">
									{text}
								</div>
							</NavItem>
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default DropdownMenuDemo;
