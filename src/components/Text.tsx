import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const textStyles = cva([], {
	variants: {
		size: {
			small: 'text-sm',
			medium: 'text-base',
			large: 'text-lg',
		},
		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
	},
});

type TextStylesProps = VariantProps<typeof textStyles>;

// we want to combine the two variants so you can write in one prop
export interface TextProps extends Omit<TextStylesProps, 'size' | 'weight'> {
	variant: `${NonNullable<TextStylesProps['size']>}/${NonNullable<
		TextStylesProps['weight']
	>}`;
	children?: ReactNode;
}

export function Text({ variant, children, ...props }: TextProps) {
	const [size, weight] = variant.split('/') as [
		TextStylesProps['size'],
		TextStylesProps['weight'],
	];
	return (
		<div className={textStyles({ size, weight, ...props })}>{children}</div>
	);
}
