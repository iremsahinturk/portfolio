import emailIcon from '@/assets/about/email-icon.svg'
import linkedinLogo from '@/assets/about/linkedin-logo.svg'

export const Connect = () => {
  return (
    <div className="flex flex-col items-center gap-10 my-12">
      <p className='text-2xl leading-9 tracking-wider text-mavi font-medium'>Let’s connect</p>
      <p className='text-2xl leading-9 tracking-wider text-mavi'>Get in touch for opportunities or just say hi!</p>
      <div className="flex gap-12">
        <a href="https://www.linkedin.com/in/iremsahinturk" target="_blank" rel="noopener noreferrer">
          <img className='bg-black' src={linkedinLogo} alt="LinkedIn Icon" />
        </a>
        <a href="mailto:iremtosn@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email Icon" />
        </a>
      </div>
    </div>
  )
}
