import { cva, VariantProps } from 'class-variance-authority';
import Link from "next/link"

const NavItemStyles = cva(
	'justify-center xl:justify-start items-center gap-x-4 text-slate-900 my-1',
	{
		variants: {
      width: {
        full: 'w-full',
				inline: 'inline-flex [&_div:first-child]:rounded-full',
			},
			size: {
        default: '',
				small: 'py-0 [&_div:last-child]:text-sm my-0',
				large: '',
			},
		},
		defaultVariants: {
			width: 'inline',
			size: 'default'
		},
	},
);

export function NavItem({ text, href, children, width, size })  {
  return (
    <Link className={NavItemStyles({ width, size })} href={href}>
      <div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
        <div>{children}</div>
        <div className="hidden xl:inline-flex flex-none text-lg font-medium">{text}</div>
      </div>
    </Link>
  );
}