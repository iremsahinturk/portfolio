import { Section } from "@/common/components/Section"

export const FinalDesign = () => {
  return (
    <Section title="Final Design" id="final-design" backgroundColor="theme-blue" titleColor="white">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          Before finalizing the interface, we conducted usability testing on high-fidelity prototypes to validate key workflows and interaction patterns. The goal was to
          <span className='font-semibold'> ensure clarity in information architecture, terminology, and task progression before development. </span>
          The biggest friction occurred between the Campaign and Approver steps, where the conversion rate dropped to 19%, meaning
        </p>
        <br />
        <p>
          The insights informed several structural and interaction-level refinements, ensuring the final design aligned with real user expectations and reduced implementation risk.
        </p>
      </div>
    </Section>
  )
}
