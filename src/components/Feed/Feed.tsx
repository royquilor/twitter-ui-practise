import Image from "next/image";
import { Post } from "../Post/Post";
import { ReactNode } from "react";

interface PostItem {
  name: string;
  username: string;
  content: string;
  date: string;
  src: string;
  initials: string;
  image?: ReactNode;
}

const items: PostItem[] = [
  {
    name: "Jane Doe",
    username: "janedoe",
    content: "Design and build templates",
    date: "19/1/2023",
    src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
    image: (
      <div className="w-full relative -z-10 h-80 mb-4">
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-3xl"
          src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt="Gradient"
        />
      </div>
    ),
  },
  {
    name: "John Doe",
    username: "johndoe",
    content: "I love Figma",
    date: "18/1/2023",
    src: "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
  },
  {
    name: "Jessica Doe",
    username: "johndoe",
    content: "I love Figma",
    date: "18/1/2023",
    src: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
  },
  {
    name: "John Doe",
    username: "johndoe",
    content: "I love Figma",
    date: "18/1/2023",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
  },
  {
    name: "Jill Doe",
    username: "jilldoe",
    content: "Next JS documentation is so good",
    date: "17/1/2023",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
  },
  {
    name: "John Doe",
    username: "johndoe",
    content: "I love Figma",
    date: "18/1/2023",
    src: "https://images.unsplash.com/photo-1642060603505-e716140d45d2?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
  },
  {
    name: "Jean Doe",
    username: "jeandoe",
    content: "How to use custom fonts with Storybook",
    date: "16/1/2023",
    src: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
  },
  {
    name: "John Doe",
    username: "johndoe",
    content: "I love Figma",
    date: "18/1/2023",
    src: "",
    initials: "JD",
  },
  {
    name: "Jenny Doe",
    username: "jennydoe",
    content: "Why use Storybook?",
    date: "15/1/2023",
    src: "https://images.unsplash.com/photo-1597004897768-c503466472cc?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    initials: "JD",
  },
];

const Feed = () => {
  return (
    <ul className="[&_p:last-child]:text-slate-500 [&_p:first-child]:text-lg divide-y divide-slate-200">
      {items.map(
        ({ name, username, content, date, src, initials, image }, i) => (
          <li key={`username-${i}`} className="p-4">
            <Post
              name={name}
              username={username}
              content={content}
              date={date}
              src={src}
              initials={initials}
            >
              {image}
            </Post>
          </li>
        )
      )}
      {/* <li className="p-4">
           <Post name="Roy Quilor" username="royquilor" content="I love Figma" date="2/1/2023" src="" alt="Roy Quilor" initials="RQ" />
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
         </li> */}
    </ul>
  );
};

export default Feed;
