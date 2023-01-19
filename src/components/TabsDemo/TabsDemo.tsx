import * as Tabs from "@radix-ui/react-tabs";
import cx from "classnames";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "For you",
    value: "tab1",
  },
  {
    title: "Following",
    value: "tab2",
  },

  {
    title: "Niche",
    value: "tab3",
  },
];

interface Props {}

const TabsDemo = (props: Props) => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List
      className="TabsList flex w-full bg-white dark:bg-gray-800 border-b border-b-slate-200"
      aria-label="Manage your account"
    >
      {tabs.map(({ title, value }) => (
        <Tabs.Trigger
          key={`tab-trigger-${value}`}
          value={value}
          className={cx(
            "TabsTrigger group hover:bg-slate-100",
            "first:rounded-tl-lg last:rounded-tr-lg",
            "radix-state-active:bg-red-500 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-green-500 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800",
            "px-6 font-semibold text-slate-500",
            "focus:radix-state-active:border-b-red",
            "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        >
          <div className="py-4 relative h-full ">
            <div>{title}</div>
            <span className="h-1 w-full bg-transparent absolute left-0 bottom-0 rounded-full"></span>
          </div>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabs.map(({ value }) => (
      <Tabs.Content
        key={`tab-content-${value}`}
        value={value}
        className="TabsContent rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800"
      >
        <div className="text-sm text-gray-700 dark:text-gray-100">
          {
            {
              tab1: "Your inbox is empty",
              tab2: "Make some coffee",
              tab3: "Order more coffee",
            }[value]
          }
        </div>
      </Tabs.Content>
    ))}
  </Tabs.Root>
);

export default TabsDemo;
