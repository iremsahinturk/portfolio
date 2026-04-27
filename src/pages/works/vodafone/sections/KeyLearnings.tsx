import { Section } from "@/common/components/Section"

export const KeyLearnings = () => {
  return (
    <Section id="key-learnings" title="Key Learnings" backgroundColor="theme-red" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p className='text-sm leading-7 tracking-wide'>
          <span className='font-bold'>Involving teams early builds stronger UX alignment</span>
          <br />
          I learned that involving product leads and developers in UX workshops early in the process is far more effective than simply presenting UX principles. Exploring data and user insights together helped the team better understand UX value, leading to greater openness, collaboration, and flexibility around technical constraints in future projects.          
          <br />
          <br />
          <span className='font-bold'>User expectations vs real experiences</span>
          <br />
          I learned that users’ expectations and actual experiences don’t always align. Instead of spending too much time analyzing stated expectations, focusing on experiences users have in similar contexts—both in other platforms and in real life—can lead to stronger design insights.          
          <br />
          <br />
          <span className='font-bold'>UX impact goes beyond interface design</span>
          <br />
          This project showed that improving a user experience is not always only about redesigning the flow. While UX designers may not directly define campaign content, working closely with users helped us influence how rewards and campaigns were presented. Shaping the content together with the product team significantly increased the overall impact of the solution.        
        </p>
      </div>
    </Section>
  )
}
