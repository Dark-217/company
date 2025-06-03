import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  children: ReactNode;
  className: string;
  title?: string;
  target?: string;
  to: string;
}

const Link = ({ children, ...props }: LinkProps) => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <RouterLink {...props} onClick={scrollToTop}>
      {children}
    </RouterLink>
  );
};

export default Link;
