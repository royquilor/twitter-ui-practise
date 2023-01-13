const Bio = ({avatar, name, tagline, role}) => {
  return (
    <div className="flex gap-x-5 gap-y-5 mb-10">
      <div className="text-xs">
        <img className="h-24 w-24 rounded-full" src={avatar} alt={`Headshot of ${name}`} />  
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-base mb-1">{tagline}</p>
        </div>
        <div className="text-sm text-sm text-slate-500">{role}</div>
      </div>
    </div>
  )
}

export default Bio