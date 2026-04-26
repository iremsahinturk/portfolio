import vodafoneHomePhoneApp2 from '@/assets/vodafone/vodafone-home-phone-app-2.svg';
import vodafoneLogo from '@/assets/vodafone/vodafone-logo-title.svg';

export const Introduction = () => {
  return (
    <section>
      <div className="bg-theme-red">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 py-10 grid lg:grid-cols-3 gap-15 items-center">
          <div className='grid place-items-center'>
            <img src={vodafoneHomePhoneApp2} alt="Vodafone Home Phone App" loading='lazy' />
          </div>
          <div className='flex flex-col gap-9 col-span-2'>
            <div>
              <img src={vodafoneLogo} alt="Vodafone Logo" loading='lazy' />
            </div>
            <div>
              <h2 className="text-xl font-normal">
                The mobile application is a digital platform where users can manage their Vodafone accounts, track data usage, pay bills, and access exclusive offers and services.
              </h2>
            </div>
            <div className='flex flex-col gap-4 text-sm'>
              <p>
                <span className='font-bold'>Project type: </span>
                <span>Redesign ‘My Rewards’ Flow</span>
              </p>
              <p>
                <span className='font-bold'>Role: </span>
                <span>
                  UX researcher + UX/UI designer (with support from Vodafone research team)
                </span>
              </p>
              <p>
                <span className='font-bold'>Industry: </span>
                <span>Telecommunications, E-commerce</span>
              </p>
              <p>
                <span className='font-bold'>Tools: </span>
                <span>Sketch, Miro, Lookback, Airtable</span>
              </p>
              <p>
                <span className='font-bold'>Duration: </span>
                <span>Q4 2021</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-theme-red mb-16 p-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex flex-col sm:flex-row gap-6'>
            <div className='flex flex-col flex-1 bg-white border-[#FFA781] border-[3px] overflow-hidden'>
              <div className='flex-1 flex items-center justify-center p-6 text-center text-sm'>
                <span>
                  My Rewards container engagement increased by
                </span>
              </div>
              <div className='bg-theme-red/40 border-t-[#FFA781] border-t-[3px] p-6 text-center font-medium text-2xl'>
                <span>
                  104% MoM
                </span>
              </div>
            </div>
            <div className='flex flex-col flex-1 bg-white border-[#FFA781] border-[3px] overflow-hidden'>
              <div className='flex-1 flex items-center justify-center p-6 text-center text-sm'>
                <span>
                  Reward transaction share increased from 29% to
                </span>
              </div>
              <div className='bg-theme-red/40 border-t-[#FFA781] border-t-[3px] p-6 text-center font-medium text-2xl'>
                <span>
                  38%
                </span>
              </div>
            </div>
            <div className='flex flex-col flex-1 bg-white border-[#FFA781] border-[3px] overflow-hidden'>
              <div className='flex-1 flex items-center justify-center p-6 text-center text-sm'>
                <span>
                  Usability improved, with SUS score increasing from 70 to
                </span>
              </div>
              <div className='bg-theme-red/40 border-t-[#FFA781] border-t-[3px] p-6 text-center font-medium text-2xl'>
                <span>
                  90.62
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-7xl px-4 lg:px-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-theme-red'>
                PROJECT OVERVIEW
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#about">About Vodafone & Project scope's</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-theme-red'>
                RESEARCH
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#funnel-analysis">Funnel Analysis</a>
                </li>
                <li>
                  <a href="#usability-test">Usability Test (10)</a>
                </li>
                <li>
                  <a href="#workshop-affinity-map">Workshop with Upgrade squad & Affinity map</a>
                </li>
                <li>
                  <a href="#ideas-for-new-content">Ideas for new content</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-theme-red'>
                DESIGN
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#final-designs">Final designs</a>
                </li>
                <li>
                  <a href="#results">Results</a>
                </li>
                <li>
                  <a href="#key-learnings">Key learnings</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
