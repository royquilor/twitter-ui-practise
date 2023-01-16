import Link from "next/link"

const NavItem = ({ text, href, children }) => {
  return (
    <Link className="inline-flex justify-center xl:justify-start items-center gap-x-4 text-slate-900 my-1 " href={href}>
      <div className="flex flex-row gap-x-4 rounded-full px-4 py-3 hover:bg-slate-200">
        <div>{children}</div>
        <div className="hidden xl:inline-flex flex-none text-lg font-medium">{text}</div>
      </div>  
    </Link>
)
}

export default NavItem