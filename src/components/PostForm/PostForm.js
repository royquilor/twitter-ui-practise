const PostForm = () => {
  return (
        <form className="flex gap-x-2">
            <input type="textarea" placeholder="Text input" className="w-full px-4 py-2 text-sm bg-slate-100 border-slate-100 placeholder:text-slate-600 rounded-full" />
            <button className="bg-slate-900 text-white px-4 py-2 text-sm rounded-full">Tweet</button>  
        </form>
  )
}

export default PostForm