import { cva, VariantProps } from 'class-variance-authority';
import Link from "next/link"

const ButtonStyles = cva(
	'font-bold text-white rounded-full',
	{
		variants: {
      intent: {
        primary: 'bg-slate-900',
				plain: '',
				light: '',
			},
			size: {
        default: 'px-4 py-3 text-sm',
				small: 'px-4 py-2 text-sm',
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