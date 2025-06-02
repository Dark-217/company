import type { ReactNode } from "react";

interface PortfolioCounterProps {
  data: {
    icon: ReactNode;
    count: number;
    title: string;
  };
}

const PortfolioCounter = ({ data }: PortfolioCounterProps) => {
  return (
    <div className="px-2.5 md:px-[30px] py-[30px]">
      <span className="block w-16 h-16 mx-auto p-2.5 border-white rounded-[10px] border-[3px]">
        {data.icon}
      </span>
      <h3 className="text-4xl sm:text-5xl font-[Ubuntu] font-bold mt-[22px] mx-auto">
        {data.count}
      </h3>
      <h6 className="uppercase mt-2.5 font-[Ubuntu]">{data.title}</h6>
    </div>
  );
};

export default PortfolioCounter;
