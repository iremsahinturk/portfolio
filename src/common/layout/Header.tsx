import { DraftingCompassIcon } from "lucide-react";
import { Outlet, Link } from "react-router";
import { Progress } from "../shadcn/components/progress";
import { useEffect, useState, useMemo } from "react";
import { debounce } from "lodash-es";


export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    <div>
      <div className="sticky top-0 z-20 bg-white">
        <div className="flex justify-between h-24 px-16 py-12">
          <div className="flex items-center">
            <DraftingCompassIcon className="h-15 w-15" />
          </div>
          <nav className="flex items-center gap-7 text-lg">
            <Link className="underline underline-offset-8 decoration-2" to="/">
              Work
            </Link>
            <Link className="underline underline-offset-8 decoration-2" to="/about">
              About
            </Link>
            <Link className="underline underline-offset-8 decoration-2" to="/resume">
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
