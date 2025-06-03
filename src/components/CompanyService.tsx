import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Link as ArchorLink } from "react-scroll";

interface CompanyServiceProps {
  icon: ReactNode;
  title: String;
  children: ReactNode;
}

const CompanyService = ({ icon, title, children }: CompanyServiceProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex shadow-[5px_5px_20px_0_rgba(0,0,0,.2)]">
      <div className="bg-white px-7 xl:px-5 pb-7 lg:pb-8">
        <span className="block w-20 h-20 bg-white text-[#eb6928] -mt-6 p-4 border-4 border-[#f7c0a5] rounded-xl">
          {icon}
        </span>
        <div className="sm:min-h-[300px] md:min-h-[220px] lg:min-h-[330px] xl:min-h-[270px]">
          <h3 className="text-[#eb6928] text-xl font-[Ubuntu] font-bold capitalize mt-5">
            {title}
          </h3>
          <p className="text-[#999] text-xl leading-8 mt-5">{children}</p>
        </div>
        <ArchorLink
          to="header"
          smooth={true}
          duration={500}
          className="table text-[#111] font-bold uppercase mt-5 border-b-2 border-[#eb6928] leading-5 cursor-pointer"
        >
          <Link to="/service">{t("more")}</Link>
        </ArchorLink>
      </div>
    </div>
  );
};

export default CompanyService;
