'use client'

import { MyActivity } from './MyActivity'
import { Analytics } from './Analytics'
import { useUserProfileContext } from '@/contexts/UserProfileProvider'
import { MyFriends } from './MyFriends'
import { Settings } from './Settings'
import { SavedItems } from './SavedItems'

export const SelectedTabContent: React.FC = () => {
  const TABS_CONTENT = [
    <MyActivity />,
    <Analytics />,
    <MyFriends />,
    <SavedItems />,
    <Settings />
  ]

  const { currentSelectedTab } = useUserProfileContext()

  return TABS_CONTENT[currentSelectedTab]
}
