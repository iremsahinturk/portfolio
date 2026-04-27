import { GalleryCarousel } from "@/common/components/GalleryCarousel"
import { Section } from "@/common/components/Section"
import aiPlatformConcept1 from '@/assets/vakifbank/ai-platform-concept-screens-1.svg';
import aiPlatformConcept2 from '@/assets/vakifbank/ai-platform-concept-screens-2.svg';
import aiPlatformConcept3 from '@/assets/vakifbank/ai-platform-concept-screens-3.svg';

export const DeveloperCreatedDesignWalktroughs = () => {
  return (
    <Section id="developer-created-design-walkthroughs" title="Developer-Created design walkthroughs" backgroundColor="theme-blue" titleColor="white">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          During the Discover phase, one-on-one sessions were held
          <span className='font-semibold'> with ML engineers and developers to understand the AI platform they had conceptualized. </span>
          Using their sketches and design artifacts, the sessions focused on clarifying core workflows and technical considerations.
          <ul className='list-disc list-inside space-y-2'>
            <li>
              Understand
              <span className='font-semibold'> key platform concepts and workflows, </span>
              including data preparation, labeling, and model training,
            </li>
            <li>
              Identify technical requirements, constraints, and assumptions,
            </li>
            <li>
              Translate these insights into
              <span className='font-semibold'> a clear set of core platform functionalities </span>
              aligned with user and technical needs
            </li>
          </ul>
        </p>
      </div>

      <GalleryCarousel 
        carouselItems={[
          aiPlatformConcept1, 
          aiPlatformConcept2, 
          aiPlatformConcept3
        ]} 
        title="AI platform concept screens" />
    </Section>
  )
}
