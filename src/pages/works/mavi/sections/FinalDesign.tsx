import { RelevantCarousel } from "../components/RelevantCarousel"
import { Section } from "@/common/components/Section"
import finalDesign1 from '@/assets/mavi/final-design-1.svg';
import finalDesign2 from '@/assets/mavi/final-design-2.svg';
import finalDesign3 from '@/assets/mavi/final-design-3.svg';
import finalDesign4 from '@/assets/mavi/final-design-4.svg';
import finalDesign5 from '@/assets/mavi/final-design-5.svg';
import finalDesign6 from '@/assets/mavi/final-design-6.svg';
import finalDesign7 from '@/assets/mavi/final-design-7.svg';
import finalDesign8 from '@/assets/mavi/final-design-8.svg';
import finalDesign9 from '@/assets/mavi/final-design-9.svg';
import finalDesign10 from '@/assets/mavi/final-design-10.svg';
import finalDesign11 from '@/assets/mavi/final-design-11.svg';
import finalDesign12 from '@/assets/mavi/final-design-12.svg';
import finalDesign13 from '@/assets/mavi/final-design-13.svg';


const wireframeList = [
  "Homepage",
  "Product listing",
  "Product detail",
  "Jean guide",
  "Online Maviolog",
  "Style suggestions"
]

export const FinalDesign = () => {
  return (
    <Section id="final-design" title="Final Design">
      <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
        <p className='text-xl leading-9 tracking-wide'>
          The UI designs in this section reflect solutions developed in response to insights gathered from users and store staff. You can explore how these solutions are implemented across the&nbsp;
          <span className='font-semibold'>most critical user flows</span>
          &nbsp;— selected from the 11 flows detailed in the Wireframe section:
        </p>
        <br />
        <div className='pl-7 text-xl leading-9 tracking-wide'>
          <ul className='list-disc list-outside gap-4'>
            {wireframeList.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <RelevantCarousel carouselItems={[
        finalDesign1, finalDesign2, finalDesign3, finalDesign4, finalDesign5, finalDesign6, finalDesign7, finalDesign8, finalDesign9, finalDesign10, finalDesign11, finalDesign12, finalDesign13
      ]} />
    </Section>
  )
}
