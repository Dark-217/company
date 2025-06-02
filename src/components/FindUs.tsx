import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const FindUs = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#292d33] text-white">
      <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] min-h-[346px] md:min-h-[400px] m-auto">
        <h2 className="text-5xl lg:text-6xl xl:text-[65px] mt-[60px] mx-auto font-[Ubuntu] font-semibold text-center">
          {t("findUs.title")}
        </h2>
        <h6 className="text-2xl mt-[50px] mb-[60px] mx-auto text-center font-[Ubuntu] font-light">
          {t("findUs.getIn")}{" "}
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="text-[#eb6928] inline border-b-[1px] border-[#eb6928] py-[7px] cursor-pointer"
          >
            {t("findUs.touchWithUs")}
          </Link>{" "}
          {t("findUs.orFind")}{" "}
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="text-[#eb6928] inline border-b-[1px] border-[#eb6928] py-[7px] cursor-pointer"
          >
            {t("findUs.anOffice")}
          </Link>{" "}
          {t("findUs.closestToYou")}
        </h6>
      </div>
    </section>
  );
};

export default FindUs;
