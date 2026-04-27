import { CarouselWithTitle } from "@/common/components/CarouselWithTitle";
import { Section } from "@/common/components/Section"
import { TrendAnalysisCategories } from "../components/TrendAnalysisCategories"
import trendCategories from '@/assets/mavi/trend-categories.svg';
import trendExample1 from '@/assets/mavi/trend-example-1.svg';
import trendExample2 from '@/assets/mavi/trend-example-2.svg';
import trendExample3 from '@/assets/mavi/trend-example-3.svg';
import trendAnalysisCategories1 from '@/assets/mavi/trend-analysis-categories-1.svg';
import trendAnalysisCategories2 from '@/assets/mavi/trend-analysis-categories-2.svg';
import trendAnalysisCategories3 from '@/assets/mavi/trend-analysis-categories-3.svg';

const trendAnalysisCategories = [
  {
    title: "SUSTAINABILITY",
    texts: [
      "Product pages highlight labels such as “Eco-Friendly” and “Organic Fabric,” emphasizing each item’s",
      <span className='font-semibold'>positive impact on the environment.</span>,
      "Users are encouraged to shop less but more consciously, while features like",
      <span className='font-semibold'>eco-friendly filters, product care tips</span>,
      "to extend longevity, and",
      <span className='font-semibold'>in-store repair stations</span>,
      "are integrated into the overall experience."
    ]
  },
  {
    title: "THE INFLUENCE OF COVID-19",
    texts: [
      "User behaviors shifted rapidly toward contactless, convenient, and safe shopping experiences. Clear delivery options,",
      <span className='font-semibold'>real-time stock information</span>,
      ", transparent return policies, and visible in-store health measures became central to UX design. Additionally, features like",
      <span className='font-semibold'>online styling assistance, smart fit quizzes</span>,
      ", and personalized product suggestions were widely adopted to help users make confident choices from home."
    ]
  },
  {
    title: "HOLISTIC DIGITAL-PHYSICAL EXPERIENCES",
    texts: [
      "Users expect seamless integration between digital and physical touchpoints. Experiences like",
      <span className='font-semibold'>discovering a product online and trying it in-store</span>,
      ", or",
      <span className='font-semibold'>receiving online styling tips</span>,
      "that guide in-store shopping, are becoming standard. As a result, UX design focuses on creating cohesive solutions that bridge the digital and physical worlds."
    ]
  },
  {
    title: "PERSONALIZATION & AI",
    texts: [
      "Users value experiences tailored to their needs and preferences.",
      <span className='font-semibold'>Recommendations based on purchase history, size preferences</span>,
      ", or browsing behavior not only improve conversion rates but also build trust and satisfaction. In UX design, personalization comes to life through",
      <span className='font-semibold'>dynamic content, smart filters</span>,
      ", and user-specific messaging."
    ]
  },
  {
    title: "WELLBEING",
    texts: [
      "UX design now embraces users’ mental and physical well-being. While digital experiences favor",
      <span className='font-semibold'>calm interfaces and fewer notifications</span>,
      ", some physical stores now host",
      <span className='font-semibold'>yoga sessions or include</span>,
      <span className='font-semibold'>healthy cafés</span>,
      ", offering not just products but a holistic lifestyle experience."
    ]
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    texts: [
      "Creative solutions that allow users to experience physical elements in online environments — such as",
      <span className='font-semibold'>virtual try-ons, 360° product views, fabric simulation, and live video consultations</span>,
      " — helping users feel more confident and connected while shopping remotely."
    ]
  },
  {
    title: "NOSTALGIA",
    texts: [
      "Users connect emotionally with experiences that evoke the past. In UX/UI, ",
      <span className='font-semibold'>retro visuals, vintage animations,</span>,
      " and revived versions of ",
      <span className='font-semibold'>past brand visuals</span>,
      " help build warmth, trust, and engagement."
    ]
  },
  {
    title: "SHARING ECONOMY",
    texts: [
      "Users now prefer ",
      <span className='font-semibold'>rental, secondhand,</span>,
      " and clothing swaps over ownership. UX design responds with secure profiles, item condition info, and simple user flows to support trust and ease of use."
    ]
  },
  {
    title: "INFLUENCER AND AVATAR IMPACT",
    texts: [
      "Product discovery and decisions are driven by ",
      <span className='font-semibold'>influencers and virtual try-ons.</span>,
      " Familiar faces and AR tools boost trust and create more immersive, personalized shopping experiences."
    ]
  },
]

export const TrendsStudy = () => {
  return (
    <Section id="trends-study" title="Trends Study" backgroundColor="theme-yellow" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p className='text-sm leading-7 tracking-wide'>
          The trends study explored&nbsp;
          <span className='font-semibold'>how customer expectations are evolving in today’s context</span>
          &nbsp;— including the impact of the&nbsp;
          <span className='font-semibold'>COVID-19</span>
          &nbsp;pandemic and growing interest in more conscious, connected, and personalized experiences. Our goal was to identify patterns and insights that reflect these shifting user needs and can inspire future design directions.
        </p>
      </div>
      <div className="flex flex-col mx-auto max-w-6xl px-4 md:px-0 mt-16 gap-12">
        <div>
          <img src={trendCategories} alt="Trend Categories" loading='lazy' className='w-full h-auto' />
          <p className="text-xs italic mt-2 font-light tracking-wide leading-7">
            We grouped the trend examples we found into 9 categories.
          </p>
        </div>
      </div>
      <CarouselWithTitle 
          carouselItems={[
            trendAnalysisCategories1,
            trendAnalysisCategories2,
            trendAnalysisCategories3
          ]}
          title="Trend analysis categories"
        />
      {/* <TrendAnalysisCategories categories={trendAnalysisCategories} /> */}
      <CarouselWithTitle carouselItems={[trendExample1, trendExample2, trendExample3]} title="Relevant Trend Examples Aligned with the Insights" />
    </Section>
  )
}
