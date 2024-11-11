import { IoApps } from 'react-icons/io5'

import { getUserSession } from '@/utils/auth/getUserSession'

import { CreatePost } from '../CreatePost'
import { UserScope } from './UserScope'
import { getLocale } from 'next-intl/server'
import { UserActionsProps } from './types'
import { Button } from '@/components/toolkit/Button'

export const UserActions: React.FC<UserActionsProps> = async ({ copy }) => {
  const user = await getUserSession()
  const locale = await getLocale()

  return (
    <div className="flex w-auto items-center justify-end gap-8 lg:w-full">
      <CreatePost userData={user} copy={copy} />
      <UserScope />
      {JSON.stringify(user)}
      <div className="flex items-center gap-8 border-l border-slate-300 pl-8">
        <Button className='md:text-sm' variant='secondary'>{copy.login.label}</Button>
        <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
          <IoApps fill="#475569" size={20} />
        </figure>
      </div>
    </div>
  )
}
