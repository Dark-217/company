interface WorkBlockProps {
  title: String;
  data: String[];
}

const WorkBlock = ({ title, data }: WorkBlockProps) => {
  return (
    <div className="relative">
      <div className="px-8 sm:px-4 md:px-5 py-5 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-black before:opacity-60">
        <h4 className="relative font-medium text-[#eb6928] font-[Ubuntu] capitalize text-2xl">
          {title}
        </h4>
        <ul className="relative text-lg xl:text-xl xl:leading-10 mt-5">
          {data.map((item, index) => (
            <li key={index} className="relative ml-[1.1em]">
              <div className="inline-block absolute w-[1em] min-h-[1em] h-auto -left-[1.2em] fill-current text-center text-[#eb6928]">
                <svg
                  className="inline-block -m-[.8em] text-[.8em] w-[13m] h-[1em]"
                  viewBox="0 0 409.6 409.6"
                  x="0px"
                  y="0px"
                  id="svg-8185"
                >
                  <g>
                    <g>
                      <path d="M392.533,187.733H221.867V17.067C221.867,7.641,214.226,0,204.8,0s-17.067,7.641-17.067,17.067v170.667H17.067    C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h170.667v170.667c0,9.426,7.641,17.067,17.067,17.067    s17.067-7.641,17.067-17.067V221.867h170.667c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkBlock;
