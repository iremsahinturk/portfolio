import { Section } from "@/common/components/Section"
import storeInterviewPlan from '@/assets/mavi/store-interview-plan.svg';
import staffKeyInsights1 from '@/assets/mavi/staff-key-insights-1.svg';
import staffKeyInsights2 from '@/assets/mavi/staff-key-insights-2.svg';
import { GalleryCarousel } from "@/common/components/GalleryCarousel";

// const staffInterviewInsights = [
//   {
//     title: "JEAN SELECTION",
//     quote: "During the COVID period, customers were hesitant to visit stores, so they called to ask about the fabric, fit, and details of the jeans.",
//     bottom: "Since customers can’t replicate the in-store experience online, they call store staff for guidance and product advice.",
//   },
//   {
//     title: "BEHIND THE COLLECTIONS",
//     quote: 'Some customers ask what the “eco–friendly” theme actually means.',
//     bottom: "The “eco–friendly” theme features collections like All Blue and reflects a commitment to sustainable production and resource conservation.",
//   },
//   {
//     title: "JEAN SELECTION",
//     quote: "Customers are not familiar with the stories or features of collections other than All Blue, and they frequently ask us about them.",
//     bottom: "Each collection has its own story and features, but users often don’t know what they include—despite recognizing the names.",
//   },
//   {
//     title: "SIZE SELECTION",
//     quote: "For rigid, 100% cotton jeans with no elastane, I warn customers before they try them on, as the fabric doesn’t stretch, and I usually offer one size up.",
//     bottom: "Jean sizing varies depending on the fabric composition, as the size can change based on how stretchy the denim is.",
//   },
//   {
//     title: "ASSISTANCE",
//     quote: "When a customer is unsure about which jean to choose, we ask about their style, preferred leg cut, color, and fabric to recommend the most suitable fit.",
//     bottom: "Key decision criteria for users include their clothing style, preferred jean cut, color, and fabric.",
//   },
//   {
//     title: "MIX & MATCH",
//     quote: "Customers often ask for our advice when putting together outfits, and they usually want to try the combinations they see on the models.",
//     bottom: "Seeing visual outfit options plays an important role in users’ decision-making when styling an outfit.",
//   },
//   {
//     title: "STOCK AVAILABILITY",
//     quote: "When their size isn’t available online, some users call stores to check.",
//     bottom: "Users cannot see in-store stock availability on the product detail pages.",
//   },
// ];

export const StoreStaffInterviews = () => {
  return (
    <Section id="staff-in-depth-interviews" title="Staff in-depth interviews" backgroundColor="theme-yellow" titleColor="black">
        <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16'>
          <p className='text-sm leading-7 tracking-wide'>
            Before conducting user interviews, one-on-one sessions were held with&nbsp;
            <span className='font-semibold'>4 store staffs</span>
            &nbsp;to gain preliminary insights about customers. These interviews&nbsp;
            <span className='font-semibold'>focused on listening to real stories</span>
            &nbsp;and understanding user complaints, needs, and gaps in knowledge.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center content-center mx-auto max-w-3xl mt-10 gap-7'>
          <div className='col-span-2 grid content-center'>
            <div className='flex flex-col gap-3'>
              <h5 className='font-semibold '>
                Research objectives
              </h5>
              <div className='pl-5 text-sm tracking-tight leading-7'>
                <ul className='list-disc list-outside space-y-3'>
                  <li>
                    <span>What are the main reasons <span className='font-semibold'>customers seek help</span> from store staff?</span>
                  </li>
                  <li>
                    <span>In which areas do customers most frequently <span className='font-semibold'>request assistance?</span></span>
                  </li>
                  <li>
                    <span>Are customers able to easily understand the <span className='font-semibold'>differences between products?</span> (Especially various jean fits and styles)</span>
                  </li>
                  <li>
                    <span>What <span className='font-semibold'>challenges</span> do sales associates face when assisting customers?</span>
                  </li>
                  <li>
                    <span>How have customers’ shopping habits changed <span className='font-semibold'>during the pandemic?</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={storeInterviewPlan} alt="Interview Plan" loading='lazy' />
          </div>
        </div>

        <GalleryCarousel 
          carouselItems={[
            staffKeyInsights1,
            staffKeyInsights2,
          ]}
          title="Key insights"
        />

        {/* <KeyInsights
          insights={staffInterviewInsights}
          personImg={person1}
          bubbleText="As a store staff, even I couldn’t tell the difference between the Marcus and Jake fits, when I first started working."
        /> */}

        {/* <div className='flex flex-col mt-24'>
          <div className='flex justify-center'>
            <h2 className='text-3xl font-semibold'>
              Key Insights
            </h2>
          </div>
          <div className='mx-auto max-w-full grid 2xl:grid-cols-4 xl:grid-cols-2 md:grid-cols-2 px-4 mt-16 lg:px-6 gap-5'>
            <div>
            </div>
            <KeyInsightCard 
              title="JEAN SELECTION" 
              upperText="During the COVID period, customers were hesitant to visit stores, so they called to ask about the fabric, fit, and details of the jeans."
              lowerText="Since customers can’t replicate the in-store experience online, they call store staff for guidance and product advice."
              upperHeight={337}
              lowerHeight={264}
            />
            <KeyInsightCard 
              title="BEHIND THE COLLECTIONS"
              upperText="Some customers ask what the “eco-friendly” theme actually means."
              lowerText="The “eco-friendly” theme features collections like All Blue and reflects a commitment to sustainable production and resource conservation."
              upperHeight={337}
              lowerHeight={264}
            />
            <KeyInsightCard 
              title="JEAN SELECTION"
              upperText="Customers are not familiar with the stories or features of collections other than All Blue, and they frequently ask us about them."
              lowerText="Each collection has its own story and features, but users often don’t know what they include—despite recognizing the names."
              upperHeight={337}
              lowerHeight={264}
            />
            <KeyInsightCard 
              title="SIZE SELECTION" 
              upperText="For rigid, 100% cotton jeans with no elastane, I warn customers before they try them on, as the fabric doesn’t stretch, and I usually offer one size up."
              lowerText="Jean sizing varies depending on the fabric composition, as the size can change based on how stretchy the denim is."
              upperHeight={369}
              lowerHeight={200}
            />
            <KeyInsightCard 
              title="ASSISTANCE"
              upperText="When a customer is unsure about which jean to choose, we ask about their style, preferred leg cut, color, and fabric to recommend the most suitable fit."
              lowerText="Key decision criteria for users include their clothing style, preferred jean cut, color, and fabric."
              upperHeight={369}
              lowerHeight={200}
            />
            <KeyInsightCard 
              title="MIX & MATCH"
              upperText="Customers often ask for our advice when putting together outfits, and they usually want to try the combinations they see on the models."
              lowerText="Seeing visual outfit options plays an important role in users’ decision-making when styling an outfit."
              upperHeight={369}
              lowerHeight={200}
            />
            <KeyInsightCard 
              title="STOCK AVAILABILITY"
              upperText="When their size isn’t available online, some users call stores to check."
              lowerText="Users cannot see in-store stock availability on the product detail pages."
              upperHeight={369}
              lowerHeight={200}
            />
          </div>
        </div> */}
      </Section>
  )
}
