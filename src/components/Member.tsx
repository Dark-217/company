import { Link } from "react-router-dom";

interface MemberProps {
  data: {
    avatar: string;
    name: string;
    role: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  };
}

const Member = ({ data }: MemberProps) => {
  return (
    <div className="px-2.5 md:px-[26px] lg:px-[30px] py-[30px] flex flex-col justify-start">
      <img
        src={data.avatar}
        className="w-[238px] h-[238px] lg:w-[168px] lg:h-[168px] xl:w-[210px] xl:h-[210px] mx-auto rounded-full border-[7px] border-[#eb6928] object-cover object-center"
      />
      <h4 className="text-2xl font-bold mt-5 font-[Ubuntu] capitalize">
        {data.name}
      </h4>
      <p className="font-medium text-lg mt-3">{data.role}</p>
      <div className="w-[77px] xl:w-[96px] h-[19px] min-h-4 mt-5 mx-auto flex justify-between items-center">
        <Link className="h-full" target="_blank" to={data.social.facebook}>
          <span className="flex h-full text-[#eb6928] rounded-full">
            <svg
              className="fill-current"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 112 112"
            >
              <use xlinkHref="#svg-ad72"></use>
            </svg>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 112 112"
              id="svg-ad72"
              className="w-0"
            >
              <path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path>
            </svg>
          </span>
        </Link>
        <Link className="h-full" target="_blank" to={data.social.instagram}>
          <span className="flex h-full text-[#eb6928] rounded-full">
            <svg
              className="fill-current"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 112 112"
            >
              <use xlinkHref="#svg-a0a0"></use>
            </svg>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 112 112"
              id="svg-a0a0"
              className="w-0"
            >
              <path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path>
              <path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path>
              <path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path>
            </svg>
          </span>
        </Link>
        <Link className="h-full" target="_blank" to={data.social.linkedin}>
          <span className="flex h-full text-[#eb6928] rounded-full">
            <svg
              className="fill-current"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 112 112"
            >
              <use xlinkHref="#svg-78e1"></use>
            </svg>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 112 112"
              id="svg-78e1"
              className="w-0"
            >
              <path d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9L24.1,30.9c-6.6,0-10.8-4.5-10.8-10.1c0-5.8,4.3-10.1,10.9-10.1 S34.9,15,35.1,20.8C35.1,26.4,30.8,30.9,24.1,30.9z M103.3,96.8H84.1v-31c0-7.8-2.7-13.1-9.8-13.1c-5.3,0-8.5,3.6-9.9,7.1 c-0.6,1.3-0.6,3-0.6,4.8V97H44.5c0,0,0.3-52.6,0-58h19.3v8.2c2.6-3.9,7.2-9.6,17.4-9.6c12.7,0,22.2,8.4,22.2,26.1V96.8z"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Member;
