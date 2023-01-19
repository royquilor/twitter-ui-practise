import Link from 'next/link';
import { Tab } from '../Tab/Tab';

const TabList = () => {
	return (
		<div className="flex border-b border-slate-200">
			<Tab intent="active" text="For you" href="/" />
			<Tab text="Following" href="/" />
			<Tab text="Niche" href="/" />
		</div>
	);
};

export default TabList;
