import heroDivider from '@/assets/home/hero-divider.svg'


export const Hero = () => {
  return (
    <section className="bg-white">
      <div className='grid justify-center mx-auto max-w-7xl px-4 py-48 leading-7 tracking-wide'>
        <h1 className="text-5xl font-medium leading-8 tracking-wide">
          Hi, I’m Irem 
        </h1>
        <p className="text-base font-medium mt-12 leading-8 tracking-wide">
          Product Designer with over 6 years of experience designing complex, large-scale systems in mission-driven environments. I specialize in translating complexity into intuitive, user-centered solutions that create meaningful and measurable impact.
        </p>
      </div>
      <div className='w-full'>
        <img src={heroDivider} alt="Hero Divider" className="w-full h-auto" loading='lazy' />
      </div>

    </section>
  )
}
