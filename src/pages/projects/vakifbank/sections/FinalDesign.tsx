import { Section } from "@/common/components/Section"
import vakifVideo from '@/assets/vakifbank/vakif-video.mov';
import finalDesignDetail1 from '@/assets/vakifbank/final-design-detail-1.svg';
import finalDesignDetail2 from '@/assets/vakifbank/final-design-detail-2.svg';
import finalDesignDetail3 from '@/assets/vakifbank/final-design-detail-3.svg';
import finalDesignDetail4 from '@/assets/vakifbank/final-design-detail-4.svg';
import finalDesignDetail5 from '@/assets/vakifbank/final-design-detail-5.svg';
import finalDesignDetail6 from '@/assets/vakifbank/final-design-detail-6.svg';
import finalDesignDetail7 from '@/assets/vakifbank/final-design-detail-7.svg';
import finalDesignDetail8 from '@/assets/vakifbank/final-design-detail-8.svg';

import { CarouselWithTitle } from "@/common/components/CarouselWithTitle";

export const FinalDesign = () => {
  return (
    <Section title="Final Design" id="final-design" backgroundColor="theme-blue" titleColor="white">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          The final design reflects insights gathered through research and validation, resulting in a more intuitive and efficient user experience. Below are key screens and the interactive prototype demonstrating the refined workflows.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-24 px-8">
        <h2 className="text-2xl tracking-wider font-semibold text-center">
          Design Prototype
        </h2>
        <div className='grid place-items-center mt-12'>
          <video
            src={vakifVideo}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <CarouselWithTitle 
        carouselItems={[
          finalDesignDetail1,
          finalDesignDetail2,
          finalDesignDetail3,
          finalDesignDetail4,
          finalDesignDetail5,
          finalDesignDetail6,
          finalDesignDetail7,
          finalDesignDetail8
        ]} 
        title="Design Details" 
      />
    </Section>
  )
}
