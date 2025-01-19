type AvatarTypes = {
  avatar: string | null;
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  profileUrl: string;
};
const Avatar = ({
  avatar,
  onAvatarChange,
  fileInputRef,
  profileUrl,
}: AvatarTypes) => {
  return (
    <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden cursor-pointer">
      <input onChange={onAvatarChange} type="file" ref={fileInputRef} hidden />
      <img
        src={
          profileUrl !== "/image/profile.jpg"
            ? profileUrl
            : avatar || profileUrl
        }
        className="absolute w-full h-full object-cover"
        width={150}
        height={150}
        onClick={() => fileInputRef.current?.click()}
      />
    </div>
  );
};

export default Avatar;
