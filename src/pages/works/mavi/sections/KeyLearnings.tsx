import { Section } from "@/common/components/Section"

export const KeyLearnings = () => {
  return (
    <Section id="key-learnings" title="Key Learnings" backgroundColor="theme-yellow" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p className='text-sm leading-7 tracking-wide'>
          <span className='font-bold'>Understanding the Product First</span>
          <br />
          Before designing, I reviewed 125 different jean models and analyzed user reviews to understand how customers perceive and describe them. Exploring how to clearly communicate the differences between fits, cuts, and styles took more time than the design itself, but it showed me how essential product context and user language are for creating meaningful design solutions.
          <br />
          <br />
          <span className='font-bold'>Exploring Trend Analysis for the First Time</span>
          <br />
          At the client’s request, we conducted a trend analysis for the first time in this project. This process helped us understand how user expectations are evolving and identify broader patterns influencing shopping behavior. It provided valuable insights early in the design phase and inspired new opportunities for improving the product experience.
          <br />
          <br />
          <span className='font-bold'>Adapting Design Communication for Stakeholders</span>
          <br />
          This project highlighted the importance of tailoring design communication to different stakeholders. Instead of presenting plain grey wireframes to clients, we enriched them with sample images and selected UI elements to make the concept clearer and streamline the feedback process.
        </p>
      </div>
    </Section>
  )
}
