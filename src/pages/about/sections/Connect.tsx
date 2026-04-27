import emailIcon from '@/assets/about/email-icon.svg'
import linkedinIcon from '@/assets/about/linkedin-icon.svg'

export const Connect = () => {
  return (
    <section className='my-12'>
    <div className="flex flex-col items-center gap-8">
      <div className='flex flex-col items-center text-base leading-7 tracking-wide'>
        <p className='font-medium'>Let’s connect</p>
        <br />
        <p >Get in touch for opportunities or just say hi!</p>
      </div>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/iremsahinturk" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn Icon" />
        </a>
        <a href="mailto:iremtosn@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email Icon" />
        </a>
      </div>
    </div>
  </section>
  )
}
