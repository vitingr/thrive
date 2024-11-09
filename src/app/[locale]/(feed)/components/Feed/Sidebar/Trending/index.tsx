import { CircleButton } from '@/components/common/CircleButton'
import { TrendingProps } from './types'
import { TRENDING_TOPICS } from './data'

export const Treding: React.FC<TrendingProps> = () => {
  return (
    <article className="flex w-full flex-col gap-4 rounded-md bg-white p-4">
      <h2 className="font-semibold lg:text-xl">Veja o que está em alta</h2>
      <ul className="flex flex-col divide-y divide-slate-200">
        {TRENDING_TOPICS.map((topic, index: number) => (
          <li
            className="flex cursor-pointer flex-col py-2 px-2 transition-all duration-300 hover:bg-slate-100"
            key={`${topic}-${index}`}
          >
            <p className="text-xs text-slate-500">Assunto do momento</p>
            <p className="text-sm line-clamp-1">{topic}</p>
          </li>
        ))}
      </ul>
      <CircleButton label="Ver mais" />
    </article>
  )
}
