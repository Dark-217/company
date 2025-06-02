interface TextFieldProps {
  label: string;
}

const TextField = ({ label }: TextFieldProps) => {
  return (
    <div className="pl-[30px] w-full">
      <label className="hidden">{label}</label>
      <input
        type="text"
        placeholder={label}
        name={label.toLowerCase()}
        className="text-lg bg-white text-black py-2.5 px-3 w-full"
        required
      />
    </div>
  );
};

export default TextField;
