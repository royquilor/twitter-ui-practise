import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiOutlineIdentification } from "react-icons/hi2";
import { HiOutlineFilm } from "react-icons/hi2";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { HiOutlineLifebuoy } from "react-icons/hi2";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineBolt } from "react-icons/hi2";
import cx from "classnames";
import { NavItem } from "../NavItem/NavItem";
import { ReactNode } from "react";

// interface AccordionItem {
//   header: string;
//   links: [];
//   link?: ReactNode; 
//   content?: ReactNode;
// }

const items = [
  {
    header: "Creator Studio",
    links: [
      {
        link:
          <>
        <NavItem href="/" width="full" size="default">
          <HiOutlineChartBarSquare className="w-4 h-4" />
          <div className="inline-flex flex-none text-sm font-medium">Analytics</div>
        </NavItem>
          </>,
      },
    ],
  },
  {
    header: "Professional Tools",
    links: [
      {
        link:
          <>
            <NavItem href="/" width="full" size="default">
              <HiOutlineIdentification className="w-4 h-4" />
              <div className="inline-flex flex-none text-sm font-medium">Twitter for Professionals</div>
            </NavItem>
          </>
      },
      {
        link:
          <>
            <NavItem href="/" width="full" size="default">
              <HiOutlineFilm className="w-4 h-4" />
              <div className="inline-flex flex-none text-sm font-medium">Twitter Ads</div>
            </NavItem>
          </>
      },
      {
        link:
          <>
            <NavItem href="/" width="full" size="default">
              <HiOutlineBanknotes className="w-4 h-4" />
              <div className="inline-flex flex-none text-sm font-medium">Monetization</div>
            </NavItem>
          </>
      },
    ],
  },
  {
    header: "Settings and Support",
    links: [
      {
        link:
          <>
            <NavItem href="/" width="full" size="default">
              <HiOutlineCog8Tooth className="w-4 h-4" />
              <div className="inline-flex flex-none text-sm font-medium">Settings and Privacy</div>
            </NavItem>
          </>
      },  
      {
        link:
          <>
            <NavItem href="/" width="full" size="default">
              <HiOutlineLifebuoy className="w-4 h-4" />
              <div className="inline-flex flex-none text-sm font-medium">Help Center</div>
            </NavItem>
          </>
      },  
      {
        link:
          <>
            <NavItem href="/" width="full" size="default">
              <HiOutlineComputerDesktop className="w-4 h-4" />
              <div className="inline-flex flex-none text-sm font-medium">Display</div>
            </NavItem>
          </>
      },  
      {
        link:
          <>
            <NavItem href="/" width="full" size="default">
              <HiOutlineBolt className="w-4 h-4" />
              <div className="inline-flex flex-none text-sm font-medium">Keyboard shortcuts</div>
            </NavItem>
          </>
      },  
    ],
  },
];


interface Props {}

export default function AccordionClean(props: Props) {
  return (
    <>    
        <AccordionPrimitive.Root
      collapsible
      type="single"
      >
        {items.map((column), i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="rounded-lg focus:outline-none overflow-hidden"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={cx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                "focus:outline-none hover:bg-slate-100",
                "inline-flex w-full items-center justify-between bg-white px-4 py-4 text-left dark:bg-gray-800"
              )}
            >
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 font-bold">
                {column.header}
              </span>
              <HiChevronDown
                className={cx(
                  "ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400",
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full dark:bg-gray-800">
              {column.links}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>

    
   
    </>
  );
};
