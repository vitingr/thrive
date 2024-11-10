import { IoApps } from 'react-icons/io5'

import { getUserSession } from '@/utils/auth/getUserSession'

import { CreatePost } from '../CreatePost'
import { UserScope } from './UserScope'

export const UserActions: React.FC = async () => {
  const user = await getUserSession()

  return (
    <div className="flex w-auto items-center justify-end gap-8 lg:w-full">
      <CreatePost userData={user} />
      <UserScope />
      {JSON.stringify(user)}
      <div className="flex items-center gap-8 border-l border-slate-300 pl-8">
        <button>botao de login</button>
        <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
          <IoApps fill="#475569" size={20} />
        </figure>
      </div>
    </div>
  )
}
