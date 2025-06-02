interface TextAreaProps {
  label: string;
}

const TextArea = ({ label }: TextAreaProps) => {
  return (
    <div className="pl-[30px] w-full">
      <label className="hidden">{label}</label>
      <textarea
        placeholder={label}
        rows={4}
        cols={50}
        name={label.toLowerCase()}
        className="text-lg bg-white text-black py-2.5 px-3 w-full"
        required
      />
    </div>
  );
};

export default TextArea;
