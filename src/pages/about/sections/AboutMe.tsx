import aboutIrem from '@/assets/about/about-irem.svg'

export const AboutMe = () => {
  return (
    <section className="py-20 mx-auto max-w-3xl text-base leading-7 tracking-wide">
      <div className="flex flex-col gap-12">
        <div className='grid place-items-center'>
            <img src={aboutIrem} alt="Irem" loading='lazy' />
        </div>
        <div>
          <p>
            A little bit about me.
          </p>
          <br />
          <p>
            I’ve always been interested in observing how people interact with the world around them—what motivates their actions, where they get stuck, and how thoughtful design can make those moments smoother. This curiosity led me from a product design background into the UX field, where I could combine human-centered thinking with technology.
          </p>
          <br />
          <p>
            Over the years, I’ve worked in both agency and corporate settings, designing end-to-end experiences and collaborating across disciplines on products in e-commerce and banking. These experiences allowed me to apply user research methods in real-world environments and gain a deeper understanding of designing for high-complexity systems.
          </p>
          <br />
          <p>
            With more than 6 years of experience, I now enjoy tackling complex problems and translating them into clear, intuitive experiences that create positive and meaningful impact.
          </p>
          <br />
          <p>
            Beyond digital design, I also explore materials through hands-on making—something I document and reflect on 
            <a className="text-theme-blue hover:underline" href="https://www.youtube.com/watch?v=ATy6-3vf4SI" target="_blank" rel="noopener noreferrer"> in this short video</a>.
          </p>
        </div>
        
      </div>
    </section>
  )
}
