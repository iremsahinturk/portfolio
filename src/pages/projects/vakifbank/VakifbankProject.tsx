import { AboutProject } from "./sections/AboutProject";
import { BrandBenchmarking } from "./sections/BrandBenchmarking";
import { DesignValidation } from "./sections/DesignValidation";
import { DeveloperCreatedDesignWalktroughs } from "./sections/DeveloperCreatedDesignWalktroughs";
import { FinalDesign } from "./sections/FinalDesign";
import { InformationArchitecture } from "./sections/InformationArchitecture";
import { Introduction } from "./sections/Introduction";
import { KeyLearnings } from "./sections/KeyLearnings";
import { Wireframes } from "./sections/Wireframes";

export default function VakifbankProject() {
  return (
    <div className="font-light scroll-smooth relative">
      <Introduction />
      <AboutProject />
      <DeveloperCreatedDesignWalktroughs />
      <BrandBenchmarking />
      <InformationArchitecture />
      <Wireframes />
      <DesignValidation />
      <FinalDesign />
      <KeyLearnings />
    </div>
  )
}
