'use client'

import { Button } from '@/components/toolkit/Button'
import { useUserProfileContext } from '@/contexts/UserProfileProvider'

import { NavigationProps } from './types'

export const Navigation: React.FC<NavigationProps> = ({ copy }) => {
  const { currentSelectedTab, setCurrentSelectedTab } = useUserProfileContext()

  return (
    <ul className="flex w-full overflow-hidden">
      {copy.navigation.map((navigationItem, index: number) => (
        <li className="contents" key={`${navigationItem}-${index}`}>
          <Button
            className={`flex items-center justify-center gap-2 whitespace-nowrap border-b-[3px] px-4 py-2 text-sm transition-all duration-300 lg:px-6 lg:py-3 lg:text-base ${currentSelectedTab === index ? 'border-slate-800 text-slate-600' : 'border-transparent text-slate-400 hover:border-slate-200 hover:text-slate-600'}`}
            onClick={() => setCurrentSelectedTab(index)}
            variant="custom"
          >
            {navigationItem}
          </Button>
        </li>
      ))}
    </ul>
  )
}
