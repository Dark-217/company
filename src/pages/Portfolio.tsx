import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import image1 from "../assets/images/portfolio/image1.webp";
import image2 from "../assets/images/portfolio/image2.webp";
import image3 from "../assets/images/portfolio/image3.webp";
import image4 from "../assets/images/portfolio/image4.webp";
import image5 from "../assets/images/portfolio/image5.webp";
import image6 from "../assets/images/portfolio/image6.webp";
import image7 from "../assets/images/portfolio/image7.webp";
import image8 from "../assets/images/portfolio/image8.webp";
import image9 from "../assets/images/portfolio/image9.webp";
import image10 from "../assets/images/portfolio/image10.webp";
import Project from "../components/Project";
import PortfolioCounter from "../components/PortfolioCounter";
import FindUs from "../components/FindUs";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: image2,
      title: t("portfolio.section3.projects.project1.title"),
      description: t("portfolio.section3.projects.project1.description"),
    },
    {
      image: image3,
      title: t("portfolio.section3.projects.project2.title"),
      description: t("portfolio.section3.projects.project2.description"),
    },
    {
      image: image4,
      title: t("portfolio.section3.projects.project3.title"),
      description: t("portfolio.section3.projects.project3.description"),
    },
    {
      image: image5,
      title: t("portfolio.section3.projects.project4.title"),
      description: t("portfolio.section3.projects.project4.description"),
    },
    {
      image: image6,
      title: t("portfolio.section3.projects.project5.title"),
      description: t("portfolio.section3.projects.project5.description"),
    },
    {
      image: image7,
      title: t("portfolio.section3.projects.project6.title"),
      description: t("portfolio.section3.projects.project6.description"),
    },
    {
      image: image8,
      title: t("portfolio.section3.projects.project7.title"),
      description: t("portfolio.section3.projects.project7.description"),
    },
    {
      image: image9,
      title: t("portfolio.section3.projects.project8.title"),
      description: t("portfolio.section3.projects.project8.description"),
    },
    {
      image: image10,
      title: t("portfolio.section3.projects.project9.title"),
      description: t("portfolio.section3.projects.project9.description"),
    },
  ];

  const counters = [
    {
      icon: (
        <>
          <svg
            className="fill-current"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 60 60"
          >
            <use xlinkHref="#svg-e2b2"></use>
          </svg>
          <svg
            className="w-0"
            viewBox="0 0 60 60"
            x="0px"
            y="0px"
            id="svg-e2b2"
          >
            <path d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951  c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319  c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056  v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309  c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043  C53,47.519,51.089,44.427,48.014,42.889z"></path>
          </svg>
        </>
      ),
      title: t("portfolio.section4.counter1"),
      count: 16,
    },
    {
      icon: (
        <>
          <svg
            className="fill-current"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 511.999 511.999"
          >
            <use xlinkHref="#svg-3852"></use>
          </svg>
          <svg
            className="w-0"
            viewBox="0 0 511.999 511.999"
            x="0px"
            y="0px"
            id="svg-3852"
          >
            <g>
              <g>
                <path d="M438.09,273.32h-39.596c4.036,11.05,6.241,22.975,6.241,35.404v149.65c0,5.182-0.902,10.156-2.543,14.782h65.461    c24.453,0,44.346-19.894,44.346-44.346v-81.581C512,306.476,478.844,273.32,438.09,273.32z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M107.265,308.725c0-12.43,2.205-24.354,6.241-35.404H73.91c-40.754,0-73.91,33.156-73.91,73.91v81.581    c0,24.452,19.893,44.346,44.346,44.346h65.462c-1.641-4.628-2.543-9.601-2.543-14.783V308.725z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M301.261,234.815h-90.522c-40.754,0-73.91,33.156-73.91,73.91v149.65c0,8.163,6.618,14.782,14.782,14.782h208.778    c8.164,0,14.782-6.618,14.782-14.782v-149.65C375.171,267.971,342.015,234.815,301.261,234.815z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M256,38.84c-49.012,0-88.886,39.874-88.886,88.887c0,33.245,18.349,62.28,45.447,77.524    c12.853,7.23,27.671,11.362,43.439,11.362c15.768,0,30.586-4.132,43.439-11.362c27.099-15.244,45.447-44.28,45.447-77.524    C344.886,78.715,305.012,38.84,256,38.84z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M99.918,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,36.655,29.82,66.475,66.475,66.475    c9.298,0,18.152-1.926,26.195-5.388c13.906-5.987,25.372-16.585,32.467-29.86c4.98-9.317,7.813-19.946,7.813-31.227    C166.393,151.51,136.573,121.689,99.918,121.689z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M412.082,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,11.282,2.833,21.911,7.813,31.227    c7.095,13.276,18.561,23.874,32.467,29.86c8.043,3.462,16.897,5.388,26.195,5.388c36.655,0,66.475-29.82,66.475-66.475    C478.557,151.509,448.737,121.689,412.082,121.689z"></path>
              </g>
            </g>
          </svg>
        </>
      ),
      title: t("portfolio.section4.counter2"),
      count: 47,
    },
    {
      icon: (
        <>
          <svg
            className="fill-current"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 31.217 31.217"
          >
            <use xlinkHref="#svg-34c3"></use>
          </svg>
          <svg
            className="w-0"
            viewBox="0 0 31.217 31.217"
            x="0px"
            y="0px"
            id="svg-34c3"
          >
            <g>
              <g id="c48_bag">
                <path d="M29.066,8.165h-8.303v-1.04c0-4.429-4.201-4.169-4.201-4.169h-1.986c-4.428,0-4.199,4.2-4.199,4.2v1.009H2.042    C-0.076,8.165,0,10.25,0,10.25v4.07c0,0,8.889,3.234,15.543,3.234c7.271,0,15.671-3.266,15.671-3.266V10.25    C31.215,8.066,29.066,8.165,29.066,8.165z M13.18,7.038c0-2.085,2.447-2.116,2.447-2.116c2.482,0,2.406,2.148,2.406,2.148v1.043    H13.18V7.038z M18.189,16.781l-5.164,0.004v-1.991h5.164V16.781z"></path>
                <path d="M31.215,26.178V15.791c0,0-6.762,3.114-15.716,3.114C7.262,18.905,0,15.694,0,15.694v10.483    c0,2.117,2.008,2.086,2.008,2.086H29.1C31.346,28.264,31.215,26.178,31.215,26.178z M18.189,20.685    c0,0.715-0.576,1.292-1.289,1.292h-2.584c-0.713,0-1.291-0.577-1.291-1.292v-1.332h5.164V20.685z"></path>
              </g>
            </g>
          </svg>
        </>
      ),
      title: t("portfolio.section4.counter3"),
      count: 56,
    },
    {
      icon: (
        <>
          <svg
            className="fill-current"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 512 512"
          >
            <use xlinkHref="#svg-26cd"></use>
          </svg>
          <svg
            className="w-0"
            viewBox="0 0 512 512"
            x="0px"
            y="0px"
            id="svg-26cd"
          >
            <g>
              <g>
                <path d="M486.4,25.6h-76.8V0H102.4v25.6H25.6C10.24,25.6,0,35.84,0,51.2v61.44c0,58.88,43.52,107.52,102.4,115.2v2.56    c0,74.24,51.2,135.68,120.32,151.04L204.8,435.2h-58.88c-10.24,0-20.48,7.68-23.04,17.92L102.4,512h307.2l-20.48-58.88    c-2.56-10.24-12.8-17.92-23.04-17.92H307.2l-17.92-53.76c69.12-15.36,120.32-76.8,120.32-151.04v-2.56    c58.88-7.68,102.4-56.32,102.4-115.2V51.2C512,35.84,501.76,25.6,486.4,25.6z M102.4,176.64c-28.16-7.68-51.2-33.28-51.2-64V76.8    h51.2V176.64z M307.2,256L256,227.84L204.8,256l12.8-51.2l-38.4-51.2h53.76L256,102.4l23.04,51.2h53.76l-38.4,51.2L307.2,256z     M460.8,112.64c0,30.72-23.04,58.88-51.2,64V76.8h51.2V112.64z"></path>
              </g>
            </g>
          </svg>
        </>
      ),
      title: t("portfolio.section4.counter4"),
      count: 23,
    },
  ];

  return (
    <>
      <section className="bg-[#292d33] text-white">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] min-h-[993px] sm:min-h-[1169px] md:min-h-[1190px] lg:min-h-[1158px] xl:min-h-[1168px] m-auto">
          <div className="relative w-[242px] sm:w-[358px] md:w-[666px] h-[172px] sm:h-[159px] md:h-[183px] lg:h-[375px] mt-11 sm:mt-[60px] lg:mt-[55px] xl:mt-[60px] mr-auto bg-[#eb6928]"></div>
          <div className="relative w-[224px] sm:w-[343px] md:w-[471px] h-[178px] sm:h-[343px] md:h-[637px] -mt-[280px] sm:-mt-[451px] md:-mt-[625px] xl:-mt-[817px] ml-auto bg-[#eb6928]"></div>
          <img
            src={image1}
            alt="porfolio landing"
            className="relative w-[315px] sm:w-[436px] md:w-auto lg:w-[780px] xl:w-[1016px] h-[202px] sm:h-[337px] md:h-[465px] lg:h-[614px] xl:h-[677px] -mt-[133px] sm:-mt-[286px] md:-mt-[566px] mr-0 sm:mr-auto ml-auto md:mx-0 lg:mx-auto object-cover"
          />
          <div className="relative flex w-full md:w-[600px] xl:w-[804px] min-h-[545px] xl:min-h-[504px] h-auto mt-[81px] sm:mt-[109px] md:-mt-8 lg:-mt-[181px] xl:-mt-[244px] -mb-16 sm:-mb-[232px] md:-mb-[382px] lg:-mb-[387px] xl:-mb-[382px] mx-0 md:mr-auto md:ml-[120px] lg:ml-[159px] xl:mr-[119px] xl:ml-auto bg-white text-[#111]">
            <div className="flex-1 px-5 md:px-[30px] py-[30px] flex flex-col justify-center">
              <h3 className="text-4xl sm:text-[50px] xl:text-6xl font-bold capitalize font-[Ubuntu]">
                {t("portfolio.section1.title")}
                <br />
              </h3>
              <p className="text-xl mt-10">
                {t("portfolio.section1.description")}
              </p>
              <Button className="mt-6 mr-auto" to="contact">
                {t("contactus")}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#292d33] text-white">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto text-center">
          <h2 className="font-bold mt-[60px] mx-auto text-[40px] sm:text-5xl lg:text-6xl xl:text-[65px] font-[Ubuntu]">
            {t("portfolio.section2.title")}
          </h2>
          <p className="w-[340px] sm:w-[540px] text-2xl md:w-[720px] md:text-[30px] lg:w-[737px] mt-[30px] mx-auto">
            {t("portfolio.section2.description")}
          </p>
          <Button
            className="mt-[52px] mb-[60px] mx-auto"
            to="contact"
            type="fillWhiteBlack"
          >
            {t("contactus")}
          </Button>
        </div>
      </section>
      <section className="bg-[#292d33] text-white text-center">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto">
          <h2 className="mt-[60px] text-[40px] font-semibold sm:text-5xl lg:text-6xl font-[Ubuntu]">
            {t("portfolio.section3.title")}
          </h2>
          <p className="w-[340px] sm:w-[540px] md:w-[659px] text-lg mt-5 mx-auto">
            {t("portfolio.section3.description")}
          </p>
          <div className="flex flex-col mt-[50px] mb-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <Project key={index} data={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eb6928] text-white text-center">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto">
          <div className="my-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {counters.map((counter) => (
                <PortfolioCounter data={counter} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <FindUs />
    </>
  );
};

export default Portfolio;
