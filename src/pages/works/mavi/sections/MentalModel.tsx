import { Section } from "@/common/components/Section"
import mentalModelCards from '@/assets/mavi/mental-model-cards.svg';
import mentalModelCardDetails from '@/assets/mavi/mental-model-card-details.svg';

export const MentalModel = () => {
  return (
    <Section id="mental-model" title="Mental Model" backgroundColor="theme-yellow" titleColor="black">
      <div className="flex flex-col mx-auto max-w-3xl px-4 md:px-0 mt-16">
        <p className='max-w-3xl text-sm leading-7 tracking-wide'>
          We created a mental model by analyzing user behavior across three key stages:
          <br/>
          <span className='font-semibold'>Before purchase:</span> 
          &nbsp;What motivates them to buy, how they stay informed about Mavi and its discounts,
          <br/>
          <span className='font-semibold'>During purchase:</span> 
          &nbsp;People, events, or situations that influence them; how they describe the products; how they search for items they like; size selection; jean models and product features,
          <br/>
          <span className='font-semibold'>After purchase:</span> 
          &nbsp;How they style the product, and their experiences with return and exchange processes.
        </p>
      </div>
      <div className="flex flex-col mx-auto max-w-6xl px-4 md:px-0 mt-16 gap-12">
        <div>
          <img src={mentalModelCards} alt="Mental Model Cards" loading='lazy' className='w-full h-auto' />
          <p className="text-xs italic mt-2 font-light tracking-wide leading-7">
            Mental Model
          </p>
        </div>
        <div>
          <img src={mentalModelCardDetails} alt="Mental Model Card Details" loading='lazy' className='w-full h-auto' />
          <p className="text-xs italic mt-2 font-light tracking-wide leading-7">
            Details of the Mental Model Cards
          </p>
        </div>
      </div>
    </Section>
  )
}
