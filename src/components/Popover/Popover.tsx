import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ReactNode } from 'react';

export default function Popover({children, content}: {children:ReactNode, content:ReactNode}) {
// const Popover = (props: Props) => {
  return (
    <div className="relative inline-block text-left">
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>
          {children}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          align="start"
          side="top"
          sideOffset={-60}
          alignOffset={0}
          className="w-80 rounded-xl shadow-xl border border-slate-200 bg-white dark:bg-gray-800"
        >
          {content}

        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>
  );
}