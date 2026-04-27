import vodafoneLogo from '@/assets/vodafone/vodafone-logo-title.svg';
import vodafoneHomePhone from '@/assets/home/vodafone-home-phone.svg';
import { useNavigate } from "react-router";

export const Vodafone = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/works/vodafone-project");
  };

  return (
    <section onClick={handleClick} className="cursor-pointer">
      <div className="bg-theme-red">
        <div className="mx-auto max-w-7xl px-6 py-5 grid lg:grid-cols-2 gap-10 items-center">
          <div className='grid place-items-center'>
            <img src={vodafoneHomePhone} alt="Vodafone Home Phone App" loading='lazy' />
          </div>
          <div className='flex flex-col gap-9'>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
