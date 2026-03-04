import maviLogo from '@/assets/mavi/mavi-logo.svg';
import headerRedTriangle from '@/assets/mavi/header-red-triangle.svg';
import maviScreenHomeDisplay from '@/assets/mavi/mavi-screen-home-display.svg';
import { Button } from '@/common/shadcn/components/button';
import { useNavigate } from "react-router";


export const Mavi = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-mavi text-white">
        <div className="mx-auto grid max-w-[1450px] grid-cols-2 items-center gap-20 px-6 py-16 md:grid-cols-3 md:py-20">
          {/* Left text */}
          <div className="flex flex-col gap-12 max-w-lg">
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

          <div className='col-span-2'>
            <img
              alt="Mavi website mock"
              className='max-w-fit'
              src={maviScreenHomeDisplay}
            />
          </div>
        </div>
      </section>
  )
}
