import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { CircleButton } from '@/components/common/CircleButton'
import { instanceContent } from '@/instances/instanceContent'
import { getUserSession } from '@/utils/auth/getUserSession'

import { FOLLOWERS } from './data'

export const PeopleYouMightKnow: React.FC = async () => {
  const user = await getUserSession()
  const t = await getTranslations('sidebar')

  const { data: suggestedFriends } =
    await instanceContent.friends.getSuggestFriends({ userId: user.id })

  return (
    suggestedFriends && (
      <article className="flex w-full flex-col gap-4 rounded-md bg-white p-4">
        <h2 className="font-semibold lg:text-xl">
          {t('content.peopleYouMightKnow.title')}
        </h2>
        <ul className="flex flex-col divide-y divide-slate-200">
          {suggestedFriends.map((user, index: number) => (
            <li
              className="flex cursor-pointer items-center gap-2 py-2 pl-2 transition-all duration-300 hover:bg-neutral-100"
              key={`${user.username}-${index}`}
            >
              <figure className="w-full max-w-10 rounded-full">
                <Image
                  alt={`profile-picture-${user.username}`}
                  className="h-9 w-9 rounded-full object-cover"
                  height={100}
                  src={user.profile_picture}
                  width={100}
                />
              </figure>
              <div className="flex w-full flex-col">
                <p className="text-sm">
                  {user.firstname} {user.lastname}
                </p>
                <p className="line-clamp-1 text-xs text-slate-500">
                  {t('content.followedBy')}{' '}
                  {FOLLOWERS.map((user, index: number) => (
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
        <CircleButton label={t('content.seeMore')} />
      </article>
    )
  )
}
