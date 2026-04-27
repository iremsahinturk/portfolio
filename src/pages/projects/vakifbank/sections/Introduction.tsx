import vakifVideo from '@/assets/vakifbank/vakif-video.mov';
import vakifHomepage from '@/assets/vakifbank/vakif-homepage.svg';
import vakifLogo from '@/assets/vakifbank/vakif-logo.svg';
import introCardIcon1 from '@/assets/vakifbank/intro-card-icon-1.svg';
import introCardIcon2 from '@/assets/vakifbank/intro-card-icon-2.svg';
import introCardIcon3 from '@/assets/vakifbank/intro-card-icon-3.svg';

export const Introduction = () => {
  return (
    <section>
      <div className="bg-theme-blue">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-2 gap-15 items-center">
          <div className='grid place-items-center'>
            <video
              src={vakifVideo}
              poster={vakifHomepage}
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
          <div className='flex flex-col gap-9 text-white'>
            <div>
              <img src={vakifLogo} alt="Vakifbank Logo" loading='lazy' />
            </div>
            <div>
              <h2 className="text-xl font-normal">
                The platform is an internal AI development platform where teams can collect and manage data, create datasets, run labeling projects, train AI models, and track experiments to develop and improve AI solutions end to end.
              </h2>
            </div>
            <div className='flex flex-col gap-4 text-sm'>
              <p>
                <span className='font-bold'>Project type: </span>
                <span>End-to-End Platform Design</span>
              </p>
              <p>
                <span className='font-bold'>Role: </span>
                <span>
                  UX researcher + UX designer
                </span>
              </p>
              <p>
                <span className='font-bold'>Industry: </span>
                <span>Financial Services (Internal Platform)</span>
              </p>
              <p>
                <span className='font-bold'>Tools: </span>
                <span>Paper & Pencil, Figma, Airtable</span>
              </p>
              <p>
                <span className='font-bold'>Duration: </span>
                <span>Q4 2024</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-theme-blue mb-16 p-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <div className='flex flex-col bg-white border-[#5D7DAF] border-[3px] overflow-hidden w-[282px]'>
              <div className='flex-1 flex items-center justify-center p-6'>
                <img src={introCardIcon1} alt="Intro Card Icon 1" loading='lazy' className='h-auto w-auto' />
              </div>
              <div className='flex items-center bg-theme-blue-2 border-t-[#5D7DAF] border-t-[3px] p-6 text-center text-sm h-[140px]'>
                <span>
                  Established a collaboration model between UX, PM, and engineering.
                </span>
              </div>
            </div>
            <div className='flex flex-col bg-white border-[#5D7DAF] border-[3px] overflow-hidden w-[282px]'>
              <div className='flex-1 flex items-center justify-center p-6'>
                <img src={introCardIcon2} alt="Intro Card Icon 2" loading='lazy' className='h-auto w-auto' />
              </div>
              <div className='flex items-center bg-theme-blue-2 border-t-[#5D7DAF] border-t-[3px] p-6 text-center text-sm h-[140px]'>
                <span>
                  Enabled 10+ developers to build consistently using a scalable design system
                </span>
              </div>
            </div>
            <div className='flex flex-col bg-white border-[#5D7DAF] border-[3px] overflow-hidden w-[282px]'>
              <div className='flex-1 flex items-center justify-center p-6'>
                <img src={introCardIcon3} alt="Intro Card Icon 3" loading='lazy' className='h-auto w-auto' />
              </div>
              <div className='flex items-center bg-theme-blue-2 border-t-[#5D7DAF] border-t-[3px] p-6 text-center text-sm h-[140px]'>
                <span>
                  Redesigned navigation, dataset, and labeling workflows
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
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-theme-blue'>
                PROJECT OVERVIEW
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#about">About Vakıfbank & Design process</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-theme-blue'>
                RESEARCH
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#developer-created-design-walkthroughs">Developer-Created design walkthroughs</a>
                </li>
                <li>
                  <a href="#brand-benchmarking">Brand benchmarking</a>
                </li>
                <li>
                  <a href="#information-architecture">Information architecture</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-theme-blue'>
                DESIGN
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#wireframes">Wireframes</a>
                </li>
                <li>
                  <a href="#design-validation">Design validation</a>
                </li>
                <li>
                  <a href="#final-design">Final design</a>
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
