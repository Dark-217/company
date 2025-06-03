import { useState } from "react";
import { useTranslation } from "react-i18next";
import image1 from "../assets/images/career/image1.webp";
import Button from "../components/Button";
import CareerItem from "../components/CareerItem";

const Career = () => {
  const { t } = useTranslation();

  const [current, setCurrent] = useState(0);

  const careers = [
    {
      industry: "Business Strategy & Operations",
      jobs: [
        {
          title: "Messaging Strategy & Operations Analyst, Deliverability",
          region: "United States",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Senior Product Analyst, Strategy and Operations",
          region: "United States",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
        {
          title: "Senior Technical Program Manager, Email",
          region: "United States",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
      ],
    },
    {
      industry: "Customer Success",
      jobs: [
        {
          title: "Director, Customer Success (West)",
          region: "United States",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
      ],
    },
    {
      industry: "Engineering",
      jobs: [
        {
          title: "Data Scientist II",
          region: "San Francisco, CA",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Senior Business Systems Analyst, Netsuite",
          region: "United States",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
        {
          title: "Senior Data Scientist/Applied Scientist, AI Products",
          region: "San Francisco, CA",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
        {
          title: "Senior Data Scientist/Applied Scientist, AI Products",
          region: "New York, NY",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Senior Machine Learning Engineer",
          region: "San Francisco, CA",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
        {
          title: "Senior Software Engineer",
          region: "New York, NY",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
        {
          title: "Senior Software Engineer, BI Engineering",
          region: "United States",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Senior Software Engineer, Developer Tools",
          region: "United States",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
        {
          title: "Staff Machine Learning Engineer",
          region: "San Francisco, CA",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
        {
          title: "Staff Software Engineer",
          region: "New York, NY",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
      ],
    },
    {
      industry: "Marketing",
      jobs: [
        {
          title: "Senior Product Marketing Manager",
          region: "United States",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Solutions Marketing Manager",
          region: "United States",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
      ],
    },
    {
      industry: "Product",
      jobs: [
        {
          title: "Principal Product Manager, Data Ingestion",
          region: "United States",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
        {
          title: "Principal Product Manager, Reporting",
          region: "United States",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Senior Product Manager, Enterprise Email",
          region: "New York, NY",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
        {
          title: "Senior Product Manager, RCS Business Messaging",
          region: "New York, NY",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
      ],
    },
    {
      industry: "Sales",
      jobs: [
        {
          title: "Account Director, Core Verticals",
          region: "United States",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Account Director, New Verticals",
          region: "United States",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
        {
          title: "Account Manager, Enterprise Sales",
          region: "United States",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
        {
          title: "Analyst, Order Operations (Expansion)",
          region: "United States",
          url: "https://jobs.lever.co/attentive/f4a9f949-b187-4645-8941-df27e5547d7a",
        },
        {
          title: "Deal Strategy (Sales) Analyst",
          region: "United States",
          url: "https://jobs.lever.co/attentive/50c1ac89-7635-4d3c-a4ae-651311c93033",
        },
        {
          title: "Director of Sales, Australia",
          region: "Sydney",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
        {
          title: "Director, Global Sales Operations",
          region: "United States",
          url: "https://jobs.lever.co/attentive/56c93971-eebc-4279-b2c0-f6740f3cf088",
        },
      ],
    },
  ];

  return (
    <>
      <section className="min-h-[661px] bg-[#292d33]">
        <img
          className="w-full h-[625px] mb-9 object-cover"
          src={image1}
          alt="career landing"
        />
      </section>
      <section className="bg-[#292d33] text-white">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto">
          <h2 className="text-[40px] sm:text-5xl lg:text-6xl xl:text-[65px] mx-1.5 mt-[60px] xl:mx-[106px] font-[Ubuntu] font-semibold text-center">
            {t("gotProject.title1")}
            <br />
            {t("gotProject.title2")}
          </h2>
          <p className="w-[340px] sm:w-[540px] md:w-[609px] text-lg mt-7 mx-auto text-[#d9d9d9] text-center">
            {t("gotProject.description")}
            <br />
          </p>
          <Button
            className="mt-[50px] mx-auto mb-[60px]"
            type="outline"
            to="contact"
          >
            {t("contactus")}
          </Button>
        </div>
      </section>
      <section className="bg-[#e0e5eb]">
        <div className="flex flex-col justify-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto">
          <h2 className="text-2xl sm:text-5xl mt-16 sm:mt-20 mx-0 sm:mx-auto font-bold font-[Ubuntu] text-center">
            {t("career.section3.title")}
          </h2>
          <div className="flex flex-col gap-4 mt-10 mb-16">
            {careers.map((career, index) => (
              <CareerItem
                key={index}
                data={career}
                active={current === index}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
