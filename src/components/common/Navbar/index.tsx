import { translation } from '@/utils/internationalization/translation'

import { Navigation } from './Navigation'
import { NavbarProps } from './types'
import { UserActions } from './UserActions'

export const Navbar: React.FC<NavbarProps> = async () => {
  const { raw } = await translation('navbar')

  return (
    <nav className="bg-neutral sticky top-0 z-[9999999] w-full border-b border-slate-200 bg-neutral-50 px-4 py-3">
      <section className="mx-auto flex w-full max-w-2xl items-center justify-between gap-6 lg:max-w-7xl lg:gap-0">
        <Navigation copy={raw('content')} />
        <UserActions copy={raw('content')} />
      </section>
    </nav>
  )
}
