import Image from "next/image"
import { Post } from "../Post/Post"

const Feed = () => {
  return (
     <ul className="[&_p:last-child]:text-slate-500 [&_p:first-child]:text-lg divide-y divide-slate-200">
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Create design and build templates" date="3/1/2023">
              <div className="w-full relative -z-10 h-80 mb-4">
              <Image
                fill={true}
                style={{objectFit:"cover"}}
                className="rounded-3xl"
                src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                alt="Gradient" />  
              </div>
            </Post>  
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="I love Figma" date="2/1/2023" />
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Tailwind CSS is insane" date="1/1/2023" />
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Next JS documentation is so good" date="1/1/2023" />
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="How to use custom fonts with Storybook" date="1/1/2023" />
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Why use Storybook?" date="1/1/2023" />
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Vercel and Neflify are pretty cool" date="1/1/2023" />
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Webflow community is awesome" date="1/1/2023" />
          </li>
        </ul>
  )
}

export default Feed