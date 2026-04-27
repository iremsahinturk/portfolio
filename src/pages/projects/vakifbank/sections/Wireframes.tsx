import { Section } from "@/common/components/Section"
import wireframesNavigation from '@/assets/vakifbank/wireframes-navigation.svg';
import datasetDetail1 from '@/assets/vakifbank/dataset-detail-1.svg';
import datasetDetail2 from '@/assets/vakifbank/dataset-detail-2.svg';
import datasetDetail3 from '@/assets/vakifbank/dataset-detail-3.svg';
import datasetDetailScreenshot from '@/assets/vakifbank/dataset-detail-screenshot.svg';
import labelingPageBenchmarks from '@/assets/vakifbank/labeling-page-benchmarks.svg';
import labelingScreenshot from '@/assets/vakifbank/labeling-screenshot.svg';
import { GalleryCarousel } from "@/common/components/GalleryCarousel";

export const Wireframes = () => {
  return (
    <Section id="wireframes" title="Wireframes" backgroundColor="theme-blue" titleColor="white">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <h2 className='text-3xl font-medium mb-8'>
          Navigation structure
        </h2>
        <p>
          To avoid spending unnecessary time on early concepts, we started with
          <span className='font-semibold'> blueprint sketches to quickly clarify the navigation system and core ideas </span>
          without going into detailed layouts.
        </p>
      </div>

      <div className='mx-auto max-w-7xl px-4 lg:px-6 mt-16'>
        <img src={wireframesNavigation} alt="Wireframes Navigation" className="w-full h-auto mt-12" loading="lazy" />
      </div>

      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <h2 className='text-3xl font-medium mb-8'>
          Dataset detail page
        </h2>
        <p>
          Once the overall structure was aligned, we focused on the
          <span className='font-semibold'> dataset and labeling flows</span>
           exploring their details through digital wireframes. 
        </p>
        <br />
        <p>
          When accessing the Dataset section, users are first presented with a dataset listing page. Selecting a dataset from the list opens the dataset detail page. Since the dataset
          <span className='font-semibold'> detail page contains a large amount of information and supports multiple management actions,</span>
           it represents a complex and high-density interface. To ensure usability and clarity, we explored and evaluated multiple design alternatives for this screen. V1 and V2 were combined to create the final design.
        </p>
      </div>

      <GalleryCarousel 
        carouselItems={[
          datasetDetail1,
          datasetDetail2,
          datasetDetail3,
        ]} 
      />
      <div className='mt-16'>
        <img src={datasetDetailScreenshot} alt="Dataset Detail Screenshot" className="w-full h-auto mt-12" loading="lazy" />
      </div>

      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <h2 className='text-3xl font-medium mb-8'>
          Labeling Page
        </h2>
        <p>
          Once the overall structure was aligned, we focused on the
          <span className='font-semibold'> dataset and labeling flows</span>
           exploring their details through digital wireframes. 
        </p>
        <br />
        <p>
          Exploring layouts; The question is: HMW find a universal new layout that looks familiar to current customers and logical to the new ones?
        </p>
      </div>
      <div className='mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
        <img src={labelingPageBenchmarks} alt="Labeling Page Benchmarks" className="w-full h-auto mt-12" loading="lazy" />
      </div>
      <div className='mt-16'>
        <img src={labelingScreenshot} alt="Labeling Screenshot" className="w-full h-auto mt-12" loading="lazy" />
      </div>
    </Section>
  )
}
