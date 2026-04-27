import { Section } from "@/common/components/Section"
import { CarouselWithTitle } from "@/common/components/CarouselWithTitle";
import wireframeDesktop from '@/assets/mavi/wireframe-desktop.svg';
import wireframeMobile from '@/assets/mavi/wireframe-mobile.svg';

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
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
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
      <CarouselWithTitle carouselItems={[wireframeDesktop, wireframeMobile]} />
    </Section>
  )
}
