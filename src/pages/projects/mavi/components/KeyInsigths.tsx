import talkBubble from '@/assets/mavi/talk-bubble.svg';

// const KeyInsightCard = ({ title, upperText, lowerText, upperHeight, lowerHeight }: { title: string; upperText: string; lowerText: string; upperHeight: number; lowerHeight: number }) => {
//   const totalHeightStr = `${upperHeight + lowerHeight}px`;
//   const upperHeightStr = `${upperHeight}px`;
//   const lowerHeightStr = `${lowerHeight}px`;
//   return (
//     <div className={`flex flex-col border-key-insights-border border-3 border-solid rounded-lg w-[357px]`}>
//       {/* <div className="grid h-full"> */}
//       {/* <div className={`h-1/2`}> */}
//       <div className='flex flex-col flex-1 px-8'>
//         <div className='flex justify-center mt-9'>
//           <img src={keyInsightsChatIcon} alt="Key Insights Chat Icon" loading='lazy' />
//         </div>
//         <div className='flex flex-col gap-4 mt-6 text-xl'>
//           <h3 className='font-semibold'>{title}</h3>
//           <p className='mb-9'>
//             <span className='font-bold text-3xl leading-0'>‘</span>
//             {upperText}
//             <span className='font-bold text-3xl leading-0'>’</span>
//           </p>
//         </div>
//       </div>
//       {/* </div> */}
//       <div className={`border-t-3 border-key-insights-border bg-key-insights-background rounded-lg flex flex-col flex-1`}>
//         <div className='flex my-9 justify-center px-8 text-xl'>
//           <div>
//             <p>{lowerText}</p>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   )
// }

export const KeyInsights = ({ insights, personImg, bubbleText }: { insights: any[]; personImg: string; bubbleText: string }) => {

  return (
    <div className="max-w-7xl mx-auto mt-24 px-8">
      <h2 className="text-2xl tracking-wider font-semibold text-center">
        Key Insights
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        <div className='w-[282px] h-[413px]'>
          <KeyInsightBubble
            text={bubbleText}
            img={personImg}
          />
        </div>
        {insights.map((insight, i) => (
          <div
            key={i}
            className="border-key-insights-border border-3 border-solid rounded-lg w-[282px] h-[413px]"
          >
            {/* Top Section */}
            <div className="text-sm p-6 h-[225px]">
              {/* <div className='h-full'> */}
                <h3 className='font-semibold uppercase'>{insight.title}</h3>
                <p className="italic mt-4 leading-7">
                  <span className='font-bold text-2xl leading-0'>‘</span>
                  {insight.quote}
                  <span className='font-bold text-2xl leading-0'>’</span>
                </p>
              {/* </div> */}
            </div>

            <div className={`flex flex-col flex-1 text-sm leading-7 border-t-3 border-key-insights-border bg-key-insights-background rounded-lg p-6 h-[188px]`}>
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
          <span className='font-bold text-2xl leading-0'>‘</span>
          {text}
          <span className='font-bold text-2xl leading-0'>’</span>
        </div>
      </div>
    </div>
  );
}
