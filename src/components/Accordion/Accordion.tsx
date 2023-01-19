import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
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

interface AccordionItem {
  header: string;
  content?: ReactNode;
}

const items: AccordionItem[] = [
  {
    header: "Creator Studio",
    content:
      <>
        <NavItem href="/" width="full" size="default">
            <HiOutlineChartBarSquare className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Analytics</div>
        </NavItem>
      </>,
  },
  {
    header: "Professional Tools",
    content:
      <>
        <NavItem href="/" width="full" size="default">
            <HiOutlineIdentification className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Twitter for Professionals</div>
        </NavItem>
        <NavItem href="/" width="full" size="default">
            <HiOutlineFilm className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Twitter Ads</div>
        </NavItem>
        <NavItem href="/" width="full" size="default">
            <HiOutlineBanknotes className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Monetization</div>
        </NavItem>
      </>,
  },
  {
    header: "Settings and Support",
    content:
      <>
        <NavItem href="/" width="full" size="default">
            <HiOutlineCog8Tooth className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Settings and Privacy</div>
        </NavItem>
        <NavItem href="/" width="full" size="default">
            <HiOutlineLifebuoy className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Help Center</div>
        </NavItem>
        <NavItem href="/" width="full" size="default">
            <HiOutlineComputerDesktop className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Display</div>
        </NavItem>
        <NavItem href="/" width="full" size="default">
            <HiOutlineBolt className="w-4 h-4" />
            <div className="inline-flex flex-none text-sm font-medium">Keyboard shortcuts</div>
        </NavItem>
      </>,
  }
];


interface Props {}

export default function Accordion(props: Props) {
  return (
    <>    
        <AccordionPrimitive.Root
      collapsible
      type="single"
    >
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="focus:outline-none overflow-hidden"
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
              <span className="text-sm text-gray-900 dark:text-gray-100 font-bold">
                {header}
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
              {content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>

    
   
    </>
  );
};
