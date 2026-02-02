import maviLogo from '@/assets/mavi/mavi-logo.svg';
import headerRedTriangle from '@/assets/mavi/header-red-triangle.svg';
import { Button } from '@/common/shadcn/components/button';
import { useNavigate } from "react-router";


export const Mavi = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-mavi text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* Left text */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col">
              <img className='relative right-15' src={headerRedTriangle} width={37} height={34} alt="Mavi Header Red Triangle" />
              <div className="flex items-center">
                <img src={maviLogo} alt="Mavi Logo" loading='lazy' />
              </div>
            </div>

            <h2 className="text-2xl font-normal">
              The website is an online platform where users can browse and
              purchase clothing and accessories.
            </h2>

            <div className='flex flex-col gap-6'>
              <p>
                <span className='font-bold'>Project type: </span>
                <span>End-to-End responsive website</span>
              </p>
              <p>
                <span className='font-bold'>Role: </span>
                <span>
                  UX researcher + UX/UI designer
                </span>
              </p>
              <p>
                <span className='font-bold'>Industry: </span>
                <span>Fashion, E-commerce</span>
              </p>
            </div>
            <div>
              <Button
                className='bg-mavi-yellow text-mavi hover:bg-mavi-yellow/80 h-[64px] w-[367px] rounded-[40px] text-base'
                size="lg"
                onClick={() => navigate("works/mavi-project")}
              >View Project
              </Button>
            </div>
          </div>

          {/* Right visuals */}
          <div className="relative">
            {/* big cloud-ish shape */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-56 rounded-[999px] bg-sky-200/90 blur-[0px] md:-right-12 md:-top-10 md:h-52 md:w-72">
              {/* extra bumps */}
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-sky-200/90" />
              <div className="absolute right-6 top-10 h-24 w-24 rounded-full bg-sky-200/90" />
            </div>

            {/* Laptop mock */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="rounded-2xl bg-neutral-900/30 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-xl bg-white">
                  <img
                    alt="Mavi website mock"
                    className="h-[260px] w-full object-cover sm:h-[300px]"
                    src="/images/mavi-laptop.png"
                  />
                </div>
              </div>

              {/* Small phone mock on bottom-right */}
              <div className="absolute -bottom-8 right-2 w-[110px] rotate-[6deg] sm:right-6 sm:w-[130px]">
                <div className="overflow-hidden rounded-[22px] bg-neutral-900 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="overflow-hidden rounded-[18px] bg-white">
                    <img
                      alt="Mavi mobile mock"
                      className="h-[210px] w-full object-cover sm:h-[240px]"
                      src="/images/mavi-phone.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* spacer for overlapping phone */}
            <div className="h-10" />
          </div>
        </div>
      </section>
  )
}
