import Image from 'next/image'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import AboutImg from '@/public/images/about.jpg'

export const metadata = {
  title: 'About - ArtsOfBaniya',
  description: 'Learnings, Thoughts, and Ideas of an entrepreneur, builder, and hacker.',
}

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            { /* Page title */}
            <h1 className="h1 font-aspekta mb-5">Hi. I'm Aditya <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">@ArtsOfBaniya</span> Agarwal 🤟</h1>
            <Image className="w-full" src={AboutImg} width={692} height={390} alt="About" />
            { /* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Short Bio</h2>
                <p>
                  I'm an entrepreneur, builder, and hacker, earned my first business income over {Math.floor((new Date().getTime() - new Date('2004-11-25').getTime()) / (365.25 * 24 * 60 * 60 * 1000))} years ago. Oh and I'm {Math.floor((new Date().getTime() - new Date('1996-11-25').getTime()) / (365.25 * 24 * 60 * 60 * 1000))} years old.
                  Living in San Francisco and very likely laughing with (or at) friends at this moment.
                </p>
                <p>                  
                  I love playing <a className="font-medium text-sky-500 hover:underline" href="https://www.arsenal.com/" target="_blank">Soccer</a> (anytime, anyday, I'm down!). Occasionally, you'll find me going to West Coast Swing dancing classes, surfing or playing volleyball. Back in India, I used to love riding my motorcycle, one day I'll get one here too.
                  <br/> Tambien hablo español basico, aprendi en duo lingo, y me gusta mucho viajar a latinoamerica.
                  <br/><br/> The best investment I ever made is my kindle paperwhite!
                </p>
                <p>
                  Here's a 5-min catchup of <a className="font-medium text-sky-500 hover:underline" href="/posts/journey-in-5-mins">my journey so far</a>.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Career</h2>
                <p>
                  After spending 3 years designing distributed data systems for fastest growing companies in India, I started working on my own ideas.
                  <br/> It's been an interesting journey, starting 3 companies, raising funds 3 times, bootstrapping one to profitability, traveling through 3 continents.
                </p>
                <p>
                  I co-founded <a className="font-medium text-sky-500 hover:underline" href='https://jiffyscan.xyz/' target='_blank'>JiffyLabs</a> in Jan'23. After it's launch in Apr'23, grew it 28% MoM for the next 8 months. Fully-boostrapped, made it profitable, generating <b>&gt;$600k</b> in cash flow, while remaining a 2-man, only founder team. Couldn't scale any further and hired the next 5 hires, set their roles and established the the OKR framework. We became the leading data platform in the niche domain and got 3 acquistion offers including one from a decacorn. I had more ideas to experiment, to I decided to decline while letting my co-founder take it forward.
                </p>
                <p>
                My first startup taught me the importance of building for users you can care for, the second one I think of as a mini-sucess, taught me enterprise sales, gtm, product, and initial hiring. Using all these learnigns, I'm now working on my third startup.
                I have tons of ideas, (they truly are dime a dozen at this point), so if we're talking, you're probably unknowingly helping me with customer discovery.
                </p>
                <p>
                  You can checkout my <a className="font-medium text-sky-500 hover:underline" href="/projects">experiments here</a>.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                Let's chat about projects and ideas, how to grow, and how to build, and most importantly, let's dive into the deep end of the pool and fail fast.
                <br/>
                <a className="font-medium text-sky-500 hover:underline" href="https://www.github.com/vintageplayer" target="_blank">Github</a>,&nbsp;
                <a className="font-medium text-sky-500 hover:underline" href="https://www.twitter.com/artsofbaniya" target="_blank">Twitter</a>,&nbsp;
                <a className="font-medium text-sky-500 hover:underline" href="https://www.linkedin.com/in/artsofbaniya/" target="_blank">LinkedIn</a>,&nbsp;
                <a className="font-medium text-sky-500 hover:underline" href="https://www.youtube.com/@artsofbaniya" target="_blank">Youtube</a>,&nbsp;
                <a className="font-medium text-sky-500 hover:underline" href="https://artsofbaniya.substack.com/" target="_blank">Substack</a>
                </p>
              </div>
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
