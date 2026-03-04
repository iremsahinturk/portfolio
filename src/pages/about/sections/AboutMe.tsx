
export const AboutMe = () => {
  return (
    <section>
      <div className="flex flex-col gap-28">
        <h1 className="text-7xl tracking-tight text-center">
          <span className="underline decoration-4 decoration-wavy underline-offset-10 decoration-vodafone-soft-blue-background">
            Hello!
          </span>
          &nbsp;I&apos;m Irem
        </h1>
        <div className="grid gap-6 justify-center mx-auto max-w-5xl px-4 text-xl leading-9 tracking-wider">
          <p className="text-2xl">
            A little bit about me
          </p>
          <p className="font-light">
            I’ve always been interested in observing how people interact with the world around them—what motivates their actions, where they get stuck, and how thoughtful design can make those moments smoother. This curiosity led me from a product design background into the UX field, where I could combine human-centered thinking with technology.
          </p>
          <p className="font-light">
            Over the years, I’ve worked in both agency and corporate settings, designing end-to-end experiences and collaborating across disciplines on products in e-commerce and banking. These experiences allowed me to apply user research methods in real-world environments and gain a deeper understanding of designing for high-complexity systems.
          </p>
          <p className="font-light">
            With more than 6 years of experience, I now enjoy tackling complex problems and translating them into clear, intuitive experiences that create positive and meaningful impact.
            
          </p>
          <p className="font-light">
            Beyond digital design, I also explore materials through hands-on making—something I document and reflect on in this&nbsp;
            <a className="text-blue-600 underline decoration-blue-600" href="https://www.youtube.com/watch?v=ATy6-3vf4SI" target="_blank" rel="noopener noreferrer">short video</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
