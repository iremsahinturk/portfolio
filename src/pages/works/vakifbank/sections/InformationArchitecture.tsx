import { Section } from "@/common/components/Section"
import informationArchitecture from '@/assets/vakifbank/information-architecture.svg';

export const InformationArchitecture = () => {
  return (
    <Section id="information-architecture" title="Information Architecture" backgroundColor="theme-blue" titleColor="white">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          The information architecture were created to clearly
          <span className='font-semibold'> define the structure of the platform and support effective product planning. </span>
        </p>
        <p>
          This structure helped the team understand how core sections, user flows, and key features are organized and connected within the platform. By visualizing the relationships between pages, content, and functionalities, we were able to
          <span className='font-semibold'> clarify scope, estimate deadlines more accurately </span>
          and ensure alignment between UX, product, and engineering teams throughout the process.
        </p>
      </div>

      <div className='mx-auto max-w-2xl px-4 lg:px-6 mt-16'>
        <img src={informationArchitecture} alt="Information Architecture" className="w-full h-auto mt-12" loading="lazy" />
      </div>
    </Section>
  )
}
