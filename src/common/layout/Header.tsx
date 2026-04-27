import { Outlet, Link, useLocation } from "react-router";
import { Progress } from "../shadcn/components/progress";
import { useEffect, useState, useMemo } from "react";
import { debounce } from "lodash-es";
import headerIcon from '@/assets/header-icon.svg';


export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollProgress(scrollPercent);
      }, 30),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel pending debounced calls
    };
  }, [handleScroll]);

  const isActiveLink = (path: string) => {
    if (path === '/work') {
      return location.pathname.startsWith('/work');
    }
    return location.pathname === path;
  };

  return (
    <div>
      <div className="sticky top-0 z-20 bg-white">
        <div className="flex justify-between h-20 px-12 py-6 items-center">
          <div className="flex items-center gap-1.5">
            <img src={headerIcon} alt="Header Icon" className="h-3 w-3" />
            <span className="text-lg tracking-wide">IREM SAHINTURK</span>
          </div>
          <nav className="flex items-center gap-7 text-lg">
            <Link 
              className={isActiveLink('/work') ? 'underline underline-offset-8 decoration-2' : ''} 
              to="/work"
            >
              Work
            </Link>
            <Link 
              className={isActiveLink('/about') ? 'underline underline-offset-8 decoration-2' : ''} 
              to="/about"
            >
              About
            </Link>
            <Link 
              className={isActiveLink('/resume') ? 'underline underline-offset-8 decoration-2' : ''} 
              to="/resume"
            >
              Resume
            </Link>
          </nav>
        </div>
        <div className="h-1 w-full">
          <Progress value={scrollProgress} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
