import type { AvatarGroupProps } from "../../types";

const AvatarGroup = ({AvatarGroupList}:AvatarGroupProps) => {
  return (
    <div className="flex items-center">
      {AvatarGroupList.map((avatar) => (
        <img
          key={avatar.id}
          src={avatar.img}
          className={`w-9 h-9 shadow-lg rounded-full border-2 border-white  object-cover ${avatar.className}`}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
