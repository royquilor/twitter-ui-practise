import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  return (
    <div className="sticky top-0 bg-white xflex xflex-1 py-2 mb-3">
      <form className="flex flex-col flex-1 gap-y-4">
        <div className="flex flex-1 relative">
          <HiMagnifyingGlass className="w-5 h-5 left-2.5 h-full absolute flex items-center xbg-red-200" />
          <input type="search" placeholder="Search" className="w-full flex items-center pl-10 pr-4 text-sm placeholder:text-sm py-2 bg-slate-100 border-slate-100 placeholder:text-slate-700 rounded-full" />
          <button className="sr-only bg-slate-900 font-bold text-white px-4 py-2 text-sm rounded-full">Tweet</button>  
        </div>
      </form>
    </div>
  )
}

export default Search