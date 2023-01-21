import { cva } from 'class-variance-authority';

interface Props {
	children: React.ReactNode;
	intent?: 'primary' | 'outline' | 'disabled';
	size?: 'default' | 'small' | 'large';
}

const ButtonStyles = cva(
	'inline-flex items-center font-bold rounded-full border',
	{
		variants: {
			intent: {
				primary: 'bg-slate-900 text-white border-transparent',
				outline: 'bg-transparent text-slate-900 border-slate-200',
				disabled:
					'bg-slate-900 text-white border-transparent opacity-50 cursor-default',
			},
			size: {
				default: 'px-4 py-2 text-sm',
				small: 'px-4 py-1 text-sm',
				large: 'px-3 xl:px-20 py-3 text-lg',
			},
		},
		defaultVariants: {
			intent: 'primary',
			size: 'default',
		},
	},
);

const Button = ({ children, intent, size, ...props }: Props) => (
	<button className={ButtonStyles({ intent, size })}>{children}</button>
);

export default Button;
