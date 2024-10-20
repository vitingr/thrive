import { PeopleYouMightKnow } from './PeopleYouMightKnow'
import { Treding } from './Trending'
import { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="sticky inset-0 top-28 h-full w-full max-w-xs">
      <div className="max-h-[420px] flex flex-col gap-8 w-full max-w-xs">
        <PeopleYouMightKnow />
        <Treding />
      </div>
    </aside>
  )
}
