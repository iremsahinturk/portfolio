import vodafoneLogo from '@/assets/vodafone/vodafone-logo-title.svg';
import headerBlueTriangle from '@/assets/vodafone/header-blue-triangle.svg';
import { Button } from "@/common/shadcn/components/button";

export const Vodafone = () => {
  return (
    <section id="work" className="relative bg-vodafone-soft-blue-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* Left visual */}
          <div className="relative order-2 md:order-1">
            {/* Yellow diamond behind phone */}
            <div className="absolute left-10 top-28 h-40 w-40 rotate-45 rounded-2xl bg-yellow-400/90 md:left-16 md:top-32 md:h-52 md:w-52" />

            {/* Phone mock (replace src) */}
            <div className="relative mx-auto w-[230px] rotate-[-18deg] md:mx-0 md:w-[260px]">
              <div className="overflow-hidden rounded-[34px] bg-neutral-900 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <div className="relative overflow-hidden rounded-[28px] bg-white">
                  {/* notch */}
                  <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900/90" />
                  <img
                    alt="Vodafone app mock"
                    className="h-[460px] w-full object-cover md:h-[520px]"
                    src="/images/vodafone-phone.png"
                  />
                </div>
              </div>
            </div>
          </div>

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

            {/* <div className="mt-8 space-y-2 text-xs text-neutral-700 md:text-sm">
              <p>
                <span className="font-semibold text-neutral-900">Project type:</span>{" "}
                Redesign ‘My Rewards’ Flow
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Role:</span> UX
                researcher + UX/UI designer
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Industry:</span>{" "}
                Telecommunications, E-commerce
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-red-700 active:translate-y-0"
              >
                View project
              </a>
            </div> */}
          </div>
        </div>
      </section>
  )
}
