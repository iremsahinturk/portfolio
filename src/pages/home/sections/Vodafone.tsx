import vodafoneLogo from '@/assets/vodafone/vodafone-logo-title.svg';
import headerBlueTriangle from '@/assets/vodafone/header-blue-triangle.svg';
import vodafoneHomePhoneApp from '@/assets/vodafone/vodafone-home-phone-app.svg';
import { Button } from "@/common/shadcn/components/button";

export const Vodafone = () => {
  return (
    <section id="work" className="relative bg-vodafone-soft-blue-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-50 px-6 py-16 md:grid-cols-2 md:py-20">
          <img
            alt="Vodafone app mock"
            // className="h-[460px] w-full object-cover md:h-[520px]"
            src={vodafoneHomePhoneApp}
          />
          

          {/* Right text block */}
          <div className="order-1 md:order-2 gap-12 flex flex-col">
            {/* small icon + brand */}
            <div className="flex flex-col">
              <img className='relative right-15' src={headerBlueTriangle} width={37} height={34} alt="Vodafone Header Blue Triangle" />
              <div className="flex items-center">
                <img src={vodafoneLogo} alt="Vodafone Logo" loading='lazy' />
              </div>
            </div>

            <h2 className="text-2xl font-normal">
              The mobile application is a digital platform where users can manage
              their Vodafone accounts, track data usage, pay bills, and access
              exclusive offers and services.
            </h2>

            <div className='flex flex-col gap-6'>
              <p>
                <span className='font-bold'>Project type: </span>
                <span>Redesign ‘My Rewards’ Flow</span>
              </p>
              <p>
                <span className='font-bold'>Role: </span>
                <span>
                  UX researcher + UX/UI designer
                </span>
              </p>
              <p>
                <span className='font-bold'>Industry: </span>
                <span>Telecommunications, E-commerce</span>
              </p>
            </div>
            <div>
              <Button
                className='bg-red-600 text-white hover:bg-red-700/80 h-[64px] w-[367px] rounded-[40px] text-base'
                size="lg"
              >View Project
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}
