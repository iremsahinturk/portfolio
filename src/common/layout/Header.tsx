import { DraftingCompassIcon } from "lucide-react";
import { Outlet, Link } from "react-router";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between h-[160px] px-16 py-12">
        <div>
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
      <Outlet />
    </div>
  );
}
