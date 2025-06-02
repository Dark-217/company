interface OfferProps {
  data: {
    image: any;
    title: string;
    description: string;
    className: string;
  };
}

const Offer = ({ data }: OfferProps) => {
  return (
    <div className="min-w-full min-h-[100px] md:min-h-[475px] lg:min-h-[595px] xl:min-h-[528px] flex-[0_0_33%] flex md:min-w-[33%]">
      <div className="px-2.5 md:px-7 xl:px-[30px] py-[30px] max-lg:flex max-lg:flex-col max-md:justify-start md:max-lg:justify-end flex-1 relative">
        <span
          className={`${data.className} block p-4 w-16 h-16 text-white bg-[#eb6928] rounded-full text-center`}
        >
          <img src={data.image} alt="offer1" />
        </span>
        <h4 className="mt-5 ml-0 lg:-mt-12 lg:ml-[85px] text-xl xl:text-2xl xl:-mt-[50px] xl:ml-[90px] font-[Ubuntu] capitalize font-bold max-md:text-center">
          {data.title}
        </h4>
        <p className="mt-[50px] ml-0 xl:mt-10 xl:ml-2 max-md:text-center">
          {data.description}
          <br />
        </p>
      </div>
    </div>
  );
};

export default Offer;
