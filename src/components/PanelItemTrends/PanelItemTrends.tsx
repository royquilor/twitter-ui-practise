import Link from 'next/link';
import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2';

interface Props {
	category: string;
	title: string;
	stat: string;
}

const PanelItemTrends = ({ category, title, stat }: Props) => (
	<div className="flex flex-1 items-center gap-x-2 px-4 py-3 hover:bg-slate-200">
		<div className="flex flex-col gap-y-1 gap-x-2 flex-1">
			<p className="text-xs text-slate-700 font-medium">
				{category} · Trending
			</p>
			<p className="text-sm font-bold text-slate-900">{title}</p>
			<p className="text-xs text-slate-700 font-medium">{stat} Tweets</p>
		</div>
		<div className="">
			<Link href="/">
				<HiOutlineEllipsisHorizontal className="w-6 h-6" />
			</Link>
		</div>
	</div>
);

export default PanelItemTrends;
