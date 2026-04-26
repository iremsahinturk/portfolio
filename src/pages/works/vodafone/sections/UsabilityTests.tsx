import { Section } from "@/common/components/Section"
import usabilityTestInterviewPlan from '@/assets/vodafone/usability-test-interview-plan.svg';
import talkBubble from '@/assets/mavi/talk-bubble.svg';
import person1 from '@/assets/mavi/person-1.svg';


const insights = [
  {
    title: "FLEXIBILITY IN OFFERS",
    quote: "Sometimes, there’s a campaign I’m not interested in, and I want to replace it with a surprise one instead.",
    bottom: "Even though there are many different campaigns available, users aren’t given the option to change their offers.",
  },
  {
    title: "CONTENT EXPECTATIONS",
    quote: 'Since I’ve been a Vodafone customer for 12 years, I expect a special offer or gift on my birthday.',
    bottom: "Even though users’ birthdays are known, no content or campaigns are created around them.",
  },
  {
    title: "UNAWARE OF UPDATES",
    quote: "I occasionally check to see if there’s anything new, but it doesn’t really cross my mind that often.",
    bottom: "Users don’t check the Rewards section frequently because they aren’t aware when new rewards are added.",
  },
  {
    title: "OFFLINE PROCESS ",
    quote: "While trying to benefit from the discounted modem campaign, the app directs me to a store to complete the process.",
    bottom: "In the modem and home internet flows, users are sent to a store to finish the process, even though it’s been handled online for the past three years.",
  },
  {
    title: "INITIAL THOUGHTS",
    quote: "Seeing the gift icon and the name My Rewards makes me expect personalized offers based on my shopping activity and mobile usage.",
    bottom: "Despite partnerships with popular brands and knowing most users’ shopping habits, My Rewards still offers only data and storage rewards.",
  },
  {
    title: "INCONSISTENT VISUALS",
    quote: "New campaigns are added, but the visuals look the same, so it’s hard to tell which ones are new. The same visuals are used for both internet and phone campaigns.",
    bottom: "Even though the content of the cards changes, similar visuals are used, and the visuals don’t match the content.",
  },
  {
    title: "FEELING SPECIAL",
    quote: "It says it’s personalized for me, but I feel like the same message is shown to everyone. I’ve been a customer for years.",
    bottom: "Because they have been Vodafone customers for many years and for similar reasons, users want to feel special and experience a more personalized journey.",
  },
];

export const UsabilityTests = () => {
  return (
    <Section id="usability-test" title="Usability Test" backgroundColor="theme-red" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          The main goal of the usability tests was to evaluate how users review and join the My Rewards flow within the Vodafone Yanımda mobile app. The study aimed to understand users’ experiences throughout the process, identify areas for improvement, gather feedback from different user personas, and use these insights to make the developing interface more user-friendly.
          <br />
          The usability tests were conducted with
          <span className='font-semibold'> 10 participants: </span>
          3 aged 18–24, 3 aged 25–34, 2 aged 35–44, and 2 aged 45–54. Five participants had previously used My Rewards, while the other five explored the flow for the first time.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center content-center mx-auto max-w-3xl mt-16 gap-7'>
          <div className='col-span-2 grid content-center'>
            <div className='flex flex-col gap-3'>
              <h5 className='font-semibold '>
                Research objectives
              </h5>
              <div className='pl-5 text-sm tracking-tight leading-7'>
                <ul className='list-disc list-outside space-y-3'>
                  <li>
                    <span>What does <span className='font-semibold'>My Rewards mean</span> to users, and what do they expect to find in this section?</span>
                  </li>
                  <li>
                    <span>What are users’ <span className='font-semibold'>main goals and motivations</span> when using My Rewards?</span>
                  </li>
                  <li>
                    <span>How do users’ <span className='font-semibold'>experiences with similar reward features</span> in other apps influence their expectations?</span>
                  </li>
                  <li>
                    <span>What <span className='font-semibold'>challenges or pain points</span> do users face when trying to redeem or understand a campaign?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={usabilityTestInterviewPlan} alt="Usability Test Interview Plan" loading='lazy' />
          </div>
        </div>
        <KeyInsights
          insights={insights}
          personImg={person1}
          bubbleText="I used this add-on campaign, but I couldn’t figure out when I can start using it."
          bgColor="theme-green"
          borderColor="theme-green-border"
        />
    </Section>
  )
}



export const KeyInsights = ({ insights, personImg, bubbleText, bgColor, borderColor }: { insights: any[]; personImg: string; bubbleText: string; bgColor: string; borderColor: string }) => {

  return (
    <div className="max-w-7xl mx-auto mt-24 px-8">
      <h2 className="text-2xl tracking-wider font-semibold text-center">
        Key Insights
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        <div className='w-[282px]'>
          <KeyInsightBubble
            text={bubbleText}
            img={personImg}
          />
        </div>
        {insights.map((insight, i) => (
          <div
            key={i}
            className={`flex flex-col border-3 border-solid rounded-lg w-[282px] border-${borderColor}`}
          >
            {/* Top Section */}
            <div className="flex flex-col flex-1 items-center text-sm p-6">
              {/* <div className='h-full'> */}
                <h3 className='font-semibold uppercase'>{insight.title}</h3>
                <p className="italic mt-4 leading-7">
                  <span className='font-bold text-2xl leading-0'></span>
                  {insight.quote}
                  <span className='font-bold text-2xl leading-0'>’</span>
                </p>
              {/* </div> */}
            </div>

            <div className={`text-sm leading-7 border-t-3 border-${borderColor} bg-${bgColor} rounded-lg p-6`}>
              {/* <div className='items-center h-full'> */}
                <p>{insight.bottom}</p>
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const KeyInsightBubble = ({ text, img }: { text: string; img: string }) => {
  return (
    <div className='flex flex-col'>
      <TalkBubbleIcon text={text} />
      <img src={img} alt="Person 1" loading='lazy' className='relative right-4 h-auto w-[160px]' />
    </div>
  )
}

function TalkBubbleIcon({ text }: { text?: string }) {
  return (
    <div className="relative w-[282px] h-[222px]">
      {/* SVG bubble */}
      <img src={talkBubble} alt="Talk Bubble" loading='lazy' className="" />
      {/* Text inside bubble */}
      <div className="absolute inset-8 bottom-12 flex items-center justify-center text-sm italic leading-7">
        <div>
          <span className='font-bold text-2xl leading-0'></span>
          {text}
          <span className='font-bold text-2xl leading-0'>’</span>
        </div>
      </div>
    </div>
  );
}
