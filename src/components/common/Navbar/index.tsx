import Image from 'next/image'
import { GoHomeFill } from 'react-icons/go'
import { IoApps, IoMail, IoNotificationsSharp } from 'react-icons/io5'

import { getUserSession } from '@/utils/auth/getUserSession'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { CreatePost } from './CreatePost'
import { NavbarProps } from './types'
import Link from 'next/link'

export const Navbar: React.FC<NavbarProps> = async () => {
  const { session: userData } = await getUserSession()

  return (
    <nav className="bg-neutral fixed w-full border-b border-slate-200 bg-neutral-50 px-4 py-3">
      <section className="mx-auto gap-6 lg:gap-0 flex w-full max-w-2xl items-center justify-between lg:max-w-7xl">
        <div className="flex w-full items-center justify-start gap-4">
          <Link href="#" className="max-w-12">
            <Image alt="Logo" height={93} src="/logos/logo.png" width={93} />
          </Link>
          <div className="relative flex w-full lg:max-w-[300px] flex-1">
            <input
              autoComplete="off"
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              id="search"
              name="search"
              placeholder="Pesquisar..."
              type="text"
            />
          </div>
        </div>
        <div className="flex w-auto lg:w-full items-center justify-end gap-8">
          <SignedIn>
            <CreatePost userData={userData} />
          </SignedIn>
          <figure className="hidden cursor-pointer transition-all duration-300 hover:brightness-125 lg:flex">
            <GoHomeFill fill="#475569" size={20} />
          </figure>
          <figure className="hidden cursor-pointer transition-all duration-300 hover:brightness-125 lg:flex">
            <IoMail fill="#475569" size={20} />
          </figure>
          <figure className="hidden cursor-pointer transition-all duration-300 hover:brightness-125 lg:flex">
            <IoNotificationsSharp fill="#475569" size={20} />
          </figure>
          <div className="flex items-center gap-8 border-l border-slate-300 pl-8">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <figure className="cursor-pointer transition-all duration-300 hover:brightness-125">
              <IoApps fill="#475569" size={20} />
            </figure>
          </div>
        </div>
      </section>
    </nav>
  )
}
