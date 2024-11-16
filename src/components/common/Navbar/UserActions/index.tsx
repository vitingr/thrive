import { IoApps } from 'react-icons/io5'

import { getUserSession } from '@/utils/auth/getUserSession'

import { CreatePost } from '../CreatePost'
import { UserScope } from './UserScope'
import { getLocale } from 'next-intl/server'
import { UserActionsProps } from './types'
import { Anchor } from '@/components/toolkit/Anchor'
import Image from 'next/image'
import { LogOut } from './UserScope/LogOut'

export const UserActions: React.FC<UserActionsProps> = async ({ copy }) => {
  const user = await getUserSession()
  const locale = await getLocale()

  return (
    <div className="flex w-auto items-center justify-end gap-8 lg:w-full">
      <CreatePost userData={user} copy={copy} locale={locale} />
      <UserScope />
      <div className="flex items-center gap-6 border-l border-slate-300 pl-8">
        {!user ? (
          <div className="flex items-center gap-3">
            <Anchor
              className="py-1 md:text-sm"
              variant="secondary"
              href={copy.login.href}
            >
              {copy.login.label}
            </Anchor>
            <Anchor
              className="py-1 md:text-sm"
              variant="secondaryOutline"
              href={copy.signup.href}
            >
              {copy.signup.label}
            </Anchor>
          </div>
        ) : (
          <>
            <figure className="h-full max-h-6 w-full max-w-6 lg:max-h-8 lg:max-w-8">
              <Image
                className="h-6 w-6 cursor-pointer rounded-full object-cover transition-all duration-300 hover:brightness-125 lg:h-8 lg:w-8"
                src={user.profile_picture}
                alt={user.firstname}
                width={128}
                height={128}
              />
            </figure>
            <LogOut />
          </>
        )}
        <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
          <IoApps fill="#475569" size={20} />
        </figure>
      </div>
    </div>
  )
}
