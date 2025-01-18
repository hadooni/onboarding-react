import { useState } from "react";

type NicknameProps = {
  newNickname: string;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
};

const Nickname = ({
  newNickname,
  onChangeNickname,
  nickname,
}: NicknameProps) => {
  const [edited, setEdited] = useState(false);

  const handleNicknameEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setEdited(true);
  };

  return (
    <div className="flex gap-4">
      {edited ? (
        <input
          type="text"
          placeholder="닉네임 입력"
          value={newNickname}
          onChange={onChangeNickname}
          className="h-5 border-b border-t-0 border-x-0 focus:outline-none text-center text-sm"
        />
      ) : (
        <span className="text-lg">{nickname}</span>
      )}
      {edited ? null : (
        <button onClick={handleNicknameEdit} className="text-lg">
          ✐
        </button>
      )}
    </div>
  );
};

export default Nickname;
