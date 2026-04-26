import { AboutProject } from "./sections/AboutProject";
import { FinalDesign } from "./sections/FinalDesign";
import { FunnelAnalysis } from "./sections/FunnelAnalysis";
import { IdeasForNewContent } from "./sections/IdesForNewContent";
import { Introduction } from "./sections/Introduction";
import { KeyLearnings } from "./sections/KeyLearnings";
import { Results } from "./sections/Results";
import { UsabilityTests } from "./sections/UsabilityTests";
import { WorkshopAffinityMap } from "./sections/WorkshopAffinityMap";

export default function VodafoneProject() {
  return (
    <div className="font-light scroll-smooth relative">
      <Introduction />
      <AboutProject />
      <FunnelAnalysis />
      <UsabilityTests />
      <WorkshopAffinityMap />
      <IdeasForNewContent />
      <FinalDesign />
      <Results />
      <KeyLearnings />
    </div>
  )
}
