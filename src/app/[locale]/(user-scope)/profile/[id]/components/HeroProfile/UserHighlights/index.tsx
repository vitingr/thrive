import { Calendar } from './icons/Calendar'
import { Gym } from './icons/Gym'
import { Shoes } from './icons/Shoes'

export const UserHighlights: React.FC = async () => {
  return (
    <ul className="flex w-full gap-4">
      <li className="flex cursor-pointer gap-2 rounded-[6px] border border-slate-200 p-2 transition-all duration-300 hover:bg-neutral-50">
        <Calendar className="mt-1.5 h-5 w-5 text-slate-500" />
        <article className="flex flex-col">
          <p className="text-sm lg:text-base">Maratonista</p>
          <p className="text-xs text-slate-400">3 Participações em eventos</p>
        </article>
      </li>
      <li className="flex cursor-pointer gap-2 rounded-[6px] border border-slate-200 p-2 transition-all duration-300 hover:bg-neutral-50">
        <Shoes className="mt-1.5 h-5 w-5 text-slate-500" />
        <article className="flex flex-col">
          <p className="text-sm lg:text-base">Corredor Urbano</p>
          <p className="text-xs text-slate-400">
            Praticante de corridas de rua
          </p>
        </article>
      </li>
      <li className="flex cursor-pointer gap-2 rounded-[6px] border border-slate-200 p-2 transition-all duration-300 hover:bg-neutral-50">
        <Gym className="mt-1.5 h-5 w-5 text-slate-500" />
        <article className="flex flex-col">
          <p className="text-sm lg:text-base">Academista</p>
          <p className="text-xs text-slate-400">
            Frequenta a Academia todos os dias
          </p>
        </article>
      </li>
    </ul>
  )
}
