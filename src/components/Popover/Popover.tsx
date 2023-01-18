import * as PopoverPrimitive from '@radix-ui/react-popover';
import { HiOutlineXMark } from "react-icons/hi2";

// export default function Popover({ children, content, ...props }) {
//   return ( 
//       <PopoverPrimitive.Root>
//         <PopoverPrimitive.Trigger asChild>
//           {children}
//         </PopoverPrimitive.Trigger>
//         <PopoverPrimitive.Portal>
//           <PopoverPrimitive.Content sideOffset={5} {...props}>
//             {content}
//             <PopoverPrimitive.Arrow />
//           </PopoverPrimitive.Content>
//         </PopoverPrimitive.Portal>
//       </PopoverPrimitive.Root> 
//   );
// }

// interface Props {}

// const items = [
//   {
//     id: "width",
//     label: "Width",
//     defaultValue: "100%",
//   },
//   {
//     id: "max-width",
//     label: "Max. width",
//     defaultValue: "300px",
//   },
//   {
//     id: "height",
//     label: "Height",
//     defaultValue: "25px",
//   },
//   {
//     id: "max-height",
//     label: "Max. height",
//     defaultValue: "none",
//   },
// ];

export default function Popover({children, content}) {
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
          {/* <PopoverPrimitive.Arrow className="fill-current text-white dark:text-gray-800" /> */}
                  
          {/* <PopoverPrimitive.Close
            className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <HiOutlineXMark className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
          </PopoverPrimitive.Close> */}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>
  );
}

// export default Popover;