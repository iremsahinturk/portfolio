
import { Introduction } from './sections/Introduction';
import { AboutProject } from './sections/AboutProject';
import { StoreStaffInterviews } from './sections/StaffInterviews';
import { UserInterviews } from './sections/UserInterviews';
import { BrandBenchmarking } from './sections/BrandBenchmarking';
import { TrendsStudy } from './sections/TrendsStudy';
import { MentalModel } from './sections/MentalModel';
import { Wireframes } from './sections/Wireframes';
import { FinalDesign } from './sections/FinalDesign';
import { KeyLearnings } from './sections/KeyLearnings';

export default function MaviProject() {
  return (
    <div className="font-light scroll-smooth relative">
      <Introduction />
      <AboutProject />
      <StoreStaffInterviews />
      <UserInterviews />
      <BrandBenchmarking />
      <MentalModel />
      <TrendsStudy />
      <Wireframes />
      <FinalDesign />
      <KeyLearnings />
    </div>
  )
}
