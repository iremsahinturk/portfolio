import { Section } from "@/common/components/Section"
import aboutDoubleDiamond from '@/assets/vakifbank/about-double-diamond.svg';

export const AboutProject = () => {
  return (
    <Section id="about-project" title="About Vakıfbank & Design process" backgroundColor="theme-blue" titleColor="white">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          <span className='font-extrabold'>About Vakıfbank: </span>
          VakıfBank is one of Turkey’s largest banks, providing digital banking services to nearly
          <span className='font-semibold'> 14 million customers </span>
          nationwide. Through its mobile app and digital platforms, the bank delivers secure and accessible experiences that enable users to
          <span className='font-semibold'> manage their finances </span>
          and access
          <span className='font-semibold'> personalized banking services</span>
          , while supporting data-driven and user-centered decision-making.
        </p>
        <br />
        <p className='mt-6'>
          <span className='font-extrabold'>Design Process: </span>
          The design process followed a Double Diamond approach, combining domain exploration and iterative validation to shape and refine the solution.
        </p>
      </div>
      <div className='mx-auto max-w-5xl px-4 lg:px-6 mt-16'>
        <img src={aboutDoubleDiamond} alt="Double Diamond Design Process" className='w-full h-auto mt-12' />
      </div>
    </Section>
  )
}
