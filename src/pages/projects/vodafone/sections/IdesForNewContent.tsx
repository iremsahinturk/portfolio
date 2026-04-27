import { Section } from "@/common/components/Section"
import ideasForNewContent from '@/assets/vodafone/ideas-for-new-content.svg';

export const IdeasForNewContent = () => {
  return (
    <Section id="ideas-for-new-content" title="Ideas for New Content" backgroundColor="theme-red" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          <span className='font-semibold'>Based on the research findings</span>
          , we concluded that as part of the My Rewards flow redesign, there is potential not only to address existing UX issues on the current screens but also to
          <span className='font-semibold'> enrich the content experience. </span>
        </p>
        <br />
        <p>
          As a summary of the workshop outcomes, I created a table combining users’ content expectations and usage habits. We
          <span className='font-semibold'> shared these insights with the business teams </span>
          so they could use them as input when shaping future campaign content.
        </p>
      </div>
      <div className='mx-auto max-w-7xl px-4 lg:px-6 mt-16'>
        <img src={ideasForNewContent} alt="Ideas for New Content" className="w-full h-auto mt-12" loading="lazy" />
      </div>
    </Section>
  )
}
