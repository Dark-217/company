import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import Member from "../components/Member";
import image1 from "../assets/images/team/image1.webp";
import image2 from "../assets/images/team/image2.webp";
import image3 from "../assets/images/team/image3.webp";

const Team = () => {
  const { t } = useTranslation();

  const members = [
    {
      avatar: "images/team/avatar1.webp",
      name: "Jeffrey Brown",
      role: "Worldwide Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar2.webp",
      name: "Ann Richmond",
      role: "Creative Leader",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar3.webp",
      name: "Jennie Roberts",
      role: "Chairman",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar4.webp",
      name: "Alex Greenfield",
      role: "Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar5.webp",
      name: "Walter Lilly",
      role: "Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar6.webp",
      name: "Monica Pouliot",
      role: "Associate Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar7.webp",
      name: "Alex Green",
      role: "Associate Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar8.webp",
      name: "Mila Parker",
      role: "Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar9.webp",
      name: "James Oliver",
      role: "Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar10.webp",
      name: "Steve Weaver",
      role: "Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar11.webp",
      name: "Peter Howard",
      role: "Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
    {
      avatar: "images/team/avatar12.webp",
      name: "Samuel Payne",
      role: "Partner",
      social: {
        facebook: "https://facebook.com/name",
        instagram: "https://instagram.com/name",
        linkedin: "https://linkedin.com/name",
      },
    },
  ];

  return (
    <>
      <section className="flex flex-col bg-[#eb6928]">
        <img
          className="relative h-[404px] sm:h-[573px] md:h-[671px] lg:h-[798px] xl:h-[911px] w-full object-cover"
          src={image1}
          alt="team landing"
        />
        <div className="relative w-[340px] sm:w-[540px] md:w-[720px] lg:w-[816px] xl:w-[922px] -mt-[115px] sm:-mt-[159px] md:-mt-[191px] lg:-mt-[215px] xl:-mt-[248px] mx-auto mb-[60px] bg-white">
          <div className="flex flex-col justify-center px-5 md:px-[30px] lg:px-[45px] py-[30px] text-center">
            <h3 className="text-4xl sm:text-[55px] xl:text-6xl font-[Ubuntu] font-bold capitalize">
              {t("team.section1.title")}
            </h3>
            <p className="text-xl mt-7">{t("team.section1.description")}</p>
            <Button className="mt-5 mx-auto" to="contact">
              {t("contactus")}
            </Button>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto">
          <p className="w-[340px] sm:w-[540px] md:w-[720px] lg:w-[818px] my-[60px] mx-auto text-2xl leading-12">
            {t("team.section2.text")}
          </p>
        </div>
      </section>
      <section className="text-[#111]">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto text-center">
          <h2 className="mt-[60px] lg:mt-[70px] xl:mt-[65px] text-[40px] font-semibold font-[Ubuntu]">
            {t("team.section3.title")}
          </h2>
          <div className="mt-10 mb-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {members.map((member, index) => (
                <Member key={index} data={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto">
          <div className="my-[60px]">
            <div className="-m-[15px]">
              <div className="flex flex-wrap">
                <div className="min-w-full flex-[0_0_100%] max-w-full lg:min-w-[47%] lg:flex-[0_0_47%] lg:max-w-[47%]">
                  <div className="my-[15px] flex-[60_0_auto]">
                    <div className="px-5 md:px-[30px] pb-[30px]">
                      <img
                        className="h-[377px] sm:h-[601px] md:h-[747px] lg:h-[449px] xl:h-[559px] w-full object-cover object-center"
                        src={image2}
                        alt="image2"
                      />
                      <h4 className="mt-[38px] font-[Ubuntu] capitalize text-2xl font-bold">
                        {t("team.section4.title")}
                      </h4>
                      <p className="mr-0 xl:mr-10 mt-5">
                        {t("team.section4.description")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="min-w-full flex-[0_0_100%] max-w-full lg:min-w-[53%] lg:flex-[0_0_53%] lg:max-w-[53%]">
                  <div className="flex flex-col">
                    <div className="my-[15px] flex-[30_0_auto] bg-[#e5e5e5] text-[#111]">
                      <div className="px-4 md:px-[30px] py-[30px] flex flex-col justify-center">
                        <span className="block w-16 h-16 mr-auto">
                          <img
                            src={image3}
                            className="object-contain w-full"
                            alt="image3"
                          />
                        </span>
                        <p className="text-2xl leading-11 mt-5">
                          {t("team.section4.comment")}
                        </p>
                      </div>
                    </div>
                    <div className="my-[15px] flex-[30_0_auto]">
                      <div className="px-5 md:px-[30px] py-[30px] flex flex-col justify-start">
                        <p className="leading-9">
                          {t("team.section4.subDescription")}
                        </p>
                        <Button className="mt-10 mr-auto" to="contact">
                          {t("contactus")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
