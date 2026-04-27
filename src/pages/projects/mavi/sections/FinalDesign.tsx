import { CarouselWithTitle } from "@/common/components/CarouselWithTitle"
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
  "Jean guide (New)",
  "Online Maviolog (New)",
  "Style suggestions (New)",
]

export const FinalDesign = () => {
  return (
    <Section id="final-design" title="Final Design" backgroundColor="theme-yellow" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          The UI designs in this section reflect solutions developed in response to insights gathered from users and store staff. You can explore how these solutions are implemented across the most critical user flows — selected from the 11 flows detailed in the Wireframe section:
        </p>
        <div className='pl-7 '>
          <ul className='list-disc list-outside'>
            {wireframeList.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CarouselWithTitle carouselItems={[
        finalDesign1, finalDesign2, finalDesign3, finalDesign4, finalDesign5, finalDesign6, finalDesign7, finalDesign8, finalDesign9, finalDesign10, finalDesign11, finalDesign12, finalDesign13
      ]} />
    </Section>
  )
}
