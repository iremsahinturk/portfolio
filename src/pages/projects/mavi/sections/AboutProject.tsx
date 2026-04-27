// import { ResearchCards } from "../components/ResearchCards"
import { Section } from "@/common/components/Section"
// import maviReserch1 from '@/assets/mavi/research_1.svg';
// import maviReserch2 from '@/assets/mavi/research_2.svg';
// import maviReserch3 from '@/assets/mavi/research_3.svg';
// import maviReserch4 from '@/assets/mavi/research_4.svg';

// const researchCards = [
//   {
//     img: maviReserch1,
//     imgAlt: 'Research Image 1',
//     count: 162,
//     description: 'app/website benchmarks conducted'
//   },
//   {
//     img: maviReserch2,
//     imgAlt: 'Research Image 2',
//     count: 4,
//     description: 'Mavi store staff interviewed'
//   },
//   {
//     img: maviReserch3,
//     imgAlt: 'Research Image 3',
//     count: 522,
//     description: 'minutes of user interviews recorded'
//   },
//   {
//     img: maviReserch4,
//     imgAlt: 'Research Image 4',
//     count: 428,
//     description: 'user insights gathered'
//   },
// ]

export const AboutProject = () => {

  return (
    <Section id="about" title="About Mavi & Project Scope" backgroundColor="theme-yellow" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          <span className='font-extrabold'>About Mavi: </span>
          Mavi is a globally recognized fashion brand that serves customers through retail, wholesale, and digital channels in 34 countries. With a team of 5,872 employees, the brand blends global reach with local insight. Embracing its
          <span className='font-semibold'> “Perfect Fit” philosophy, </span>
          Mavi designs
          <span className='font-semibold'> denim and lifestyle products </span>
          tailored to customers’ needs, supported by a loyalty program with over
          <span className='font-semibold'> 10,000,000 members </span>
          that drives data-informed, user-centered experiences.
        </p>
        <p className='mt-6'>
          <span className='font-extrabold'>Project scope: </span>
          Through in-depth interviews with users and store staff, user behaviors during the decision-making process were explored, along with key factors influencing purchasing intent. Insights from this research informed an analysis of the
          <span className='font-semibold'> overall shopping experience </span>
          and helped identify pain points. Based on these findings, UX and UI design solutions were developed to improve engagement, streamline the journey, and better align with user expectations.
        </p>
      </div>

      {/* <div className='flex flex-col mt-24'>
        <div className="grid justify-center">
          <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
            RESEARCH
          </h2>
        </div>
        <ResearchCards researchCards={researchCards} />
      </div> */}
    </Section>
  )
}
