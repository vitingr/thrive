import Image from 'next/image'
import { IoApps } from 'react-icons/io5'

import { Anchor } from '@/components/toolkit/Anchor'
import { getUserSession } from '@/utils/auth/getUserSession'

import { UserActionsProps } from './types'
import { UserScope } from './UserScope'
import { LogOut } from './UserScope/LogOut'

export const UserActions: React.FC<UserActionsProps> = async ({ copy }) => {
  const user = await getUserSession()

  return (
    <div className="flex w-auto items-center justify-end gap-8 lg:w-full">
      <UserScope />
      <div className="flex items-center gap-6 border-l border-slate-300 pl-8">
        {!user ? (
          <div className="flex items-center gap-3">
            <Anchor
              className="py-1 md:text-sm"
              href={copy.login.href}
              variant="secondary"
            >
              {copy.login.label}
            </Anchor>
            <Anchor
              className="py-1 md:text-sm"
              href={copy.signup.href}
              variant="secondaryOutline"
            >
              {copy.signup.label}
            </Anchor>
          </div>
        ) : (
          <>
            <Anchor
              className="h-full max-h-6 w-full max-w-6 lg:max-h-8 lg:max-w-8"
              variant="custom"
              href={`/profile/${user.id}`}
            >
              <Image
                alt={user.firstname}
                className="h-6 w-6 cursor-pointer rounded-full object-cover transition-all duration-300 hover:brightness-125 lg:h-8 lg:w-8"
                height={128}
                src={user.profile_picture}
                width={128}
              />
            </Anchor>
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
