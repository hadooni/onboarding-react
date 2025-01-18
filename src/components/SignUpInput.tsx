import RoundInput, { RoundInputProps } from "./RoundInput";

type SignUpInputProps = {
  inputTitle: string;
} & RoundInputProps;

const SignUpInput = ({ inputTitle, ...RoundInputProps }: SignUpInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-normal text-base ml-2">{inputTitle}</span>
      <RoundInput {...RoundInputProps} />
    </div>
  );
};

export default SignUpInput;
