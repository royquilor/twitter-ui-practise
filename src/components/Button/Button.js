import { cva, VariantProps } from 'class-variance-authority';
import Link from "next/link"

const ButtonStyles = cva(
	'inline-flex items-center font-bold rounded-full border ',
	{
		variants: {
      intent: {
        primary: 'bg-slate-900 text-white border-transparent',
				plain: '',
				outline: 'bg-transparent text-slate-900 border-slate-200',
				disabled: 'bg-slate-900 text-white border-transparent opacity-50 cursor-default'
			},
			size: {
        default: 'px-4 py-2 text-sm',
				small: 'px-4 py-1 text-sm',
				large: '',
			},
		},
		defaultVariants: {
			intent: 'primary',
			size: 'default'
		},
	},
);

export function Button({ text, href, intent, size }) {
  return (
    <Link className={ButtonStyles({ intent, size })} href={href}>
      {text}
    </Link>
  );
}