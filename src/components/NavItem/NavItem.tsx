import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
	href: string;
	width: 'full' | 'inline' | 'mobile';
	size: 'default' | 'small' | 'large';
	children: ReactNode;
}

const NavItemStyles = cva('items-center gap-x-4 text-slate-900 my-1', {
	variants: {
		width: {
			full: 'w-full',
			inline: 'inline-flex [&_div:first-child]:rounded-full',
			mobile: 'inline-flex justify-center xl:justify-start ',
		},
		size: {
			default: '',
			small: 'py-0 [&_div:last-child]:text-sm my-0',
			large: '',
		},
	},
	defaultVariants: {
		width: 'inline',
		size: 'default',
	},
});

export function NavItem({ href, children, width, size }: Props) {
	return (
		<Link className={NavItemStyles({ width, size })} href={href}>
			<div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
				{children}
			</div>
		</Link>
	);
}
