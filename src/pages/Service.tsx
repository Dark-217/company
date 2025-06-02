import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import Button from "../components/Button";
import SolutionBlock from "../components/SolutionBlock";
import Offer from "../components/Offer";
import ServiceCounter from "../components/ServiceCounter";
import image1 from "../assets/images/service/image1.jpg";
import image2 from "../assets/images/service/image2.png";
import image3 from "../assets/images/service/image3.png";
import image4 from "../assets/images/service/image4.png";
import image5 from "../assets/images/service/image5.jpg";
import FindUs from "../components/FindUs";

const Service = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t("service.section2.solutions.solution1.title"),
      data: [
        t("service.section2.solutions.solution1.data1"),
        t("service.section2.solutions.solution1.data2"),
        t("service.section2.solutions.solution1.data3"),
        t("service.section2.solutions.solution1.data4"),
      ],
    },
    {
      title: t("service.section2.solutions.solution2.title"),
      data: [
        t("service.section2.solutions.solution2.data1"),
        t("service.section2.solutions.solution2.data2"),
        t("service.section2.solutions.solution2.data3"),
        t("service.section2.solutions.solution2.data4"),
      ],
    },
  ];

  const offers = [
    {
      image: image2,
      title: t("service.section3.offers.offer1.title"),
      description: t("service.section3.offers.offer1.description"),
      className: "mx-auto mt-0 lg:mt-[214px] md:ml-0",
    },
    {
      image: image3,
      title: t("service.section3.offers.offer2.title"),
      description: t("service.section3.offers.offer2.description"),
      className: "mx-auto md:ml-0",
    },
    {
      image: image4,
      title: t("service.section3.offers.offer3.title"),
      description: t("service.section3.offers.offer3.description"),
      className: "mx-auto md:ml-0 md:mt-0 lg:mt-[234px]",
    },
  ];

  const counters = [
    { title: t("service.section6.counters.counter1"), count: "220" },
    { title: t("service.section6.counters.counter2"), count: "12" },
    { title: t("service.section6.counters.counter3"), count: "100%" },
  ];

  return (
    <>
      <section className="flex flex-col bg-[#292d33] text-white">
        <div className="relative w-[340px] sm:w-[432px] h-[222px] sm:h-[264px] md:h-[376px] lg:h-[443px] xl:h-[595px] mr-auto sm:mr-[calc(((100%-540px)/2))] md:mr-[calc(((100%-720px)/2))] lg:mr-[calc(((100%-940px)/2))] xl:mr-[calc(((100%-1140px)/2))] mt-16  ml-auto bg-[#eb6928]"></div>
        <img
          className="relative w-[340px] h-[234px] -mt-[276px] sm:w-[540px] sm:h-[372px] sm:-mt-[318px] md:w-[704px] md:h-[w-485px] md:-mt-[430px] lg:w-[896px] lg:h-[617px] lg:-mt-[506px] xl:w-[1140px] xl:h-[741px] xl:-mt-[658px] mr-auto object-center overflow-hidden object-cover"
          src={image1}
          alt="sevice landing"
        />
        <div className="relative w-[340px] sm:w-[418px] md:w-[492px] lg:w-[572px] xl:w-[668px] mt-[66px] ml-auto mb-[49px] min-h-[538px] sm:mt-[-68px] sm:ml-[calc(((100%-540px)/2))] sm:mb-[60px] md:min-h-[524px] md:-mt-[101px] md:ml-[calc(((100%-720px)/2))] lg:min-h-[532px] lg:-mt-[51px] lg:mb-[55px] lg:ml-[calc(((100%-940px)/2))] h-auto xl:min-h-[526px] xl:-mt-[175px] xl:mb-[60px] xl:ml-[calc(((100%-1140px)/2))] mr-auto bg-[#292d33] flex">
          <div className="pr-2.5 pl-0 md:px-[30px] lg:px-[50px] py-[30px] flex flex-col justify-center flex-1">
            <h2 className="text-[40px] mr-0 md:text-5xl lg:text-6xl xl:text-[65px] sm:mr-[3px] font-semibold font-[Ubuntu]">
              {t("gotProject.title1")}
              <br />
              {t("gotProject.title2")}
            </h2>
            <p className="mt-7 text-[#d9d9d9]">
              {t("gotProject.description")}
              <br />
            </p>
            <Button className="mt-[46px] mr-auto" to="contact">
              {t("contactus")}
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#292d33] text-white">
        <div className="w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] min-h-[425px] md:min-h-[325px] lg:min-h-[506px] xl:min-h-[587px] flex flex-col justify-center m-auto">
          <div className="my-[60px] w-full">
            <div className="flex flex-col">
              <div className="flex-[30_0_auto] flex">
                <div className="flex flex-wrap flex-[1_1_auto]">
                  <div className="min-w-full min-h-[100px] lg:min-h-[113px] xl:min-h-[137px] flex-[0_0_100%] flex">
                    <div className="px-2.5 md:px-[30px] pt-0 pb-[30px] flex flex-col justify-start flex-1">
                      <h2 className="mr-auto text-[40px] sm:text-5xl lg:text-6xl font-[Ubuntu] font-semibold ">
                        {t("service.section2.title")}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[30_0_auto] flex">
                <div className="flex flex-wrap flex-[1_1_auto]">
                  <div className="min-w-full min-h-[100px] lg:min-h-[229px] xl:min-h-[270px] flex-[0_0_30%] flex md:min-w-[30%] bg-[#eb6928]">
                    <div className="px-2.5 md:px-[30px] py-[30px] flex-1">
                      <h2 className="text-4xl font-['Baloo_2'] font-semibold">
                        {t("service.section2.caption")}
                      </h2>
                    </div>
                  </div>
                  {solutions.map((solution, index) => (
                    <SolutionBlock key={index} data={solution} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-[#111]">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] min-h-[599px] md:min-h-[499px] lg:min-h-[834px] xl:min-h-[783px] m-auto">
          <h2 className="mt-[60px] text-[40px] font-semibold sm:text-5xl lg:text-6xl xl:text-[65px] font-[Ubuntu] text-center">
            {t("service.section3.title")}
          </h2>
          <div className="mt-[47px] mb-[60px]">
            <div className="flex flex-wrap">
              {offers.map((offer, index) => (
                <Offer key={index} data={offer} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <FindUs />
      <section className="min-h-[833px] sm:min-h-[931px] md:min-h-[1027px] lg:min-h-[1133px] xl:min-h-[1153px] text-[#111] bg-white">
        <div className="h-[450px] md:h-[588px] xl:h-[614px] bg-[#292d33] w-full"></div>
        <img
          className="relative w-[340px] h-[221px] mr-[calc(((100%-340px)/2))] sm:w-[492px] sm:h-[319px] sm:mr-[calc(((100%-540px)/2))] -mt-[380px] md:w-[642px] md:h-[437px] md:mr-[calc(((100%-720px)/2))] md:-mt-[518px] lg:w-[848px] lg:h-[566px] lg:mr-[calc(((100%-940px)/2))] lg:-mt-[491px] xl:w-[1004px] xl:h-[652px] xl:mr-[calc(((100%-1140px)/2))] xl:-mt-[517px] ml-auto"
          alt="image5"
          src={image5}
        />
        <div className="relative flex w-[340px] sm:w-[436px] md:w-[581px] xl:w-[629px] mt-9 sm:-mt-16 md:-mt-[75px] lg:-mt-32 xl:-mt-[215px] ml-[calc(((100%-340px)/2))] sm:ml-[calc(((100%-540px)/2))] md:ml-[calc(((100%-720px)/2))] lg:ml-[calc(((100%-940px)/2))] xl:ml-[calc(((100%-1140px)/2))] mb-[60px] mr-auto bg-white text-[#111]">
          <div className="px-5 md:px-[30px] lg:px-[45px] py-[30px] flex flex-col justify-center flex-1">
            <h3 className="text-4xl sm:text-[55px] xl:text-6xl font-bold capitalize">
              {t("service.section5.title")}
            </h3>
            <p className="text-xl mt-7">{t("service.section5.description")}</p>
            <Button to="contact" className="mt-20 mr-auto">
              {t("contactus")}
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] min-h-[617px] m-auto">
          <h2 className="mt-[60px] mx-auto text-[40px] sm:text-5xl lg:text-6xl xl:text-[65px] font-[Ubuntu] font-semibold text-center">
            {t("service.section6.title")}
          </h2>
          <div className="my-[60px] flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[662px] lg:min-h-[288px] gap-2.5 xl:min-h-[349px]">
              {counters.map((counter, index) => (
                <ServiceCounter key={index} data={counter} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eb6928] text-white text-center">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] min-h-[475px] lg:min-h-[527px] m-auto">
          <h2 className="font-bold mt-[60px] mx-auto text-[40px] sm:text-5xl lg:text-6xl xl:text-[65px] font-[Ubuntu]">
            {t("service.section7.title")}
          </h2>
          <p className="w-[340px] sm:w-[540px] md:w-[720px] lg:w-[737px] text-2xl md:text-3xl mt-[30px] mx-auto">
            {t("service.section7.description")}
          </p>
          <Button
            className="mt-[52px] mx-auto mb-[60px]"
            type="fillWhiteBlack"
            to="contact"
          >
            {t("contactus")}
          </Button>
        </div>
      </section>
    </>
  );
};

export default Service;
