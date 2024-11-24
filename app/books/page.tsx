import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import { getBookRecommendations } from '@/components/mdx/utils'
import { CustomMDX } from '@/components/mdx/mdx'

export const metadata = {
  title: 'Books - ArtsOfBaniya',
  description: 'Books that have impacted my journey as an early-stage tech founder.',
}

export default function Books() {

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Book Recommendations</h1>
            {/* Page content */}
            <div className="space-y-10">
              <div className="prose text-slate-500 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-pre:bg-slate-800 dark:prose-code:text-slate-200">
                <CustomMDX source={getBookRecommendations().content} />
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
