interface ProjectProps {
  data: {
    image: any;
    title: string;
    description: string;
  };
}

const Project = ({ data }: ProjectProps) => {
  return (
    <div className="bg-[#eb6928]">
      <div className="pb-[30px] flex flex-col justify-start">
        <img
          className="w-full h-[289px] sm:h-[459px] md:h-[306px] lg:h-[266px] xl:h-[323px] object-center object-cover"
          src={data.image}
          alt="image"
        />
        <h4 className="mx-5 sm:mx-[30px] lg:mx-auto xl:mx-5 mt-[30px] text-3xl md:text-2xl w-auto lg:w-[240px] xl:w-auto font-bold font-[Ubuntu] capitalize">
          {data.title}
        </h4>
        <p className="mx-5 sm:mx-[30px] lg:mx-auto xl:mx-5 mt-5 w-auto lg:w-[240px] xl:w-auto italic">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Project;
