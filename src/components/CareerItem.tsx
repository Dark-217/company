import { Link } from "react-router-dom";

interface Job {
  title: string;
  region: string;
  url: string;
}

interface CareerItemProps {
  data: {
    industry: string;
    jobs: Job[];
  };
  active: boolean;
  onClick: () => void;
}

const CareerItem = ({ data, active, onClick }: CareerItemProps) => {
  return (
    <div className="bg-white">
      <div
        className="flex justify-between items-center text-[#555c66] font-bold py-5 px-8 cursor-pointer"
        onClick={onClick}
      >
        <span>{data.industry}</span>
        <span className="block w-5 h-5 text-[#999]">
          <svg preserveAspectRatio="xMidYMin slice" viewBox="0 0 42 42">
            <use xlinkHref="#svg-211b"></use>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlSpace="preserve"
            className="w-0"
            viewBox="0 0 42 42"
            x="0px"
            y="0px"
            id="svg-211b"
          >
            <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "></polygon>
          </svg>
        </span>
      </div>
      {active && (
        <div className="flex flex-col gap-7 p-8">
          {data.jobs.map((job, index) => (
            <div key={index} className="flex flex-wrap">
              <div className="min-w-full md:min-w-1/2 max-w-1/2">
                <p className="font-bold">
                  <Link to={job.url} target="_blank">
                    {job.title}
                  </Link>
                </p>
              </div>
              <div className="min-w-full md:min-w-1/2 max-w-1/2">
                <p className="text-right">{job.region}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CareerItem;
