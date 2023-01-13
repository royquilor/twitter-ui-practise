import { RxHeart } from "react-icons/rx"
import { RxShare2 } from 'react-icons/rx'

const Post = ({ content, date }) => {
  return (
  <>
      <p className="text-lg text-slate-900 mb-2">
        {content}
      </p>
      <ul className="flex gap-x-10 text-xs text-slate-500 [&_li]:flex [&_li]:items-center [&_li]:gap-x-1">
        <li><RxHeart />23</li>
        <li><RxShare2 />8</li>
        <li>{date}</li>
      </ul>
  </>
)
}

export default Post;