import Image from "next/image"

const Avatar = ({ src, alt }) => {
  return (
    <div className="flex-shrink-0">
      <Image
          width={48}
          height={48}
          className="rounded-full"
          src={src}
          alt={`Headshot of ${alt}`} />  
    </div>
  )
}

export default Avatar