import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import logo from "../assets/images/logo.png";

const languages = [
  { value: "en", text: "English" },
  { value: "es", text: "Español" },
  { value: "de", text: "Deutsch" },
  { value: "fr", text: "Français" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flag, setFlag] = useState("en");

  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.service"), href: "/service" },
    { name: t("nav.career"), href: "/career" },
    { name: t("nav.portfolio"), href: "/portfolio" },
    { name: t("nav.team"), href: "/team" },
    { name: t("nav.about"), href: "/about" },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setFlag(i18n.language);
  }, [i18n.language]);

  return (
    <header className="text-[#111] bg-white" id="header">
      <div className="flex justify-between items-center w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] m-auto min-h-20">
        <Link to="/" className="w-40">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex gap-5">
          <nav>
            <div className="block lg:hidden">
              <span
                className="text-2xl hover:text-[#f19465] cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg className="h-6" viewBox="0 0 24 24">
                  <use xlinkHref="#menu-hamburger"></use>
                </svg>
                <svg
                  className="absolute w-0"
                  version="1.1"
                  id="menu-hamburger"
                  viewBox="0 0 16 16"
                  x="0px"
                  y="0px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </g>
                </svg>
              </span>
            </div>
            <ul className="hidden lg:flex gap-5 font-bold">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`p-2.5 ${
                      location.pathname === item.href
                        ? "text-[#eb6928]"
                        : "text-[#1a1a1a] hover:text-[#f19465]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={`z-[1001] ${
                mobileMenuOpen ? "w-full" : "w-0"
              } flex fixed top-0 bottom-0 left-0`}
            >
              <div
                className={`${
                  mobileMenuOpen ? "ml-0 w-64" : "-ml-64 w-0"
                } transition-[margin-left] duration-500 bg-black text-white`}
              >
                <div
                  className="w-[22px] h-7 mt-5 mr-5 ml-auto text-right before:content-['\2715'] before:text-[28px] cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                ></div>
                <ul className="mt-5 text-xl text-center">
                  {navigation.map((item) => (
                    <li className="py-2" key={item.name}>
                      <Link to={item.href} className="hover:text-[#a1a1a1]">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`${
                  mobileMenuOpen ? "opacity-70" : "opacity-0"
                } flex-1 bg-black transition-[opacity] duration-500`}
                onClick={() => setMobileMenuOpen(false)}
              ></div>
            </div>
          </nav>
          <Menu as="div" className="relative leading-0">
            <MenuButton className="w-6 h-6 outline-none cursor-pointer">
              <img
                src={`https://media.flaticon.com/dist/min/img/flags/${flag==="en-US"?"en":flag}.svg`}
                alt="language flag"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-[0_0_10px_0_rgba(0,0,0,.7)] ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                {languages.map((item) => (
                  <MenuItem key={item.value}>
                    <span
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden cursor-pointer"
                      onClick={() => i18n.changeLanguage(item.value)}
                    >
                      {item.text}
                    </span>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
