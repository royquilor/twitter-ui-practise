import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiArrowUpTray } from 'react-icons/hi2'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { HiOutlineArrowPath } from 'react-icons/hi2'
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { HiOutlineChartBarSquare } from "react-icons/hi2";

const Post = ({ content, name, username, date, children }) => {
  return (
    <div className="flex flex-1 gap-x-4">
      <div className="flex-shrink-0">
      <Image
          width={48}
          height={48}
          className="rounded-full"
          src="https://pbs.twimg.com/profile_images/1489998205236527108/q2REh8nW_400x400.jpg"
          alt={`Headshot of ${name}`} />  
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <div className="flex flex-1 gap-x-1 text-sm">
            <span className="text-slate-900 font-bold">{name}</span>
            <span className="text-slate-600">@{username}</span>·
            <span className="text-slate-600">{date}</span>
          </div>
          <div className="">
            <Link href="/">
              <HiOutlineEllipsisHorizontal className="w-6 h-6" />
            </Link>
          </div> 
        </div>
        <div className="text-sm text-slate-900 font-medium mb-4">
          {content}
        </div>
        <div className="">
          {children}
        </div>
        
        <ul className="flex gap-x-14 text-xs text-slate-600 [&_li]:flex [&_li]:items-center [&_li]:gap-x-2">
          
          <li><HiOutlineChartBarSquare className="w-5 h-5" />20</li>
          <li><HiOutlineChatBubbleOvalLeft className="w-5 h-5" />2</li>
          <li><HiOutlineArrowPath className="w-5 h-5" />1</li>
          <li><HiOutlineHeart className="w-5 h-5" />23</li>
          <li><HiArrowUpTray className="w-5 h-5" /></li>
        </ul>
      </div>  
  </div>
)
}

export default Post;