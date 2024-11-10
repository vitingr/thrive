import Image from 'next/image'

import { CircleButton } from '@/components/common/CircleButton'

import { PEOPLE_YOU_MIGHT_KNOW } from './data'

export const PeopleYouMightKnow: React.FC = () => {
  return (
    <article className="flex w-full flex-col gap-4 rounded-md bg-white p-4">
      <h2 className="font-semibold lg:text-xl">
        Pessoas que você talvez conheça
      </h2>
      <ul className="flex flex-col divide-y divide-slate-200">
        {PEOPLE_YOU_MIGHT_KNOW.map((user, index: number) => (
          <li
            className="flex cursor-pointer items-center gap-3 py-2 pl-2 transition-all duration-300 hover:bg-slate-100"
            key={`${user.name}-${index}`}
          >
            <figure className="w-full max-w-10 rounded-full">
              <Image
                alt={`profile-picture-${user.name}`}
                className="h-10 w-10 rounded-full object-cover"
                height={100}
                src={user.picture}
                width={100}
              />
            </figure>
            <div className="flex w-full flex-col">
              <p>{user.name}</p>
              <p className="line-clamp-1 text-sm text-slate-500">
                Seguido por{' '}
                {user.followed_by.map((user, index: number) => (
                  <span
                    className="text-sm text-slate-500"
                    key={`${user}-${index}`}
                  >
                    {user},{' '}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <CircleButton label="Ver mais" />
    </article>
  )
}
