import { Section } from "@/common/components/Section"
import workshopPreparation from '@/assets/vodafone/workshop-preparation.svg';
import affinityMap from '@/assets/vodafone/affinity-map.svg';

const affinityMapData: {
  title: string;
  items: string[];
  theme: keyof typeof colorClasses;
}[] = [
  {
    title: 'CURRENT CAMPAIGNS',
    items: [
      'Awareness of Campaigns',
      'Campaign Evaluation',
      'Usage Habits',
      'Features Liked in Similar Apps'
    ],
    theme: 'red'
  },
  {
    title: 'CONTENT EXPECTATIONS',
    items: [
      "Feeling Special",
      "“We Already Have This in Our App” Perception",
      "Ideas for New Content"
    ],
    theme: 'blue'
  },
  {
    title: 'FLOW USABILITY',
    items: [
      "Tariff, Extra Data, and Internet Offers",
      "Device Offers",
      "Lifestyle Offers (Movies, Games, Food, etc.)"
    ],
    theme: 'yellow'
  },
  {
    title: 'OTHER SQUADS',
    items: [
      "Chatbot Squad",
      "Mobile Acquisition Squad",
      "Marketplace Squad"
    ],
    theme: 'green'
  },
]

export const WorkshopAffinityMap = () => {
  return (
    <Section id="workshop-affinity-map" title="Workshop with Upgrade squad & Affinity map" backgroundColor="theme-red" titleColor="black">
      <div className='grid justify-center mx-auto max-w-3xl px-4 md:px-0 mt-16 text-sm leading-7 tracking-wide'>
        <p>
          In the Upgrade squad, we are a team of eight:
          <span className='font-semibold'> 3 developers, 1 Product Owner, 2 Product Leads, 1 QA Engineer, and 1 UX Designer. </span>
        </p>
        <br />
        <p>
          While developing design recommendations,
          <span className='font-semibold'> everyone’s unique experience and perspective are highly valuable </span>
          — whether it’s about implementing these ideas in the live environment, anticipating user feedback, or estimating potential traffic and engagement.
        </p>
        <br />
        <p>
          I organized this workshop to help us
          <span className='font-semibold'> empathize with our users</span>
          , understand UX from their perspective, and strengthen the visibility and
          <span className='font-semibold'> importance of user experience </span>
          within our team. Most importantly, the goal is to co-create creative, user-centered
          <span className='font-semibold'> recommendations that we all agree on </span>
          and can stand behind together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-24 px-8">
        <h2 className="text-2xl tracking-wider font-semibold text-center">
          Workshop preparation
        </h2>
        <img src={workshopPreparation} alt="Workshop preparation" className="w-full h-auto mt-12" loading="lazy" />
      </div>
      <div className="max-w-7xl mx-auto mt-24 px-8">
        <h2 className="text-2xl tracking-wider font-semibold text-center">
          Affinity Map
        </h2>

        <div className='mx-auto max-w-7xl mt-12'>
          <div className='flex flex-col sm:flex-row gap-6'>
            {affinityMapData.map((data, i) => (
              <AffinityMapCard key={i} title={data.title} items={data.items} theme={data.theme} />
            ))}
          </div>
        </div>
        <img src={affinityMap} alt="Affinity Map" className="w-full h-auto mt-12" loading="lazy" />
      </div>


    </Section >
  )
}

const colorClasses = {
  red: {
    bg: 'bg-theme-red-2',
    border: 'border-theme-red',
    borderT: 'border-t-theme-red',
  },
  blue: {
    bg: 'bg-theme-blue-2',
    border: 'border-theme-blue',
    borderT: 'border-t-theme-blue',
  },
  yellow: {
    bg: 'bg-theme-yellow-2',
    border: 'border-theme-yellow',
    borderT: 'border-t-theme-yellow',
  },
  green: {
    bg: 'bg-theme-green',
    border: 'border-theme-green-2',
    borderT: 'border-t-theme-green-2',
  },
};
const AffinityMapCard = ({ title, items, theme }: { title: string; items: string[]; theme: keyof typeof colorClasses }) => {
  return (
    <div className={`flex flex-col flex-1 bg-white ${colorClasses[theme].border} border-[3px] rounded-lg overflow-hidden`}>
      <div className={`flex items-center justify-center ${colorClasses[theme].bg} p-6 text-sm font-semibold`}>
        <span>
          {title}
        </span>
      </div>
      <div className={`${colorClasses[theme].borderT} border-t-[3px] rounded p-6 text-sm`}>
        <ul className='list-disc list-inside space-y-4'>
          {items.map((item, i) => (
            <li key={i}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
