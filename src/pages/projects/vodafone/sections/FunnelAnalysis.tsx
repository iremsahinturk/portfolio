import { Section } from "@/common/components/Section"
import funnelAnalysis from '@/assets/vodafone/funnel-analysis.svg';

export const FunnelAnalysis = () => {
  return (
    <Section id="funnel-analysis" title="Funnel Analysis" backgroundColor="theme-red" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          Funnel analysis revealed significant drop-offs across the My Rewards journey. While the listing page received 4.2M visits, only 61K users completed the flow, resulting in
          <span className='font-semibold'> an overall conversion rate of ~1.5%. </span>
          The biggest friction occurred between the Campaign and Approver steps, where the conversion rate dropped to 19%, meaning
          <span className='font-semibold'> 81% of users abandoned the process at the campaign stage. </span>
          This indicated a major opportunity to improve campaign clarity and decision-making in the reward selection experience.
        </p>
      </div>

      <div className='mx-auto max-w-7xl px-4 lg:px-6 mt-16'>
        <img src={funnelAnalysis} alt="Funnel Analysis" className="w-full h-auto mt-12" loading="lazy" />
      </div>
    </Section>
  )
}
