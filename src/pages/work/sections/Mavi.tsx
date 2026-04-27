import maviLogo from '@/assets/mavi/mavi-logo.svg';
import maviHomeApps from '@/assets/work/mavi-home-apps.svg';
import { useNavigate } from "react-router";


export const Mavi = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/work/mavi-project");
  };

  return (
    <section onClick={handleClick} className="cursor-pointer">
      <div className="bg-theme-yellow">
        <div className="mx-auto max-w-7xl px-6 py-30 grid lg:grid-cols-2 gap-5 items-center">
          <div className='grid place-items-center'>
            <img src={maviHomeApps} alt="Mavi Home Apps" loading='lazy' />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
