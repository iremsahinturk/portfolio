import { Section } from "@/common/components/Section"
import brandBenchmarkingComparison from '@/assets/vakifbank/brand-benchmarking-comparison.svg';
import brandBenchmarkingFlowSamples from '@/assets/vakifbank/brand-benchmarking-flow-samples.svg';

export const BrandBenchmarking = () => {
  return (
    <Section id="brand-benchmarking" title="Brand Benchmarking" backgroundColor="theme-blue" titleColor="white">
      <div className='grid mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          Since AI workflows such as dataset creation, labeling, and model training were new to us as UX designers, we conducted focused benchmarking and hands-on exploration of similar platforms. Rather than reviewing many brands at a surface level, we intentionally
          <span className='font-semibold'> kept the scope smaller and focused on using demos and tutorials to build domain understanding</span>
          , identify common user challenges, and uncover recurring solution patterns that informed user-centered design decisions.
        </p>
      </div>
      <div className='mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
        <img src={brandBenchmarkingComparison} alt="Brand Benchmarking Comparison" className="w-full h-auto mt-12" loading="lazy" />
      </div>
      <div className='mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
        <img src={brandBenchmarkingFlowSamples} alt="Brand Benchmarking Flow Samples" className="w-full h-auto mt-12" loading="lazy" />
      </div>
    </Section>
  )
}
