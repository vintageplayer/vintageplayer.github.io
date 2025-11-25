import ProjectCard from '../project-card'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'

import Icon01 from '@/public/images/project-icon-01.svg'
import Icon02 from '@/public/images/project-icon-02.svg'
import Icon03 from '@/public/images/project-icon-03.svg'
import Icon04 from '@/public/images/project-icon-04.svg'
import Icon05 from '@/public/images/project-icon-05.svg'
import Icon06 from '@/public/images/project-icon-06.svg'
import Icon07 from '@/public/images/project-icon-07.svg'
import Icon08 from '@/public/images/project-icon-08.svg'

export const metadata = {
  title: 'Projects - ArtsOfBaniya',
  description: 'Side Projects, Experiments, and Contributions.',
}

export default function Projects() {

  const companies_founded = [
    {
      id: 0,
      icon: Icon01,
      slug: 'https://www.devscan.ai',
      title: 'DevScan',
      excerpt: 'Developer Intent Based LeadGen for DevTools.',
      openSource: false,
      isExternal: true,
    },
    {
      id: 0,
      icon: Icon02,
      slug: 'https://www.jiffylabs.xyz',
      title: 'JiffyLabs',
      excerpt: 'Data Platform for decentralized applications using the improved user experience standards (account abstraction).',
      openSource: true,
      isExternal: true,
    },
  ]

  const side_projects = [
    {
      id: 0,
      icon: Icon03,
      slug: 'https://chromewebstore.google.com/detail/marinara-pomodoro%C2%AE-assist/bcopdjjecjbeeofmombeeohgbbkjijbg',
      title: 'Marianara',
      excerpt: 'Famous Chrome Pomodoro Extension re-written to work with chrome manifest V3.',
      openSource: true,
      isExternal: true,
    },
    {
      id: 1,
      icon: Icon04,
      slug: 'https://searchguests.com/',
      title: 'Search Guests',
      excerpt: 'An app to enrich Luma Guests Details from Twitter/Linkedin to help you evaluate the events to attend and prioritize the ones to meet',
      openSource: false,
      isExternal: true,
    },
    {
      id: 2,
      icon: Icon08,
      slug: 'https://interpersonal-coach.vercel.app/',
      title: 'interpersonal Coach',
      excerpt: 'Conversation Simulator to practice having tough conversations with people of different attachment styles',
      openSource: false,
      isExternal: true,
    },
    {
      id: 3,
      icon: Icon06,
      slug: 'https://github.com/vintageplayer/chrome-tabs-to-google-tasks',
      title: 'Tabs to Tasks',
      excerpt: 'Chrome extension to close multiple tabs and add them as tasks on your google tasks/calendar',
      openSource: true,
      isExternal: true,
    },
    {
      id: 4,
      icon: Icon07,
      slug: '#0',
      title: 'Nudge Buddy',
      excerpt: 'Reminds you to stay in touch with people and keep your network warm.',
      openSource: false,
      isExternal: true,
    },
    {
      id: 5,
      icon: Icon05,
      slug: '#0',
      title: 'FindMyCTO',
      excerpt: 'Find techies actively coding and have previous founder experience.',
      openSource: false,
      isExternal: true,
    },
  ]

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Nice stuff I've built</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">Companies Founded</h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">

                  {companies_founded.map(item => (
                    <ProjectCard key={item.id} item={item} />
                  ))}

                </div>
              </section>
              {/* Client Projects cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">Side Projects</h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">

                  {side_projects.map(item => (
                    <ProjectCard key={item.id} item={item} />
                  ))}

                </div>
              </section>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetNewsletter />
          <WidgetSponsor />

        </div>
      </aside>

    </div>
  )
}
