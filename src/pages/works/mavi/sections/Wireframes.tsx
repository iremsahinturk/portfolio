import { Section } from "@/common/components/Section"
import wireframeScreenshots from '@/assets/mavi/wireframe-screenshots.svg';

const wireframeList = [
  "Homepage",
  "Navigation menu",
  "Product listing",
  "Product detail",
  "Search",
  "Favorites",
  "Jean guide",
  "Online consultation",
  "Style suggestions",
  "User account",
  "Sign up & Log in"
]

export const Wireframes = () => {
  return (
    <Section id="wireframes" title="Wireframes" backgroundColor="theme-yellow" titleColor="black">
      <div className="flex flex-col mx-auto max-w-3xl px-4 md:px-0 mt-16">
        <p className='text-sm leading-7 tracking-wide'>
          We created &nbsp;
          <span className='font-semibold'>high-fidelity wireframes</span>
          &nbsp;to help clients better visualize the final user interface and to streamline the feedback process. 
          <br />
          The wireframes were developed across&nbsp;
          <span className='font-semibold'>11 key user flows,</span>
          &nbsp;including:
        </p>
        <div className='pl-7 text-sm leading-7 tracking-wide'>
          <ul className='list-disc list-outside'>
            {wireframeList.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full mt-16'>
        <img src={wireframeScreenshots} alt="Wireframe Screenshots" loading='lazy' className='w-full h-auto' />
      </div>
    </Section>
  )
}
