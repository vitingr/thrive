import { getTranslations } from 'next-intl/server'

import { CircleButton } from '@/components/common/CircleButton'
import { rawTranslation } from '@/utils/internationalization/rawTranslation'

import { TrendingProps } from './types'

export const Treding: React.FC<TrendingProps> = async () => {
  const t = await getTranslations('sidebar')
  const { trending } = rawTranslation({
    t,
    namespace: 'sidebar',
    key: 'content'
  })

  return (
    <article className="flex w-full flex-col gap-4 rounded-md bg-white p-4">
      <h2 className="font-semibold lg:text-xl">
        {t('content.trending.title')}
      </h2>
      <ul className="flex flex-col divide-y divide-slate-200">
        {trending.defaultPosts.map((topic, index: number) => (
          <li
            className="flex cursor-pointer flex-col px-2 py-2 transition-all duration-300 hover:bg-slate-100"
            key={`${topic}-${index}`}
          >
            <p className="text-xs text-slate-500">{topic.prefix}</p>
            <p className="line-clamp-1 text-sm">{topic.title}</p>
          </li>
        ))}
      </ul>
      <CircleButton label={t('content.seeMore')} />
    </article>
  )
}
