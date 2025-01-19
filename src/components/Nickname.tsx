type NicknameProps = {
  newNickname: string;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
  edited: boolean;
  handleNicknameEdit: () => void;
};

const Nickname = ({
  newNickname,
  onChangeNickname,
  nickname,
  edited,
  handleNicknameEdit,
}: NicknameProps) => {
  return (
    <section className="flex gap-4 items-center">
      {edited ? (
        <>
          <input
            type="text"
            placeholder="닉네임 입력"
            value={newNickname}
            onChange={onChangeNickname}
            className="h-5 border-b border-t-0 border-x-0 focus:outline-none text-center text-lg"
          />
          <button onClick={handleNicknameEdit} className="text-lg">
            x
          </button>
        </>
      ) : (
        <>
          <span className="text-lg px-[4rem]">{nickname}</span>
          <button onClick={handleNicknameEdit} className="text-lg">
            ✐
          </button>
        </>
      )}
    </section>
  );
};

export default Nickname;
