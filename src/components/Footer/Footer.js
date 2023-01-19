import Link from 'next/link';

const Footer = () => {
	return (
		<div className="mb-3">
			<div className="flex flex-wrap gap-x-3 gap-y-2 px-4 py-4 text-xs text-slate-600">
				<Link className="" href="/">
					Terms of Service
				</Link>
				<Link className="" href="/">
					Privacy Policy
				</Link>
				<Link className="" href="/">
					Cookie Policy
				</Link>
				<Link className="" href="/">
					Accessibility
				</Link>
				<Link className="" href="/">
					Ads info
				</Link>
				<Link className="" href="/">
					More
				</Link>
				<div className="" href="/">
					© 2023
				</div>
			</div>
		</div>
	);
};

export default Footer;
