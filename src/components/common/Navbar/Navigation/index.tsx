import { getLocale } from 'next-intl/server'

import { getUserSession } from '@/utils/auth/getUserSession'

import { CreatePost } from '../CreatePost'
import { NavigationProps } from './types'

export const Navigation: React.FC<NavigationProps> = async ({ copy }) => {
  const locale = await getLocale()
  const user = await getUserSession()

  return (
    <div className="flex w-full items-center justify-start gap-4">
      {/* <Anchor className="max-w-12" href="#" variant="custom">
        <Image alt="Logo" height={93} src="/logos/logo.png" width={93} />
      </Anchor> */}
      {/* <div className="relative flex w-full flex-1 lg:max-w-[340px]">
        <input
          autoComplete="off"
          className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          id="search"
          name="search"
          placeholder={copy.search}
          type="text"
        />
      </div> */}
      <CreatePost copy={copy} locale={locale} userData={user} />
    </div>
  )
}
