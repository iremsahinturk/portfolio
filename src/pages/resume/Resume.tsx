import downloadIcon from '@/assets/resume/download-icon.svg'
import resume from '@/assets/resume/irem-sahinturk-resume.svg'
import resumePdf from '@/assets/resume/irem-sahinturk-resume.pdf'

export default function Resume() {
  return (
    <section>
      <div className="sticky top-21 z-30 bg-theme-yellow/50 w-full p-4">
        <div className="flex justify-end items-center ">
          <a href={resumePdf} download="irem-sahinturk-resume.pdf" className="flex items-center gap-2 text-sm font-medium">
            <img src={downloadIcon} alt="Download Icon" />
            <span>Download</span>
          </a>
        </div>
      </div>
      <div className='flex items-center my-10'>
        <img src={resume} alt="Irem Sahinturk Resume" className='mx-auto' />
      </div>
    </section>
  )
}
