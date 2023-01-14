import Link from "next/link"
import { HiOutlineSparkles } from "react-icons/hi2";

const HeaderBlock = ({ title, href, text }) => {
  return (
    <div className="sticky bg-white/75 z-10 backdrop-blur-md top-0 px-4 py-3 flex items-center justify-between border-b border-slate-200">
      <div>
        <h2 className="text-lg font-bold">Home</h2>
      </div>
      <Link className="" href={href}>
        <span className="sr-only">{text}</span>
        <HiOutlineSparkles className="w-6 h-6" />
      </Link>
    </div>  
)
}

export default HeaderBlock