const UserCard = ({
	name,
	username,
	description,
	following,
	followers,
}: {
	name: string;
	username: string;
	description: string;
	following: string;
	followers: string;
}) => (
	<>
		<div className="mb-2">
			<div className="text-base font-semibold leading-none">{name}</div>
			<div className="text-sm text-slate-500 font-medium">@{username}</div>
		</div>
		<div className="text-sm mb-2">{description}</div>
		<div className="flex gap-x-4">
			<div className="flex gap-x-1">
				<div className="text-sm font-bold leading-none">{following}</div>
				<div className="text-sm text-slate-500 leading-none">Following</div>
			</div>
			<div className="flex gap-x-1">
				<div className="text-sm font-bold leading-none">{followers}</div>
				<div className="text-sm text-slate-500 leading-none">Followers</div>
			</div>
		</div>
	</>
);

export default UserCard;
