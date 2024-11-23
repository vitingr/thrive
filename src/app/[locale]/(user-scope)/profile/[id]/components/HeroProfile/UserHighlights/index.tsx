import { OutlineHeart } from '@/components/common/PostCard/icons/OutlineHeart'

export const UserHighlights: React.FC = async () => {
  return (
    <ul className="flex w-full gap-4">
      <li className="flex cursor-pointer gap-2 rounded-[6px] border border-slate-200 p-2 transition-all duration-300 hover:bg-neutral-50">
        <OutlineHeart className="mt-1.5 h-5 w-5" />
        <article className="flex flex-col">
          <p className="text-sm lg:text-base">Maratonista</p>
          <p className="text-xs text-slate-400">3 Participações em eventos</p>
        </article>
      </li>
      <li className="flex cursor-pointer gap-2 rounded-[6px] border border-slate-200 p-2 transition-all duration-300 hover:bg-neutral-50">
        <OutlineHeart className="mt-1.5 h-5 w-5" />
        <article className="flex flex-col">
          <p className="text-sm lg:text-base">Maratonista</p>
          <p className="text-xs text-slate-400">3 Participações em eventos</p>
        </article>
      </li>
      <li
        className="flex gap-2 rounded-[6px] border border-slate-200 p-2 transition-all duration-300 hover:bg-neutral-50"
        cursor-pointer
      >
        <OutlineHeart className="mt-1.5 h-5 w-5" />
        <article className="flex flex-col">
          <p className="text-sm lg:text-base">Maratonista</p>
          <p className="text-xs text-slate-400">3 Participações em eventos</p>
        </article>
      </li>
    </ul>
  )
}
