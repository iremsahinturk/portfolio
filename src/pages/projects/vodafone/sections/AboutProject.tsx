import { Section } from "@/common/components/Section"

export const AboutProject = () => {
  return (
    <Section id="about" title="About Vodafone & Project Scope" backgroundColor="theme-red" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          <span className='font-extrabold'>About Vodafone Turkey: </span>
          Vodafone Turkey is part of the globally recognized Vodafone Group, operating in over
          <span className='font-semibold'> 20 countries </span>
          and partnering with mobile networks in more than 40 others. As a leading telecommunications company, Vodafone serves millions across Turkey with mobile, fixed, and digital services. Through the Vodafone Yanımda app, users can
          <span className='font-semibold'> manage their accounts, pay bills, change plans, top up balances, shop, and enjoy exclusive discounts and campaigns. </span>
        </p>
        <p className='mt-6'>
          <span className='font-extrabold'>Project scope: </span>
          Through usability tests, insights were gathered on user habits, expectations, and pain points within the
          <span className='font-semibold'> My Rewards flow </span>
          and app-independent campaigns. A collaborative
          <span className='font-semibold'> workshop </span>
          with the Upgrade team, including the
          <span className='font-semibold'> product owner, tester, and developers</span>
          , transformed these findings into actionable design solutions. Based on the outcomes, the My Rewards flow was redesigned to enhance engagement, simplify the experience, and better meet user needs.
        </p>
      </div>
    </Section>
  )
}
