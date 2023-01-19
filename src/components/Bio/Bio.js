import Image from "next/image"

const Bio = ({ avatar, name, tagline, role }) => {
  return (
    <div className="flex gap-x-5 gap-y-5 p-8">
      <div className="flex-shrink-0 text-xs">
        <Image
          width={96}
          height={96}
          className="h-24 w-24 rounded-full"
          src={avatar}
          alt={`Headshot of ${name}`} />  
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-base mb-1">{tagline}</p>
        </div>
        <div className="text-sm text-slate-500">{role}</div>
      </div>
    </div>
  )
}

export default Bio