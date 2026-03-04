import { AboutMe } from "./sections/AboutMe.tsx";
import { Connect } from "./sections/Connect.tsx";
import { WhereToFind } from "./sections/WhereToFind.tsx";

export default function About() {
  return (
    <div>
      <AboutMe />
      <WhereToFind />
      <Connect />
    </div>
  );
}
