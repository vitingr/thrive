import { PeopleYouMightKnow } from './PeopleYouMightKnow'
import { Treding } from './Trending'
import { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="hidden lg:sticky inset-0 top-28 h-full w-full max-w-xs">
      <div className="flex max-h-[420px] w-full max-w-xs flex-col gap-8">
        <PeopleYouMightKnow />
        <Treding />
        <Treding />
      </div>
    </aside>
  )
}
