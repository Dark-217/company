interface ServiceCounterProps {
  data: { title: string; count: string };
}

const ServiceCounter = ({ data }: ServiceCounterProps) => {
  return (
    <div className="flex">
      <div className="px-2.5 md:px-[30px] py-[30px] flex flex-col justify-start flex-1">
        <div className="w-[196px] min-h-[196px] h-auto mx-auto bg-[#eb6928] rounded-full flex">
          <div className="px-2.5 md:px-[30px] py-[30px] rounded-full flex flex-col justify-center flex-1">
            <h3 className="text-4xl sm:text-5xl m-auto font-bold font-[Ubuntu] text-white">
              {data.count}
            </h3>
          </div>
        </div>
        <h5 className="uppercase font-bold tracking-[2px] mt-10 font-[Ubuntu] text-xl text-center">
          {data.title}
        </h5>
      </div>
    </div>
  );
};

export default ServiceCounter;
