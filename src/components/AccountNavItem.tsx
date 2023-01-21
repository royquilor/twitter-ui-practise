import Avatar from '@rd/Avatar';
import Link from 'next/link';

import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2';

const AccountNavItem = () => (
	<div className="flex flex-1 items-center gap-x-2 px-4 py-8 ">
		<div className="flex items-center gap-x-3 flex-1">
			<div className="flex flex-1 xl:flex-none justify-center xl:justify-start">
				<Avatar
					src="https://pbs.twimg.com/profile_images/1489998205236527108/q2REh8nW_400x400.jpg"
					alt="Roy Quilor"
					initials="RQ"
				/>
			</div>
			<div className="hidden xl:flex flex-col ">
				<p className="text-base font-semibold">Roy Quilor</p>
				<p className="text-sm text-slate-600 font-medium">@RoyQuilor</p>
			</div>
		</div>
		<div className="hidden xl:flex">
			<Link href="/">
				<HiOutlineEllipsisHorizontal className="w-6 h-6" />
			</Link>
		</div>
	</div>
);

export default AccountNavItem;
