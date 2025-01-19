import { useRef, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { useUpdateUser } from "../hooks/mutations";
import Avatar from "../components/Avatar";
import Nickname from "../components/Nickname";

const MyPage = () => {
  const { nickname, avatar, setAvatar, setNickname, userId, accessToken } =
    useAuthStore();
  const [newNickname, setNewNickname] = useState(nickname);
  const [profileUrl, setProfileUrl] = useState(avatar || "/image/profile.jpg");
  const [edited, setEdited] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useUpdateUser();

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  const handleNicknameEdit = () => {
    setEdited(!edited);
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
    if (!newNickname.trim()) {
      alert("닉네임을 입력해주세요!");
      return;
    }
    mutate(
      { profileUrl, newNickname, userId, accessToken },
      {
        onSuccess: () => {
          alert("프로필 정보가 변경되었습니다!");
          setAvatar(profileUrl);
          setNickname(newNickname);
          setEdited(false);
        },
      }
    );
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 mt-10">
      <Avatar
        avatar={avatar}
        onAvatarChange={handleFileInputChange}
        fileInputRef={fileInputRef}
        profileUrl={profileUrl}
      />
      <Nickname
        newNickname={newNickname}
        onChangeNickname={handleChangeNickname}
        edited={edited}
        handleNicknameEdit={handleNicknameEdit}
        nickname={nickname}
      />
      <button
        onClick={handleUpdateUser}
        className="px-4 py-2 font-bold bg-gray-200 rounded-3xl"
      >
        수정 완료
      </button>
    </section>
  );
};

export default MyPage;
