'use client'

import { useUserProfileContext } from '@/contexts/UserProfileProvider'

import { Analytics } from './Analytics'
import { MyActivity } from './MyActivity'
import { MyFriends } from './MyFriends'
import { SavedItems } from './SavedItems'
import { Settings } from './Settings'

export const SelectedTabContent: React.FC = () => {
  const TABS_CONTENT = [
    <MyActivity key="my-activity-tab" />,
    <Analytics key="analytics-tab" />,
    <MyFriends key="my-friends-tab" />,
    <SavedItems key="saved-items-tab" />,
    <Settings key="settings-tab" />
  ]

  const { currentSelectedTab } = useUserProfileContext()

  return TABS_CONTENT[currentSelectedTab]
}
