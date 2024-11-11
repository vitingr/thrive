import Image from 'next/image'

import { Anchor } from '@/components/toolkit/Anchor'
import { NavigationProps } from './types'

export const Navigation: React.FC<NavigationProps> = ({ copy }) => {
  return (
    <div className="flex w-full items-center justify-start gap-4">
      <Anchor className="max-w-12" href="#" variant="custom">
        <Image alt="Logo" height={93} src="/logos/logo.png" width={93} />
      </Anchor>
      <div className="relative flex w-full flex-1 lg:max-w-[300px]">
        <input
          autoComplete="off"
          className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          id="search"
          name="search"
          placeholder={copy.search}
          type="text"
        />
      </div>
    </div>
  )
}
