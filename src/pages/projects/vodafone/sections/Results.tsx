import { Section } from "@/common/components/Section"
import susScore from '@/assets/vodafone/sus-score.svg';
import rewardUsagePerformance from '@/assets/vodafone/reward-usage-performance.svg';

export const Results = () => {
  return (
    <Section title="Results" id="results" backgroundColor="theme-red" titleColor="black">
      <div className='grid mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <h2 className='text-3xl font-medium mb-8'>
          SUS score
        </h2>
        <p>
          The SUS score increased from 70 to 90.62, indicating a major improvement in overall usability.
        </p>
      </div>
      <div className='mx-auto max-w-7xl px-4 lg:px-6 mt-16'>
        <img src={susScore} alt="SUS Score" className="w-full h-auto mt-12" loading="lazy" />
      </div>

      <div className='grid mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <h2 className='text-3xl font-medium mb-8'>
          Reward usage performance
        </h2>
        <p>
          Following the redesign, My Rewards container engagement grew significantly, increasing 149% MoM in the Post2Post flow and 60% MoM in the Pre2Post flow. Reward transaction adoption also improved, with accepted transaction share rising from 19% to 24% and from 39% to 52% across the two flows.
        </p>
      </div>
      <div className='mt-16'>
        <img src={rewardUsagePerformance} alt="Reward Usage Performance" className="w-full h-auto mt-12" loading="lazy" />
      </div>
    </Section>
  )
}
