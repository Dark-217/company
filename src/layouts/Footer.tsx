import { useTranslation } from "react-i18next";
import Link from "../components/Link";
import logo from "../assets/images/logo.webp";
import email from "../assets/images/email.webp";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#333] text-white">
      <div className="flex w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] min-h-[399px] md:min-h-[199px] lg:min-h-[284px] m-auto">
        <div className="my-[60px] flex-1">
          <div className="flex flex-wrap">
            <div className="flex-[0_0_30%] min-w-full md:min-w-[30%] min-h-[100px] lg:min-h-[153px] xl:min-h-[186px] border-x-0 md:border-x-[15px] border-y-[15px] border-transparent">
              <Link to="/" className="block w-40">
                <img src={logo} alt="logo" />
              </Link>
              <p className="mt-3 text-[#b3b3b3]">{t("footer.description")}</p>
              <div className="flex justify-between items-center h-10 w-[200px] mt-2.5">
                <Link
                  className="h-full"
                  title="facebook"
                  target="_blank"
                  to="https://facebook.com/name"
                >
                  <span className="flex h-full">
                    <svg
                      className="fill-[#c0c0c0]"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 97.75 97.75"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-c7bf"
                      ></use>
                    </svg>
                    <svg
                      className="w-0"
                      viewBox="0 0 97.75 97.75"
                      x="0px"
                      y="0px"
                      id="svg-c7bf"
                    >
                      <g>
                        <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z    M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258   h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"></path>
                      </g>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="h-full"
                  title="twitter"
                  target="_blank"
                  to="https://twitter.com/name"
                >
                  <span className="flex h-full">
                    <svg
                      className="fill-[#c0c0c0]"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 1200 1200"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-ff34"
                      ></use>
                    </svg>
                    <svg
                      className="w-0"
                      viewBox="0 0 1200 1200"
                      x="0px"
                      y="0px"
                      id="svg-ff34"
                    >
                      <g>
                        <polygon points="334.1,309.2 769.1,890.8 867.6,890.8 432.6,309.2 	"></polygon>
                        <path
                          d="M600,18C278.6,18,18,278.6,18,600s260.6,582,582,582s582-260.6,582-582S921.4,18,600,18z M745.9,937.2l-198-264.8
		L302.7,937.2h-63l279.9-302.4l-278.2-372h214.4l182.4,243.8L864,262.8h63L666.4,544.3l293.8,392.9H745.9z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="h-full"
                  title="instagram"
                  target="_blank"
                  to="https://instagram.com/name"
                >
                  <span className="flex h-full">
                    <svg
                      className="fill-[#c0c0c0]"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512 512"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-843f"
                      ></use>
                    </svg>
                    <svg className="w-0" viewBox="0 0 512 512" id="svg-843f">
                      <path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0"></path>
                      <path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0"></path>
                      <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="h-full"
                  target="_blank"
                  title="Custom"
                  to="https://linkedin.com/name"
                >
                  <span className="flex h-full">
                    <svg
                      className="fill-[#c0c0c0]"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512 512"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-b879"
                      ></use>
                    </svg>
                    <svg className="w-0" viewBox="0 0 512 512" id="svg-b879">
                      <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-[0_0_28%] xl:flex-[0_0_30%] min-w-full md:min-w-[28%] xl:min-w-[30%] min-h-[100px] lg:min-h-[153px] xl:min-h-[186px] border-x-0 md:border-x-[15px] border-y-[15px] border-transparent">
              <div className="u-container-layout u-container-layout-2">
                <p className="text-3xl font-bold">{t("footer.getInTouch")}</p>
                <Link
                  to=""
                  className="flex items-center text-[#c0c0c0] mt-5 mr-auto"
                >
                  <span className="mr-1.5 lg:text-2xl lg:mr-2.5 fill-current">
                    <svg
                      className="w-4"
                      viewBox="0 0 405.333 405.333"
                      x="0px"
                      y="0px"
                    >
                      <path d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752    c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64    C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32    c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"></path>
                    </svg>
                  </span>
                  &nbsp;+1 (234)&nbsp;567-8910
                </Link>
                <div className="flex gap-2.5 mt-5">
                  <span className="w-[30px] h-[30px]">
                    <img src={email} alt="email" />
                  </span>
                  <p className="text-[#b3b3b3]">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="flex-[0_0_23%] xl:flex-[0_0_20%] min-w-full md:min-w-[23%] xl:min-w-[20%] min-h-[100px] lg:min-h-[153px] xl:min-h-[186px] border-x-0 md:border-x-[15px] border-y-[15px] border-transparent">
              <p className="text-3xl font-bold">{t("footer.quickLinks")}</p>
              <p className="text-xl mt-5">
                <Link className="text-[#999]" to="/" title={t("nav.home")}>
                  {t("nav.home")}
                </Link>
              </p>
              <p className="text-xl mt-3">
                <Link
                  className="text-[#999]"
                  to="/service"
                  title={t("nav.service")}
                >
                  {t("nav.service")}
                </Link>
              </p>
              <p className="text-xl mt-3">
                <Link
                  className="text-[#999]"
                  to="/about"
                  title={t("nav.about")}
                >
                  {t("nav.about")}
                </Link>
              </p>
            </div>
            <div className="flex-[0_0_18%] xl:flex-[0_0_20%] min-w-full md:min-w-[18%] xl:min-w-[20%] min-h-[100px] lg:min-h-[153px] xl:min-h-[186px] border-x-0 md:border-x-[15px] border-y-[15px] border-transparent">
              <p className="text-3xl font-bold">{t("footer.support")}</p>
              <p className="text-xl mt-5">
                <Link className="text-[#999]" to="/team" title={t("nav.team")}>
                  {t("nav.team")}
                </Link>
              </p>
              <p className="text-xl mt-3">
                <Link
                  className="text-[#999]"
                  to="/portfolio"
                  title={t("nav.portfolio")}
                >
                  {t("nav.portfolio")}
                </Link>
              </p>
              <p className="text-xl mt-3">
                <Link
                  className="text-[#999]"
                  to="/career"
                  title={t("nav.career")}
                >
                  {t("nav.career")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
