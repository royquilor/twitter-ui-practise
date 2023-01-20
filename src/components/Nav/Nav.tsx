import { ReactNode } from 'react';
import DialogDemo from '../Dialog/Dialog';
import PopoverDemo from '../PopoverDemo/PopoverDemo';
import NavItem from '../NavItem/NavItem';
import AccountNavItem from '../AccountNavItem/AccountNavItem';
import { SiTwitter } from 'react-icons/si';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiHashtag } from 'react-icons/hi2';
import { HiOutlineBell } from 'react-icons/hi2';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { HiOutlineUser } from 'react-icons/hi2';

interface NavLinkItem {
	href: string;
	text: string;
	icon?: ReactNode;
}

const items: NavLinkItem[] = [
	{
		href: '/home',
		text: 'Home',
		icon: <HiOutlineHome className="w-6 h-6" />,
	},
	{
		href: '/explore',
		text: 'Explore',
		icon: <HiHashtag className="w-6 h-6" />,
	},
	{
		href: '/notifications',
		text: 'Notifications',
		icon: <HiOutlineBell className="w-6 h-6" />,
	},
	{
		href: '/messages',
		text: 'Messages',
		icon: <HiOutlineEnvelope className="w-6 h-6" />,
	},
	{
		href: '/bookmarks',
		text: 'Bookmarks',
		icon: <HiOutlineBookmark className="w-6 h-6" />,
	},
	{
		href: '/profile',
		text: 'Profile',
		icon: <HiOutlineUser className="w-6 h-6" />,
	},
];

const Nav = () => (
	<header className="hidden sm:flex w-24 xl:col-span-2">
		<div className="flex flex-1 xl:w-60 flex-col fixed h-full">
			<div className="flex flex-col flex-1">
				<NavItem href="/home" width="inline" size="default">
					<SiTwitter className="w-6 h-6" />
				</NavItem>
				{items.map(({ href, text, icon }, i) => (
					<div
						key={`header-${i}`}
						// value={`item-${i + 1}`}
						className="rounded-lg focus:outline-none overflow-hidden"
					>
						<NavItem href={href} width="inline" size="default">
							{icon}
							<div className="hidden xl:inline-flex flex-none text-lg font-medium">
								{text}
							</div>
						</NavItem>
					</div>
				))}
				<PopoverDemo />
				<DialogDemo />
			</div>
			<div>
				<AccountNavItem />
			</div>
		</div>
	</header>
);

export default Nav;
