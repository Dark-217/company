import { Link } from "react-router-dom";

interface MeetTeamProps {
  person: {
    avatar: string;
    name: string;
    info: string;
    role: string;
    social: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
  };
}

const MeetTeam = ({ person }: MeetTeamProps) => {
  return (
    <div className="shadow-[5px_5px_20px_0_rgba(0,0,0,.2)] bg-white text-center text-[#111]">
      <div className="px-5 sm:px-4 md:px-5 xl:px-8 py-8">
        <img
          src={person.avatar}
          className={`w-48 h-48 md:max-lg:w-40 md:max-lg:h-40 object-cover m-auto rounded-full border-[#f7c0a5] border-4`}
          alt="avatar"
        />
        <h3 className="text-xl xl:text-2xl m-auto mt-12 font-[Ubuntu]">
          {person.name}
        </h3>
        <p className="italic mt-8">{person.info}</p>
        <p className="m-auto mt-3 font-bold">{person.role}</p>
        <div className="flex justify-between items-center min-w-fit h-8 min-h-4 w-36 m-auto mt-8">
          <Link
            className="h-full"
            title="facebook"
            target="_blank"
            to={person.social.facebook}
          >
            <span className="flex h-full text-[#eb6928]">
              <svg preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                <use xlinkHref="#svg-8c0f"></use>
              </svg>
              <svg
                className="w-0"
                viewBox="0 0 112 112"
                x="0"
                y="0"
                id="svg-8c0f"
              >
                <path
                  fill="currentColor"
                  d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2
c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"
                ></path>
              </svg>
            </span>
          </Link>
          <Link
            className="h-full"
            title="twitter"
            target="_blank"
            to={person.social.twitter}
          >
            <span className="flex h-full text-[#eb6928]">
              <svg preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                <use xlinkHref="#svg-5cb7"></use>
              </svg>
              <svg
                className="w-0"
                viewBox="0 0 112 112"
                x="0"
                y="0"
                id="svg-5cb7"
              >
                <path
                  fill="currentColor"
                  d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2
c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7
c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2
c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5
c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"
                ></path>
              </svg>
            </span>
          </Link>
          <Link
            className="h-full"
            title="instagram"
            target="_blank"
            to={person.social.instagram}
          >
            <span className="flex h-full text-[#eb6928]">
              <svg preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                <use xlinkHref="#svg-769c"></use>
              </svg>
              <svg
                className="w-0"
                viewBox="0 0 112 112"
                x="0"
                y="0"
                id="svg-769c"
              >
                <path
                  fill="currentColor"
                  d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z
M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"
                ></path>
                <path
                  fill="currentColor"
                  d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7
V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7
c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
