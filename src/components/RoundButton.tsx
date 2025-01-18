type RoundButtonProps = {
  text: string;
  type: "submit" | "button";
  onClick?: () => void;
};

const RoundButton = ({ text, type, onClick }: RoundButtonProps) => {
  return (
    <button
      type={type}
      className="bg-gray-200 rounded-3xl md:w-[23rem] w-[16rem] px-4 py-3"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RoundButton;
