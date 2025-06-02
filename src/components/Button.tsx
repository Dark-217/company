import { Link } from "react-scroll";

interface ButtonProps {
  children: string;
  className?: string;
  type?: "outline" | "fill" | "fillWhite" | "fillWhiteBlack";
  to?: string;
}

const buttonType = {
  outline:
    "bg-transparent hover:bg-[white] text-white hover:text-black border border-white",
  fill: "bg-[#eb6928] hover:bg-black text-white",
  fillWhite: "bg-white hover:bg-[#fdefe8] text-[#eb6928] hover:text-black",
  fillWhiteBlack: "bg-white hover:bg-black text-black hover:text-white",
};

const Button = ({
  children,
  className,
  type = "fill",
  to = "",
}: ButtonProps) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={1000}
      className={`flex justify-center uppercase tracking-[2px] text-sm font-bold px-9 sm:px-12 py-5 cursor-pointer ${buttonType[type]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
