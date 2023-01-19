import * as Popover from '@radix-ui/react-popover';
import * as Separator from '@radix-ui/react-separator';
import Accordion from "../Accordion/Accordion";
import Link from 'next/link';
import { HiOutlineEllipsisHorizontalCircle } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiListBullet } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className="items-center gap-x-4 text-slate-900 my-1 inline-flex [&_div:first-child]:rounded-full" aria-label="Update dimensions">
        <div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
          <HiOutlineEllipsisHorizontalCircle className="w-6 h-6" />
          <div className="hidden xl:inline-flex flex-none text-lg font-medium">More</div>
        </div>  
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
          align="start"
          side="top"
          sideOffset={-60}
          alignOffset={0}
          className="PopoverContent w-80 rounded-xl shadow-xl border border-slate-200 bg-white dark:bg-gray-800"
        > 
        
            <div className="flex flex-col">
              <Link className="justify-center xl:justify-start items-center gap-x-4 text-slate-900 my-1" href="/">
                <div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
                  <HiOutlineChatBubbleBottomCenterText className="w-6 h-6" />
                  <div className="inline-flex text-lg font-bold">Topics</div>
                </div>
              </Link>
              <Link className="justify-center xl:justify-start items-center gap-x-4 text-slate-900 my-1" href="/">
                <div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
                  <HiListBullet className="w-6 h-6" />
                  <div className="inline-flex text-lg font-bold">Lists</div>
                </div>
              </Link>
              <Link className="justify-center xl:justify-start items-center gap-x-4 text-slate-900 my-1" href="/">
                <div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
                  <HiOutlineUserGroup className="w-6 h-6" />
                  <div className="inline-flex text-lg font-bold">Twitter Circle</div>
                </div>
              </Link>  
            </div>
                
            <Separator.Root className="h-px bg-slate-200 border-0 dark:bg-slate-700" />
                
            <Accordion />             
                       
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;