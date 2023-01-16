import Avatar from "../Avatar"
import Link from "next/link";

// import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

const Panel = ({title, href, children}) => {
  return (
     <div className="bg-slate-50 rounded-xl mb-3">
        <div className="px-4 py-4">   
          <h2 className="text-xl font-bold leading-none">{title}</h2> 
        </div>    
        {children}
        <div className="px-4 py-4"> 
            <Link className="text-sm font-medium" href={href}>Show more</Link>
        </div> 
    </div>
  )
}

export default Panel