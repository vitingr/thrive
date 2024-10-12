import { Button } from '@/components/toolkit/Button'

import { NavbarProps } from './types'

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <nav className="fixed mx-auto mt-24 flex w-full max-w-7xl justify-between gap-8 rounded-full bg-gray-400 bg-opacity-10 bg-clip-padding px-6 py-2 backdrop-blur-sm backdrop-filter">
        <ul className="flex w-full flex-1 items-center gap-8">
          <li className="cursor-pointer border-b border-transparent text-sm transition-all duration-300 hover:border-slate-700">
            Item 1
          </li>
          <li className="cursor-pointer border-b border-transparent text-sm transition-all duration-300 hover:border-slate-700">
            Item 2
          </li>
          <li className="cursor-pointer border-b border-transparent text-sm transition-all duration-300 hover:border-slate-700">
            Item 3
          </li>
          <li className="cursor-pointer border-b border-transparent text-sm transition-all duration-300 hover:border-slate-700">
            Item 4
          </li>
          <li className="cursor-pointer border-b border-transparent text-sm transition-all duration-300 hover:border-slate-700">
            Item 5
          </li>
          <li className="cursor-pointer border-b border-transparent text-sm transition-all duration-300 hover:border-slate-700">
            Item 6
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Button className="text-xs md:text-xs" variant="secondary">
            Sign-Up
          </Button>
          <Button className="text-xs md:text-xs" variant="secondaryOutline">
            Sign-In
          </Button>
        </div>
      </nav>
    </div>
  )
}
