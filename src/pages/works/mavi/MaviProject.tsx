
import { Introduction } from './sections/Introduction';
import { ProjectOverview } from './sections/ProjectOverview';
import { StoreStuffInterviews } from './sections/StoreStuffInterviews';
import { UserInterviews } from './sections/UserInterviews';
import { BrandBenchmarking } from './sections/BrandBenchmarking';
import { Trends } from './sections/Trends';
import { MentalModel } from './sections/MentalModel';
import { Wireframes } from './sections/Wireframes';
import { FinalDesign } from './sections/FinalDesign';
import { KeyLearnings } from './sections/KeyLearnings';

export default function MaviProject() {
  return (
    <div className="font-light scroll-smooth relative">
      <Introduction />
      <ProjectOverview />
      <StoreStuffInterviews />
      <UserInterviews />
      <BrandBenchmarking />
      <MentalModel />
      <Trends />
      <Wireframes />
      <FinalDesign />
      <KeyLearnings />
    </div>
  )
}
