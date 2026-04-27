import vakifLogo from '@/assets/vakifbank/vakif-logo.svg';
import vakifbankHomeLaptop from '@/assets/home/vakifbank-home-laptop.svg';
import { useNavigate } from 'react-router';

export const Vakifbank = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/works/vakifbank-project");
  };

  return (
    <section onClick={handleClick} className="cursor-pointer">
      <div className="bg-theme-blue">
        <div className="mx-auto max-w-7xl px-6 py-30 grid lg:grid-cols-2 gap-5 items-center">
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
            </div>
          </div>
          <div className='grid place-items-center'>
            <img src={vakifbankHomeLaptop} alt="Vakifbank Home Laptop" loading='lazy' />
          </div>
        </div>
      </div>
    </section>
  )
}
