import Image from 'next/image'
import { CiHashtag } from 'react-icons/ci'
import { GoHomeFill } from 'react-icons/go'
import {
  IoAddSharp,
  IoApps,
  IoMail,
  IoNotificationsSharp
} from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { NavbarProps } from './types'

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-neutral fixed w-full border-b border-slate-200 bg-neutral-50 py-3 px-4">
      <section className="mx-auto flex w-full max-w-2xl items-center justify-between lg:max-w-7xl">
        <div className="flex w-full items-center justify-start gap-4">
          <figure className="max-w-12">
            <Image alt="Logo" height={93} src="/logos/logo.png" width={93} />
          </figure>
          <div className="relative flex w-full max-w-[300px] flex-1">
            <input
              autoComplete="off"
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              id="search"
              placeholder='Pesquisar...'
              name="search"
              type="text"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-8">
          <div className="flex w-full max-w-[100px] cursor-pointer items-center gap-2.5 rounded-full bg-blue-500 px-4 py-2 transition-all duration-300 hover:brightness-125">
            <IoAddSharp className="white-icon" fill="#f8fafc" size={20} />
            <p className="text-sm font-medium text-white">Criar</p>
          </div>
          <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
            <GoHomeFill fill="#475569" size={24} />
          </figure>
          <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
            <IoMail fill="#475569" size={24} />
          </figure>
          <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
            <IoNotificationsSharp fill="#475569" size={24} />
          </figure>
          <div className="flex items-center gap-8 border-l border-slate-300 pl-8">
            <div className="flex w-full cursor-pointer items-center gap-2.5 rounded-full bg-slate-600 py-2 pl-2 pr-4 transition-all duration-300 hover:brightness-125">
              <figure className="max-w-6 rounded-full">
                <Image
                  alt="Profile picture"
                  className="rounded-full"
                  height={80}
                  src="https://cdn.dribbble.com/users/1788965/avatars/normal/9a9b5f241b42f53c18d60ff4f767840a.png?1720493945"
                  width={80}
                />
              </figure>
              <p className="text-sm font-medium text-white">Jeremias Jr.</p>
              <MdKeyboardArrowDown fill="#e2e8f0" size={16} />
            </div>
            <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
              <IoApps fill="#475569" size={24} />
            </figure>
          </div>
        </div>
      </section>
    </nav>
  )
}
