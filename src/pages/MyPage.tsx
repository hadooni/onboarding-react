import { useRef, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { useUpdateUser } from "../hooks/mutations";
import Avatar from "../components/Avatar";
import Nickname from "../components/Nickname";

const MyPage = () => {
  const [newNickname, setNewNickname] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const { nickname, avatar } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useUpdateUser();

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileUrl(imageUrl);
    }
  };

  const handleUpdateUser = () => {
    mutate(
      { profileUrl, newNickname },
      {
        onSuccess: () => {
          alert("프로필 정보가 변경되었습니다!");
        },
      }
    );
  };

  return (
    <section className="flex flex-col items-center gap-8 justify-center mt-10">
      <Avatar
        avatar={avatar}
        onAvatarChange={handleFileInputChange}
        fileInputRef={fileInputRef}
        profileUrl={profileUrl}
      />
      <Nickname
        newNickname={newNickname}
        onChangeNickname={handleChangeNickname}
        nickname={nickname}
      />
      <button
        onClick={handleUpdateUser}
        className="bg-gray-200 font-bold px-4 py-2 rounded-3xl"
      >
        수정 완료
      </button>
    </section>
  );
};

export default MyPage;
