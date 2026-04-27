import { Section } from "@/common/components/Section"

export const KeyLearnings = () => {
  return (
    <Section title="Key Learnings" id="key-learnings" backgroundColor="theme-blue" titleColor="white">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p className='text-sm leading-7 tracking-wide'>
          <span className='font-bold'>Designing Around Existing User Habits</span>
          <br />
          Through usability testing, we discovered that users’ habits from other internal platforms significantly affected their ability to adapt to the new system. Instead of forcing new patterns, we shifted our approach and analyzed existing platforms to align with familiar behaviors. This helped us design a more intuitive and adoptable experience.
          <br />
          <br />
          <span className='font-bold'>Adapting the Process to Project Constraints</span>
          <br />
          Due to time constraints, design and development had to run in parallel in this project. Instead of validating the entire design at the end, we adopted an iterative approach by testing and refining each flow through quick guerrilla usability tests before handing it off to developers. This required continuously adapting the design process to the project’s needs and helped us move faster while maintaining design quality.
          <br />
          <br />
          <span className='font-bold'>Understanding Before Benchmarking</span>
          <br />
          Due to the complexity of the domain, we found that we couldn’t fully interpret benchmark examples without first understanding the underlying workflows. To address this, we invested time in learning through tutorials, showing that in niche domains, building domain knowledge is essential before drawing design insights.
        </p>
      </div>
    </Section>
  )
}
