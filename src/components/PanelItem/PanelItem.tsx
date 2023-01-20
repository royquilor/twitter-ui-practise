import Avatar from '../Avatar/Avatar';
import { Button } from '../Button/Button';

interface Props {
	name: string;
	username: string;
	src: string;
	initials: string;
}

const PanelItem = ({ name, username, src, initials }: Props) => {
	return (
		<div className="flex flex-1 items-center gap-x-2 px-4 py-3 hover:bg-slate-200">
			<div className="flex items-center gap-x-2 flex-1">
				<div className="flex flex-1 xl:flex-none justify-center xl:justify-start">
					<Avatar src={src} alt={name} initials={initials} />
				</div>
				<div className="hidden xl:flex flex-col ">
					<p className="text-base">{name}</p>
					<p className="text-xs text-slate-500">@{username}</p>
				</div>
			</div>
			<div className="">
				<Button size="small">Follow</Button>
			</div>
		</div>
	);
};

export default PanelItem;
