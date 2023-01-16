import { cva, VariantProps } from 'class-variance-authority';
import Link from "next/link"

const tabStyles = cva(
	'flex px-6 hover:bg-slate-100',
	{
		variants: {
      intent: {
        default: 'text-slate-500',
				active: 'text-slate-900 [&_div:last-child]:flex',
				secondary: '',
			},
		},
		defaultVariants: {
			intent: 'default',
		},
	},
);

export function Tab({ text, href, intent }) {
  return (
    <Link className={tabStyles({ intent })} href={href}>
      <div className=" py-5 relative h-full ">
        <div className="text-base leading-none font-semibold">{text}</div>
        <div className="h-1 w-full hidden bg-slate-900 absolute bottom-0 rounded-full"></div>
      </div>
    </Link>
  );
}