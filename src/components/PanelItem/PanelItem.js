import Avatar from "../Avatar/Avatar";
import { Button } from "../Button/Button";

const PanelItem = ({ name, username, src }) => {
  return (
    <div className="flex flex-1 items-center gap-x-2 px-4 py-3 hover:bg-slate-200">
      <div className="flex items-center gap-x-2 flex-1">
        <div className="flex flex-1 xl:flex-none justify-center xl:justify-start">
          {/* <Avatar src="https://pbs.twimg.com/profile_images/1489998205236527108/q2REh8nW_400x400.jpg" alt="Roy Quilor" /> */}
          <Avatar src={src} alt={name} />
        </div>
        <div className="hidden xl:flex flex-col ">
          <p className="text-base">{name}</p>
          <p className="text-xs text-slate-500">@{username}</p>
        </div>
      </div>
      <div className="">
        <Button size="small">Follow</Button>
      </div>
    </div>
  );
};

export default PanelItem;
