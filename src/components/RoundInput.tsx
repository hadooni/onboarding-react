export type RoundInputProps = {
  placeholder: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const RoundInput = ({
  placeholder,
  type,
  value,
  setValue,
}: RoundInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleInputChange}
      className="border-2 border-gray-400 rounded-3xl text-sm md:w-[23rem] w-[16rem] px-4 py-3 font-medium focus:outline-none"
    />
  );
};

export default RoundInput;
