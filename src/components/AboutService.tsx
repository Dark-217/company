import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface AboutServiceProps {
  data: {
    icon: ReactNode;
    title: string;
    description: string;
  };
}

const AboutService = ({ data }: AboutServiceProps) => {
  const { t } = useTranslation();

  return (
    <div className="shadow-[5px_5px_20px_0_rgba(0,0,0,.2)] bg-white">
      <div className="pb-[30px]">
        <div className="min-h-[120px] lg:min-h-[150px] w-full bg-[#eb6928]">
          <div className="px-5 sm:px-2.5 md:px-5 pb-5 flex flex-col justify-end">
            <span className="-mt-[18px] lg:-mt-[30px] mx-auto w-[82px] h-[82px] text-[#eb6928] p-4 border-[#f7c0a5] bg-white rounded-full border-4 block">
              {data.icon}
            </span>
            <h5 className="mt-3 font-bold lg:mt-[18px] font-[Ubuntu] capitalize text-xl text-white">
              {data.title}
            </h5>
          </div>
        </div>
        <p className="mx-[25px] sm:mx-5 mt-[30px] text-lg text-[#999] sm:min-h-[260px] md:min-h-[140px] lg:min-h-[280px] xl:min-h-[230px]">
          {data.description}
        </p>
        <Link
          to="/service"
          className="table border-b-2 font-bold uppercase mt-[26px] mx-auto border-[#eb6928] leading-6"
        >
          {t("more")}
        </Link>
      </div>
    </div>
  );
};

export default AboutService;
