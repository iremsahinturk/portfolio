import findMe1 from '@/assets/about/find-me-1.svg';
import findMe2 from '@/assets/about/find-me-2.svg';
import findMe3 from '@/assets/about/find-me-3.svg';
import findMe4 from '@/assets/about/find-me-4.svg';
import { Section } from '@/common/components/Section';

export const WhereToFind = () => {
  return (
    <Section id="where-to-find" title="Where can you find me when I’m not working?" backgroundColor="theme-yellow" titleColor="black" paddingY="py-16">
      <div className='bg-theme-yellow w-full pb-20'>
        <div className='mx-auto max-w-7xl flex flex-wrap px-6 gap-6 items-center'>
          <img src={findMe1} alt="Find Me 1" loading='lazy' />
          <img src={findMe2} alt="Find Me 2" loading='lazy' />
          <img src={findMe3} alt="Find Me 3" loading='lazy' />
          <img src={findMe4} alt="Find Me 4" loading='lazy' />
        </div>
      </div>
    </Section>
  )
}
