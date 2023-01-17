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

export default function Nav() {
	const [openPopover, setOpenPopover] = useState(false);
  return (
     	<header className="hidden sm:flex w-24 xl:col-span-2">
      <div className="flex flex-1 xl:w-60 flex-col fixed h-full">
          <div className="flex flex-col flex-1 ">
          <NavItem href="/" text="" width="inline" size="default">
            <SiTwitter className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Home" width="inline" size="default">
            <HiOutlineHome className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Explore" width="inline" size="default">
            <HiHashtag className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Notifications" width="inline" size="default">
            <HiOutlineBell className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Messages" width="inline" size="default">
            <HiOutlineEnvelope className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Bookmarks" width="inline" size="default">
            <HiOutlineBookmark className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Profile" width="inline" size="default">
            <HiOutlineUser className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="More" width="inline" size="default">
            <HiOutlineEllipsisHorizontalCircle className="w-6 h-6" />
              </NavItem>
            
              <Popover
						content={
          <div className="w-full rounded-md bg-white p-2 sm:w-40">
						<NavItem href="/" text="title" width="inline" size="default" />
            <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              Item 2
            </button>
            <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              Item 3
            </button>
          </div>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex w-40 items-center justify-between rounded-md border border-gray-300 px-4 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
        >
          <p className="text-gray-600">Popover</p>
          <HiChevronDown
            className={`h-4 w-4 text-gray-600 transition-all ${
              openPopover ? "rotate-180" : ""
            }`}
          />
        </button>
      </Popover>
              

            <div className="mt-5 flex justify-center xl:justify-start"> 
                <button className="bg-slate-900 font-semibold text-white px-3 xl:px-20 py-3 text-lg rounded-full">
                  <HiOutlinePencil className="w-6 h-6 xl:hidden" />
                  <span className="hidden xl:flex">Tweet</span>
                </button>
            </div>   
            </div>
            <div>
              <AccountNavItem />
            </div>
          </div> 
      </header>
  );
}