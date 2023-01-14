import Link from "next/link"

const NavItem = ({ text, href, children }) => {
  return (
    <Link className="inline-flex justify-center xl:justify-start items-center gap-x-4 text-slate-900 rounded-full px-4 py-3 my-1 hover:bg-slate-200" href={href}>
      <div>{children}</div>
      <div className="hidden xl:block">{text}</div>
    </Link>
)
}

export default NavItem