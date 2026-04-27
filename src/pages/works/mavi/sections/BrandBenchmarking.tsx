import { CarouselWithTitle } from "@/common/components/CarouselWithTitle"
import { Section } from "@/common/components/Section"
import benchmarkMiro from '@/assets/mavi/brand-benchmarking-miro.svg';
import benchmarkExcel from '@/assets/mavi/brand-benchmarking-excel.svg';
import benchmarkExample1 from '@/assets/mavi/benchmark-example-1.svg';
import benchmarkExample2 from '@/assets/mavi/benchmark-example-2.svg';
import benchmarkExample3 from '@/assets/mavi/benchmark-example-3.svg';
import benchmarkExample4 from '@/assets/mavi/benchmark-example-4.svg';
import benchmarkExample5 from '@/assets/mavi/benchmark-example-5.svg';
import benchmarkExample6 from '@/assets/mavi/benchmark-example-6.svg';
import benchmarkExample7 from '@/assets/mavi/benchmark-example-7.svg';
import benchmarkExample8 from '@/assets/mavi/benchmark-example-8.svg';


export const BrandBenchmarking = () => {
  return (
    <Section id="brand-benchmarking" title="Brand Benchmarking" backgroundColor="theme-yellow" titleColor="black">
      <div className="flex flex-col mx-auto max-w-3xl px-4 md:px-0 mt-16 gap-12">
        <p className='text-sm leading-7 tracking-wide'>
          In our benchmark study, we captured screenshots of around&nbsp;
          <span className='font-semibold'>162 different brands’</span>
          &nbsp;homepages, menus, product listing pages, collection detail pages, product detail pages, checkout flows, and account creation flows
          &nbsp;— both on mobile and desktop.
        </p>
        <div>
          <img src={benchmarkMiro} alt="Brand Benchmarking Miro" loading='lazy' className='w-full h-auto' />
          <p className="text-xs italic mt-2 font-light tracking-wide leading-7">We organized all of them in a Miro board.</p>
        </div>
        <div>
          <img src={benchmarkExcel} alt="Brand Benchmarking Excel" loading='lazy' className='w-full h-auto' />
          <p className="text-xs italic mt-2 font-light tracking-wide leading-7">
            Using Excel, we listed and analyzed key features across categories like homepage, product listing, filtering, and checkout.
          </p>
        </div>
      </div>

      <CarouselWithTitle 
        carouselItems={[
          benchmarkExample1, 
          benchmarkExample2, 
          benchmarkExample3, 
          benchmarkExample4, 
          benchmarkExample5, 
          benchmarkExample6, 
          benchmarkExample7, 
          benchmarkExample8
        ]} 
        title="Relevant Benchmark Examples Aligned with the Insights" />
    </Section>
  )
}
