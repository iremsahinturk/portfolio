import { Section } from "@/common/components/Section"
import finalDesign from '@/assets/vodafone/final-design.svg';

export const FinalDesign = () => {
  return (
    <Section id="final-design" title="Final Design" backgroundColor="theme-red" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          By evaluating insights and recommendations from usability tests and team workshops, I redesigned the My Rewards section by creating new content and enriching the overall experience.
        </p>
        {/* <ul className='list-disc list-inside space-y-2'>
          <li>
            <span>Homepage</span>
          </li>
          <li>
            <span>My Rewards</span>
            <ul className='list-disc space-y-2'>
              <li>
                <span>Onboarding</span>
              </li>
              <li>
                <span>Scratch And Win</span>
              </li>
              <li>
                <span>Tab The Box</span>
              </li>
              <li>
                <span>Spin The Wheel</span>
              </li>
            </ul>
          </li>
        </ul> */}
        <ul className="list-disc pl-5 [&_ul]:list-[revert] [&_ul]:pl-5 space-y-1">
          <li>Homepage</li>
          <li>My Rewards
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Onboarding</li>
              <li>Scratch And Win</li>
              <li>Tab The Box</li>
              <li>Spin The Wheel</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='mx-auto max-w-7xl px-4 lg:px-6 mt-16'>
        <img src={finalDesign} alt="Final Design" className="w-full h-auto mt-12" loading="lazy" />
      </div>
    </Section>
  )
}
