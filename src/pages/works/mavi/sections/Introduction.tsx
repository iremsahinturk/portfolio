import maviWebHomepage from '@/assets/mavi/mavi-homepage.svg';
import maviLogo from '@/assets/mavi/mavi-logo.svg';

export const Introduction = () => {

  return (
    <section>
      <div className="bg-theme-yellow mb-16 ">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-15 items-center">
          <div className='relative'>
            <div className='grid place-items-center'>
              <img src={maviWebHomepage} alt="Mavi Web Homepage" loading='lazy' />
            </div>
          </div>
          <div className='flex flex-col gap-9'>
            <div>
              <img src={maviLogo} alt="Mavi Logo" loading='lazy' />
            </div>
            <div>
              <h2 className="text-xl font-normal">
                The website is an online platform where users can browse and purchase clothing and accessories.
              </h2>
            </div>
            <div className='flex flex-col gap-4 text-sm'>
              <p>
                <span className='font-bold'>Project type: </span>
                <span>End-to-End Redesign</span>
              </p>
              <p>
                <span className='font-bold'>Role: </span>
                <span>
                  UX researcher + UX/UI designer
                  <span className='italic'>
                    &nbsp;(with support from my team at Userspots agency)
                  </span>
                </span>
              </p>
              <p>
                <span className='font-bold'>Industry: </span>
                <span>E-commerce</span>
              </p>
              <p>
                <span className='font-bold'>Tools: </span>
                <span>Figma, Excel, Miro</span>
              </p>
              <p>
                <span className='font-bold'>Duration: </span>
                <span>Q3 2020-Q4 2020</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-4 lg:px-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
                PROJECT OVERVIEW
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#about">About Mavi & Project scope's</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
                RESEARCH
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#store-stuff-in-depth-interviews">Store stuff In-depth interviews (4)</a>
                </li>
                <li>
                  <a href="#user-interviews">User interviews (6)</a>
                </li>
                <li>
                  <a href="#brand-benchmarking">Brand benchmarking (162)</a>
                </li>
                <li>
                  <a href="#mental-model">Mental model</a>
                </li>
                <li>
                  <a href="#trends">Trends study</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
                DESIGN
              </h2>
            </div>
            <div className='mt-12 pl-3 text-sm'>
              <ul className='list-disc list-inside space-y-4 underline underline-offset-4'>
                <li>
                  <a href="#wireframes">High-fidelity wireframes</a>
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
