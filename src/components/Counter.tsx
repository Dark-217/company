interface CounterProps {
  title: String;
  count: Number;
}

const Counter = ({ title, count }: CounterProps) => {
  return (
    <div className="relative text-center">
      <div className="px-5 sm:px-2.5 md:px-8 pt-8 md:pt-12 lg:pt-10 pb-7 lg:pb-10 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-black before:opacity-60">
        <div className="relative flex flex-col justify-center w-[119px] min-h-[121px] shadow-[5px_5px_20px_0_rgba(0,0,0,.4)] m-auto bg-[#eb6928] rounded-full">
          <div className="flex flex-col justify-center px-5 sm:px-2.5 md:px-5 rounded-full">
            <h3 className="text-4xl sm:text-[2.75rem] m-auto font-bold capitalize font-[Ubuntu]">
              {count.toString()}
            </h3>
          </div>
        </div>
        <h5 className="relative text-xl md:text-lg uppercase mt-8 m-auto font-[Ubuntu]">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default Counter;
