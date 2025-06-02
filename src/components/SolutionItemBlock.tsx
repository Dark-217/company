interface SolutionItemBlockProps {
  data: string;
}

const SolutionItemBlock = ({ data }: SolutionItemBlockProps) => {
  return (
    <li className="relative ml-[1.1em]">
      <div className="text-[#f44336] inline-block absolute w-[1em] min-h-[1em] h-auto -left-[1.2em] fill-current">
        <svg
          className="inline-block relative text-[0.8em] w-[1em] h-[1em]"
          viewBox="0 0 512 512"
        >
          <path
            d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
            fill="currentColor"
          ></path>
        </svg>
      </div>{" "}
      {data}
    </li>
  );
};

export default SolutionItemBlock;
