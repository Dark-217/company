import SolutionItemBlock from "./SolutionItemBlock";

interface SolutionBlockProps {
  data: { title: string; data: string[] };
}

const SolutionBlock = ({ data }: SolutionBlockProps) => {
  return (
    <div className="min-w-full min-h-[100px] lg:min-h-[223px] xl:min-h-[270px] flex-[0_0_35%] flex md:min-w-[35%]">
      <div className="px-2.5 md:px-[30px] py-[30px] flex-1">
        <h5 className="font-['Baloo_2'] capitalize text-xl">{data.title}</h5>
        <ul className="text-lg text-shadow-[2px_2px_8px_rgba(0,0,0,.4)] text-white mt-[30px]">
          {data.data.map((item, index) => (
            <SolutionItemBlock key={index} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SolutionBlock;
