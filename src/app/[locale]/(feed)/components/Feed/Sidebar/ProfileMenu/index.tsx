import { getUserSession } from '@/utils/auth/getUserSession'
import Image from 'next/image'
import { SavedItems } from './icons/SavedItems'
import { getTranslations } from 'next-intl/server'
import { rawTranslation } from '@/utils/internationalization/rawTranslation'

export const ProfileMenu: React.FC = async () => {
  const user = await getUserSession()

  const t = await getTranslations('user-sidebar')
  const { secondColumn } = rawTranslation({
    t,
    namespace: 'user-sidebar',
    key: 'list'
  })

  return (
    <aside className="inset-0 top-28 hidden h-full w-full max-w-[230px] lg:sticky lg:flex">
      <div className="flex max-h-[420px] w-full max-w-xs flex-col gap-8">
        <section className="rounded-md bg-white">
          <figure className="w-full">
            <Image
              className="h-full max-h-[60px] w-full rounded-t-md object-cover"
              alt={user.username}
              src={
                user.background_picture === 'blank'
                  ? 'https://wallpapercave.com/wp/wp10824842.jpg'
                  : user.background_picture
              }
              width={1920}
              height={1080}
            />
          </figure>
          <figure className="w-full">
            <Image
              src={user.profile_picture}
              alt={user.username}
              width={400}
              height={400}
              className="mx-auto -mt-6 h-12 w-12 cursor-pointer rounded-full transition-all duration-300 hover:brightness-125"
            />
          </figure>
          <article className="flex w-full flex-col divide-y divide-slate-200 lg:pb-6">
            <div className="flex w-full flex-col items-center gap-1 px-4 py-4">
              <p className="text-sm text-slate-600">
                {user.firstname} {user.lastname}
              </p>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
            <div className="flex w-full flex-col py-3">
              <span className="flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-1 transition-all duration-default hover:bg-neutral-100">
                <p className="w-full text-sm text-slate-600">
                  {t('list.firstColumn.friends')}
                </p>
                <p className="text-sm font-medium text-blue-500">
                  {user.followers || 0}
                </p>
              </span>
              <p className="w-full cursor-pointer px-4 py-1 text-sm text-slate-600 transition-all duration-default hover:bg-neutral-100">
                {t('list.firstColumn.analytics')}
              </p>
            </div>
            <div className="flex w-full flex-col py-3">
              {secondColumn.map((item, index: number) => (
                <p
                  className="w-full cursor-pointer px-4 py-1 text-sm text-slate-600 transition-all duration-default hover:bg-neutral-100"
                  key={`${item}-${index}`}
                >
                  {item.label}
                </p>
              ))}
            </div>
            <div className="flex w-full flex-col pt-3">
              <div className="flex w-full cursor-pointer items-center gap-2 px-4 py-1 transition-all duration-default hover:bg-neutral-100">
                <SavedItems className="h-4 w-4" />
                <p className="w-full cursor-pointer text-sm text-slate-600 transition-all duration-default hover:bg-neutral-100">
                  {t('list.thirdColumn.favourites')}
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </aside>
  )
}
