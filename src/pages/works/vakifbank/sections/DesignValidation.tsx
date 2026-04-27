import { Section } from "@/common/components/Section"
import designValidation1 from '@/assets/vakifbank/design-validation-1.svg';
import designValidation2 from '@/assets/vakifbank/design-validation-2.svg';
import designValidation3 from '@/assets/vakifbank/design-validation-3.svg';
import designValidation4 from '@/assets/vakifbank/design-validation-4.svg';
import { CarouselWithTitle } from "@/common/components/CarouselWithTitle";


export const DesignValidation = () => {
  return (
    <Section id="design-validation" title="Design Validation" backgroundColor="theme-blue" titleColor="white">
      <div className='grid mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          Before finalizing the interface, we conducted guerilla testing on high-fidelity prototypes to validate key workflows and interaction patterns. The goal was to
          <span className='font-semibold'> ensure clarity in information architecture, terminology, and task progression before development. </span>
          The biggest friction occurred between the Campaign and Approver steps, where the conversion rate dropped to 19%, meaning
        </p>
        <br />
        <p>
          The insights informed several structural and interaction-level refinements, ensuring the final design aligned with real user expectations and reduced implementation risk.
        </p>

        <h2 className='text-3xl font-medium mb-8 mt-20'>
          What changed?
        </h2>
        <p>
          Based on usability findings, we simplified core workflows, clarified terminology, and restructured key interaction points. These refinements improved task clarity, reduced cognitive load, and increased user confidence before development.
        </p>
        <br />
        <p>
          The following examples highlight some of the key changes we implemented based on user feedback and observed behavior during testing.
        </p>
      </div>
      <CarouselWithTitle
        carouselItems={[
          designValidation1,
          designValidation2,
          designValidation3,
          designValidation4,
        ]}
      />
    </Section>
  )
}
