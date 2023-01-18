import Link from "next/link"
import { NavItem } from "../NavItem/NavItem";
import { SiTwitter } from "react-icons/si";
import AccountNavItem from "../AccountNavItem";
import Popover from "../Popover/Popover";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { HiHashtag } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineEllipsisHorizontalCircle } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiListBullet } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { ReactNode } from "react";
import * as Separator from '@radix-ui/react-separator';
import Accordion from "../Accordion/Accordion";
import DialogDemo from "../Dialog/Dialog";

interface NavLinkItem {
  href: string;
  text: string;
  icon?: ReactNode;
}

const items: NavLinkItem[] = [
  {
    href: "/home",
    text: "Home",   
    icon: <HiOutlineHome className="w-6 h-6" />,    
  },
  {
    href: "/explore",
    text: "Explore",   
    icon: <HiHashtag className="w-6 h-6" />,    
  },
  {
    href: "/notifications",
    text: "Notifications",   
    icon: <HiOutlineBell className="w-6 h-6" />,    
  },
  {
    href: "/messages",
    text: "Messages",   
    icon: <HiOutlineEnvelope className="w-6 h-6" />,    
  },
  {
    href: "/bookmarks",
    text: "Bookmarks",   
    icon: <HiOutlineBookmark className="w-6 h-6" />,    
  },
  {
    href: "/profile",
    text: "Profile",   
    icon: <HiOutlineUser className="w-6 h-6" />,    
  },
]

export default function Nav() {
	// const [open, setOpen] = useState(false);
	const [openPopover, setOpenPopover] = useState(false);
  return (
     	<header className="hidden sm:flex w-24 xl:col-span-2 xrelative xz-20">
      <div className="flex flex-1 xl:w-60 flex-col fixed h-full">
        <div className="flex flex-col flex-1">
          <NavItem href="/" text="" width="inline" size="default">
            <SiTwitter className="w-6 h-6" />
          </NavItem>
          {items.map(({ href, text, icon }, i) => (
            <div
              key={`header-${i}`}
              value={`item-${i + 1}`}
     
              className="rounded-lg focus:outline-none overflow-hidden"
            >
              <NavItem
                href="{href}"
                width="inline"
                size="default">
                {icon}
                <div className="hidden xl:inline-flex flex-none text-lg font-medium">{text}</div>
              </NavItem>  
            </div>
          )
          )}
                      
          <Popover
						content={
          <div className="">
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

            {/* <Collapsible.Root className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
        
              <Collapsible.Trigger className="flex w-full items-center justify-between py-3 px-4 hover:bg-slate-100">
                <span className="text-sm font-semibold">Creator Studio</span>
                <button className="">{open ? <HiChevronUp /> : <HiChevronDown />}</button>
              </Collapsible.Trigger>
   
              <Collapsible.Content className="flex flex-col text-gray-500">
                <NavItem href="/" text="Newsletters" width="full" size="small">
                  <HiOutlineNewspaper className="w-4 h-4" />
                </NavItem>
                <NavItem href="/" text="Analytics" width="full" size="small">
                  <HiOutlineChartBarSquare className="w-4 h-4" />
                </NavItem>
              </Collapsible.Content>
                  
            </Collapsible.Root> */}
                
             
                
          </div>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="items-center gap-x-4 text-slate-900 my-1 inline-flex [&_div:first-child]:rounded-full"
            >
              <div className="flex items-center flex-row gap-x-4 px-4 py-3 hover:bg-slate-100">
                <HiOutlineEllipsisHorizontalCircle className="w-6 h-6" />
                <div className="hidden xl:inline-flex flex-none text-lg font-medium">More</div>
              </div>  
        </button>
          </Popover>
              
          <DialogDemo />  
            </div>
            <div>
              <AccountNavItem />
            </div>
          </div> 
      </header>
  );
}